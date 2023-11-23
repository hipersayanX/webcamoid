/* Webcamoid, webcam capture application.
 * Copyright (C) 2022  Gonzalo Exequiel Pedone
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

#include <QColor>
#include <akfrac.h>
#include <akpacket.h>
#include <akplugininfo.h>
#include <akpluginmanager.h>
#include <akvideocaps.h>
#include <akvideoconverter.h>
#include <akvideopacket.h>

#include "adjusthsl.h"

class AdjustHSLPrivate
{
    public:
        AdjustHSL *self {nullptr};
        QString m_description {QObject::tr("Adjust HSL")};
        AkElementType m_type {AkElementType_VideoFilter};
        AkElementCategory m_category {AkElementCategory_VideoFilter};
        IAkPropertyInt m_hue {QObject::tr("Hue")};
        IAkPropertyInt m_saturation {QObject::tr("Saturation")};
        IAkPropertyInt m_luminance {QObject::tr("Luminance")};
        AkVideoConverter m_videoConverter {AkVideoCaps(AkVideoCaps::Format_argbpack, 0, 0, {})};

        explicit AdjustHSLPrivate(AdjustHSL *self);
        template<typename T>
        inline T mod(T value, T mod)
        {
            return (value % mod + mod) % mod;
        }
};

AdjustHSL::AdjustHSL(QObject *parent):
    QObject(parent)
{
    this->d = new AdjustHSLPrivate(this);
    this->registerProperty("hue", &this->d->m_hue);
    this->registerProperty("saturation", &this->d->m_saturation);
    this->registerProperty("luminance", &this->d->m_luminance);
}

AdjustHSL::~AdjustHSL()
{
    delete this->d;
}

QString AdjustHSL::description() const
{
    return this->d->m_description;
}

AkElementType AdjustHSL::type() const
{
    return this->d->m_type;
}

AkElementCategory AdjustHSL::category() const
{
    return this->d->m_category;
}

void *AdjustHSL::queryInterface(const QString &interfaceId)
{
    if (interfaceId == IAK_VIDEO_FILTER
        || interfaceId == IAK_UI_QML)
        return this;

    return IAkPlugin::queryInterface(interfaceId);
}

IAkElement *AdjustHSL::create(const QString &id)
{
    Q_UNUSED(id)

    return new AdjustHSL;
}

int AdjustHSL::registerElements(const QStringList &args)
{
    QString pluginPath;
    auto keyMax = 2 * ((args.size() >> 1) - 1);

    for (int i = keyMax; i >= 0; i -= 2)
        if (args[i] == "pluginPath") {
            pluginPath = args.value(i + 1);

            break;
        }

    AkPluginInfo pluginInfo("VideoFilter/AdjustHSL",
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

void AdjustHSL::deleteThis(void *userData) const
{
    delete reinterpret_cast<AdjustHSL *>(userData);
}

QString AdjustHSL::controlInterfaceProvide(const QString &controlId) const
{
    Q_UNUSED(controlId)

    return QString("qrc:/AdjustHSL/share/qml/main.qml");
}

void AdjustHSL::controlInterfaceConfigure(QQmlContext *context,
                                          const QString &controlId) const
{
    Q_UNUSED(controlId)

    context->setContextProperty("AdjustHSL", const_cast<QObject *>(qobject_cast<const QObject *>(this)));
    context->setContextProperty("controlId", this->objectName());
}

AkPacket AdjustHSL::iVideoStream(const AkVideoPacket &packet)
{
    if (this->d->m_hue == 0
        && this->d->m_saturation == 0
        && this->d->m_luminance == 0) {
        if (packet)
            this->oStream(packet);

        return packet;
    }

    this->d->m_videoConverter.begin();
    auto src = this->d->m_videoConverter.convert(packet);
    this->d->m_videoConverter.end();

    if (!src) {
        if (packet)
            this->oStream(packet);

        return packet;
    }

    int hue = this->d->m_hue;
    int saturation = this->d->m_saturation;
    int luminance = this->d->m_luminance;

    AkVideoPacket dst(src.caps());
    dst.copyMetadata(src);

    for (int y = 0; y < src.caps().height(); ++y) {
        auto srcLine = reinterpret_cast<const QRgb *>(src.constLine(0, y));
        auto dstLine = reinterpret_cast<QRgb *>(dst.line(0, y));

        for (int x = 0; x < src.caps().width(); ++x) {
            int h;
            int s;
            int l;
            int a;
            QColor(srcLine[x]).getHsl(&h, &s, &l, &a);
            int ht = this->d->mod(h + hue, 360);
            int st = qBound(0, s + saturation, 255);
            int lt = qBound(0, l + luminance, 255);
            QColor color;
            color.setHsl(ht, st, lt, a);
            dstLine[x] = color.rgba();
        }
    }

    if (dst)
        this->oStream(dst);

    return dst;
}

AdjustHSLPrivate::AdjustHSLPrivate(AdjustHSL *self):
    self(self)
{

}

#include "moc_adjusthsl.cpp"
