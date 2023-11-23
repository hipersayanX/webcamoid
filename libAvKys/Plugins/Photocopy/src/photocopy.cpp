/* Webcamoid, webcam capture application.
 * Copyright (C) 2016  Gonzalo Exequiel Pedone
 *
 * Webcamoid is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Webcamoid is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Webcamoid. If not, see <http://www.gnu.org/licenses/>.
 *
 * Web-Site: http://webcamoid.github.io/
 */

#include <QMutex>
#include <QtMath>
#include <akfrac.h>
#include <akpacket.h>
#include <akplugininfo.h>
#include <akpluginmanager.h>
#include <akvideocaps.h>
#include <akvideoconverter.h>
#include <akvideopacket.h>

#include "photocopy.h"

class PhotocopyPrivate
{
    public:
        Photocopy *self {nullptr};
        QString m_description {QObject::tr("Photocopy")};
        AkElementType m_type {AkElementType_VideoFilter};
        AkElementCategory m_category {AkElementCategory_VideoFilter};
        int m_brightness {191};
        int m_contrast {20};
        quint16 m_lumaTable[256];
        QMutex m_mutex;
        AkVideoConverter m_videoConverter {{AkVideoCaps::Format_argbpack, 0, 0, {}}};

        explicit PhotocopyPrivate(Photocopy *self);
        inline static int rgbToLuma(QRgb pixel);
        void updateLumaTable();
};

Photocopy::Photocopy(QObject *parent):
    QObject(parent)
{
    this->d = new PhotocopyPrivate(this);
    this->d->updateLumaTable();
}

Photocopy::~Photocopy()
{
    delete this->d;
}

QString Photocopy::description() const
{
    return this->d->m_description;
}

AkElementType Photocopy::type() const
{
    return this->d->m_type;
}

AkElementCategory Photocopy::category() const
{
    return this->d->m_category;
}

void *Photocopy::queryInterface(const QString &interfaceId)
{
    if (interfaceId == IAK_VIDEO_FILTER
        || interfaceId == IAK_UI_QML)
        return this;

    return IAkPlugin::queryInterface(interfaceId);
}

IAkElement *Photocopy::create(const QString &id)
{
    Q_UNUSED(id)

    return new Photocopy;
}

int Photocopy::registerElements(const QStringList &args)
{
    QString pluginPath;
    auto keyMax = 2 * ((args.size() >> 1) - 1);

    for (int i = keyMax; i >= 0; i -= 2)
        if (args[i] == "pluginPath") {
            pluginPath = args.value(i + 1);

            break;
        }

    AkPluginInfo pluginInfo("VideoFilter/Photocopy",
                            this->d->m_description,
                            pluginPath,
                            QStringList(),
                            this->d->m_type,
                            this->d->m_category,
                            0,
                            this);
    akPluginManager->registerPlugin(pluginInfo);

    return 0;
}

int Photocopy::brightness() const
{
    return this->d->m_brightness;
}

int Photocopy::contrast() const
{
    return this->d->m_contrast;
}

void Photocopy::deleteThis(void *userData) const
{
    delete reinterpret_cast<Photocopy *>(userData);
}

QString Photocopy::controlInterfaceProvide(const QString &controlId) const
{
    Q_UNUSED(controlId)

    return QString("qrc:/Photocopy/share/qml/main.qml");
}

void Photocopy::controlInterfaceConfigure(QQmlContext *context,
                                                 const QString &controlId) const
{
    Q_UNUSED(controlId)

    context->setContextProperty("Photocopy", const_cast<QObject *>(qobject_cast<const QObject *>(this)));
    context->setContextProperty("controlId", this->objectName());
}

AkPacket Photocopy::iVideoStream(const AkVideoPacket &packet)
{
    this->d->m_videoConverter.begin();
    auto src = this->d->m_videoConverter.convert(packet);
    this->d->m_videoConverter.end();

    if (!src)
        return {};

    auto ocaps = src.caps();
    ocaps.setFormat(AkVideoCaps::Format_ya88pack);
    AkVideoPacket dst(ocaps);
    dst.copyMetadata(src);

    this->d->m_mutex.lock();

    for (int y = 0; y < src.caps().height(); y++) {
        auto srcLine = reinterpret_cast<const QRgb *>(src.constLine(0, y));
        auto dstLine = reinterpret_cast<quint16 *>(dst.line(0, y));

        for (int x = 0; x < src.caps().width(); x++) {
            auto &pixel = srcLine[x];
            int luma = PhotocopyPrivate::rgbToLuma(pixel);
            dstLine[x] = (this->d->m_lumaTable[luma] << 8) | qAlpha(pixel);
        }
    }

    this->d->m_mutex.unlock();

    if (dst)
        this->oStream(dst);

    return dst;
}

void Photocopy::setBrightness(int brightness)
{
    if (this->d->m_brightness == brightness)
        return;

    this->d->m_mutex.lock();
    this->d->m_brightness = brightness;
    this->d->updateLumaTable();
    this->d->m_mutex.unlock();
    emit this->brightnessChanged(brightness);
}

void Photocopy::setContrast(int contrast)
{
    if (this->d->m_contrast == contrast)
        return;

    this->d->m_mutex.lock();
    this->d->m_contrast = contrast;
    this->d->updateLumaTable();
    this->d->m_mutex.unlock();
    emit this->contrastChanged(contrast);
}

void Photocopy::resetBrightness()
{
    this->setBrightness(191);
}

void Photocopy::resetContrast()
{
    this->setContrast(20);
}

PhotocopyPrivate::PhotocopyPrivate(Photocopy *self):
    self(self)
{

}

int PhotocopyPrivate::rgbToLuma(QRgb pixel)
{
    //desaturate
    int r = qRed(pixel);
    int g = qGreen(pixel);
    int b = qBlue(pixel);

    int min = qMin(r, qMin(g, b));
    int max = qMax(r, qMax(g, b));

    return (max + min) >> 1;
}

void PhotocopyPrivate::updateLumaTable()
{
    //compute sigmoidal transfer
    auto brightness = qBound(0, this->m_brightness, 255);
    auto contrast = qBound(0, this->m_contrast, 255);

    for (int i = 0; i < 256; i++) {
        int val = qRound(brightness / (1.0 + qExp(contrast * (127 - i) / 255)));
        this->m_lumaTable[i] = qBound(0, val, 255);
    }
}

#include "moc_photocopy.cpp"
