/* Webcamoid, webcam capture application.
 * Copyright (C) 2024  Gonzalo Exequiel Pedone
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

#ifndef AUDIOENCODERVORBISELEMENT_H
#define AUDIOENCODERVORBISELEMENT_H

#include <iak/akaudioencoder.h>

class AudioEncoderVorbisElementPrivate;

class AudioEncoderVorbisElement: public AkAudioEncoder
{
    Q_OBJECT

    public:
        AudioEncoderVorbisElement();
        ~AudioEncoderVorbisElement();

        Q_INVOKABLE QStringList codecs() const override;
        Q_INVOKABLE AkAudioEncoderCodecID codecID(const QString &codec) const override;
        Q_INVOKABLE QString codecDescription(const QString &codec) const override;
        Q_INVOKABLE AkCompressedAudioCaps outputCaps() const override;
        Q_INVOKABLE AkCompressedPackets headers() const override;
        Q_INVOKABLE qint64 encodedTimePts() const override;

    private:
        AudioEncoderVorbisElementPrivate *d;

    protected:
        QString controlInterfaceProvide(const QString &controlId) const override;
        void controlInterfaceConfigure(QQmlContext *context,
                                       const QString &controlId) const override;
        AkPacket iAudioStream(const AkAudioPacket &packet) override;

    public slots:
        bool setState(AkElement::ElementState state) override;
};

#endif // AUDIOENCODERVORBISELEMENT_H
