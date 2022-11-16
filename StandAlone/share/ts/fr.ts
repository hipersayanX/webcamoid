<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr">
<context>
    <name>About</name>
    <message>
        <location filename="../qml/About.qml" line="58"/>
        <source>Version %1</source>
        <translation>Version %1</translation>
    </message>
    <message>
        <location filename="../qml/About.qml" line="66"/>
        <source>Built from</source>
        <extracomment>Built from &quot;short commit hash&quot;</extracomment>
        <translation>Conçu à base de</translation>
    </message>
    <message>
        <location filename="../qml/About.qml" line="72"/>
        <source>Built from %1</source>
        <translation>Conçu à base de %1</translation>
    </message>
    <message>
        <location filename="../qml/About.qml" line="74"/>
        <source>Open the commit in your web browser</source>
        <translation>Ouvrez le rapport dans votre navigateur web</translation>
    </message>
    <message>
        <location filename="../qml/About.qml" line="80"/>
        <source>Using Qt %1</source>
        <translation>Avec Qt %1</translation>
    </message>
    <message>
        <location filename="../qml/About.qml" line="84"/>
        <source>Website</source>
        <translation>Site Web</translation>
    </message>
    <message>
        <location filename="../qml/About.qml" line="88"/>
        <source>Go to %1 website</source>
        <translation>Aller sur le site web %1</translation>
    </message>
    <message>
        <location filename="../qml/About.qml" line="96"/>
        <source>Webcam capture application.</source>
        <translation>Application de capture de webcam.</translation>
    </message>
    <message>
        <location filename="../qml/About.qml" line="99"/>
        <source>A simple webcam application for picture and video capture.</source>
        <translation>Une application webcam simple pour la capture d’images et de vidéos.</translation>
    </message>
</context>
<context>
    <name>AboutDialog</name>
    <message>
        <location filename="../qml/AboutDialog.qml" line="32"/>
        <source>About %1</source>
        <translation>A propos de %1</translation>
    </message>
    <message>
        <location filename="../qml/AboutDialog.qml" line="47"/>
        <source>About</source>
        <extracomment>Information of the program, like name, description, version, etc..</extracomment>
        <translation>A propos</translation>
    </message>
    <message>
        <location filename="../qml/AboutDialog.qml" line="53"/>
        <source>Contributors</source>
        <extracomment>List of people contributing to the project: software developers, translators, designers, etc..</extracomment>
        <translation>Contributeurs</translation>
    </message>
    <message>
        <location filename="../qml/AboutDialog.qml" line="57"/>
        <source>License</source>
        <extracomment>Program license.</extracomment>
        <translation>Licence</translation>
    </message>
    <message>
        <location filename="../qml/AboutDialog.qml" line="63"/>
        <source>3rd Party Licenses</source>
        <extracomment>License for 3rd party components used in Webcamoid, like libraries and code snippets.</extracomment>
        <translation>Licences tierces</translation>
    </message>
</context>
<context>
    <name>AddVideoFormat</name>
    <message>
        <location filename="../qml/AddVideoFormat.qml" line="44"/>
        <source>Add Video Format</source>
        <translation>Ajouter un format vidéo</translation>
    </message>
    <message>
        <location filename="../qml/AddVideoFormat.qml" line="45"/>
        <source>Change Video Format</source>
        <translation>Changer le format vidéo</translation>
    </message>
    <message>
        <location filename="../qml/AddVideoFormat.qml" line="97"/>
        <source>Remove format</source>
        <translation>Retirer le format</translation>
    </message>
    <message>
        <location filename="../qml/AddVideoFormat.qml" line="109"/>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <location filename="../qml/AddVideoFormat.qml" line="120"/>
        <source>Width</source>
        <translation>Largeur</translation>
    </message>
    <message>
        <location filename="../qml/AddVideoFormat.qml" line="133"/>
        <source>Height</source>
        <translation>Hauteur</translation>
    </message>
    <message>
        <location filename="../qml/AddVideoFormat.qml" line="146"/>
        <source>Frame rate</source>
        <translation>Fréquence d&apos;images</translation>
    </message>
</context>
<context>
    <name>AudioCodecOptions</name>
    <message>
        <location filename="../qml/AudioCodecOptions.qml" line="27"/>
        <source>Audio Codec Options</source>
        <translation>Options format audio</translation>
    </message>
    <message>
        <location filename="../qml/AudioCodecOptions.qml" line="167"/>
        <source>Bitrate</source>
        <translation>Débit</translation>
    </message>
    <message>
        <location filename="../qml/AudioCodecOptions.qml" line="171"/>
        <source>Bitrate (bits/secs)</source>
        <translation>Débit (bits/s)</translation>
    </message>
</context>
<context>
    <name>AudioDeviceOptions</name>
    <message>
        <location filename="../qml/AudioDeviceOptions.qml" line="27"/>
        <source>Audio Device Options</source>
        <translation>Options d&apos;appareil audio</translation>
    </message>
    <message>
        <location filename="../qml/AudioDeviceOptions.qml" line="137"/>
        <source>Sample Format</source>
        <extracomment>An sample represents the strength of the wave at a certain time. A sample can be expressed as the number of bits defining it (more bits better sound), the type of data representing it (signed integer, unsigned integer, floating point), and the endianness of the data (big endian, little endian). The sample format is the representation of that information. For example, &apos;s16le&apos; means that each sample format is represented by a 16 bits signed integer arranged as little endian.</extracomment>
        <translation>Format de l&apos;échantillon</translation>
    </message>
    <message>
        <location filename="../qml/AudioDeviceOptions.qml" line="161"/>
        <source>Channels</source>
        <translation>Canaux</translation>
    </message>
    <message>
        <location filename="../qml/AudioDeviceOptions.qml" line="186"/>
        <source>Sample Rate</source>
        <extracomment>Number of audio samples per channel to be played per second.</extracomment>
        <translation>Débit d’échantillonnage</translation>
    </message>
    <message>
        <location filename="../qml/AudioDeviceOptions.qml" line="219"/>
        <source>Latency (ms)</source>
        <extracomment>The latency is the amount of accumulated audio ready to play, measured in time. Higher latency == smoother audio playback, but more desynchronization with the video. Lowerer latency == audio synchronization near to the video, but glitchy audio playback. https://en.wikipedia.org/wiki/Latency_(audio)</extracomment>
        <translation>Latence (ms)</translation>
    </message>
</context>
<context>
    <name>AudioInputs</name>
    <message>
        <location filename="../qml/AudioInputs.qml" line="44"/>
        <source>Configure input</source>
        <translation>Configurer l&apos;entrée</translation>
    </message>
</context>
<context>
    <name>AudioLayer</name>
    <message>
        <location filename="../../src/audiolayer.cpp" line="244"/>
        <source>Silence</source>
        <translation>Silence</translation>
    </message>
</context>
<context>
    <name>AudioOptions</name>
    <message>
        <location filename="../qml/AudioOptions.qml" line="30"/>
        <source>Outputs</source>
        <translation>Sorties</translation>
    </message>
    <message>
        <location filename="../qml/AudioOptions.qml" line="33"/>
        <source>Sources</source>
        <translation>Sources</translation>
    </message>
</context>
<context>
    <name>AudioOutputs</name>
    <message>
        <location filename="../qml/AudioOutputs.qml" line="44"/>
        <source>Configure output</source>
        <translation>Configurer la sortie</translation>
    </message>
</context>
<context>
    <name>AudioVideoPanel</name>
    <message>
        <location filename="../qml/AudioVideoPanel.qml" line="27"/>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <location filename="../qml/AudioVideoPanel.qml" line="29"/>
        <source>Video</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <location filename="../qml/AudioVideoPanel.qml" line="31"/>
        <source>Video Source Options</source>
        <translation>Options de source vidéo</translation>
    </message>
    <message>
        <location filename="../qml/AudioVideoPanel.qml" line="32"/>
        <source>Video Output Options</source>
        <translation>Options de sortie vidéo</translation>
    </message>
</context>
<context>
    <name>Commons</name>
    <message>
        <location filename="../qml/Commons.qml" line="28"/>
        <source>The virtual camera is in use by the following applications:</source>
        <translation>La caméra virtuelle est utilisée par les applications suivantes :</translation>
    </message>
    <message>
        <location filename="../qml/Commons.qml" line="40"/>
        <source>Stop the camera in those applications or close them and try again.</source>
        <translation>Arrêtez la caméra dans ces applications ou fermez-les et réessayez.</translation>
    </message>
</context>
<context>
    <name>Contributors</name>
    <message>
        <location filename="../qml/Contributors.qml" line="36"/>
        <source>Thanks to all these cool people that helped contributing to Webcamoid all these years.</source>
        <translation>Merci à tous ces gens cool qui ont contribué à Webcamoid durant toutes ces années.</translation>
    </message>
</context>
<context>
    <name>DownloadDialog</name>
    <message>
        <location filename="../qml/DownloadDialog.qml" line="32"/>
        <source>Downloading %1</source>
        <translation>Téléchargement de %1</translation>
    </message>
    <message>
        <location filename="../qml/DownloadDialog.qml" line="150"/>
        <source>From: %1</source>
        <translation>De : %1</translation>
    </message>
    <message>
        <location filename="../qml/DownloadDialog.qml" line="154"/>
        <source>To: %1</source>
        <translation>A : %1</translation>
    </message>
    <message>
        <location filename="../qml/DownloadDialog.qml" line="158"/>
        <source>Size: %1 %2B / %3 %4B</source>
        <translation>Taille : %1 %2B / %3 %4B</translation>
    </message>
    <message>
        <location filename="../qml/DownloadDialog.qml" line="166"/>
        <source>Speed: %1 %2B/s</source>
        <translation>Vitesse : %1 %2B/s</translation>
    </message>
    <message>
        <location filename="../qml/DownloadDialog.qml" line="172"/>
        <source>Time remaining: %1</source>
        <translation>Temps restant : %1</translation>
    </message>
</context>
<context>
    <name>DownloadFailedDialog</name>
    <message>
        <location filename="../qml/DownloadFailedDialog.qml" line="31"/>
        <source>Download failed</source>
        <translation>Échec du téléchargement</translation>
    </message>
</context>
<context>
    <name>DownloadSucceededDialog</name>
    <message>
        <location filename="../qml/DownloadSucceededDialog.qml" line="31"/>
        <source>Download ready</source>
        <translation>Prêt à télécharger</translation>
    </message>
    <message>
        <location filename="../qml/DownloadSucceededDialog.qml" line="47"/>
        <source>Install the virtual camera?</source>
        <translation>Installer la caméra virtuelle ?</translation>
    </message>
</context>
<context>
    <name>GeneralConfig</name>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="94"/>
        <source>Video capture</source>
        <translation>Capture vidéo</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="151"/>
        <source>Video convert</source>
        <translation>Conversion vidéo</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="208"/>
        <source>Virtual camera driver</source>
        <translation>Pilote virtuel de la caméra</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="170"/>
        <source>Video playback</source>
        <translation>Lecture vidéo</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="73"/>
        <source>Play sources on start</source>
        <extracomment>Start playing the webcam and other sources right after * opening Webcamoid.</extracomment>
        <translation>Lire les sources au démarrage</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="84"/>
        <source>Frameworks and libraries</source>
        <translation>Frameworks et bibliothèques</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="113"/>
        <source>Screen capture</source>
        <translation>Capture d&apos;écran</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="132"/>
        <source>Audio capture/playback</source>
        <translation>Capture Audio/Lecture</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="189"/>
        <source>Video record</source>
        <translation>Enregistrement vidéo</translation>
    </message>
    <message>
        <location filename="../qml/GeneralConfig.qml" line="230"/>
        <source>Root method</source>
        <extracomment>The preferred method for executing commands with elevated privileges in the system.</extracomment>
        <translation>Méthode racine</translation>
    </message>
</context>
<context>
    <name>ImageCapture</name>
    <message>
        <location filename="../qml/ImageCapture.qml" line="40"/>
        <source>Images directory</source>
        <translation>Répertoire d&apos;images</translation>
    </message>
    <message>
        <location filename="../qml/ImageCapture.qml" line="51"/>
        <source>Search</source>
        <translation>Rechercher</translation>
    </message>
    <message>
        <location filename="../qml/ImageCapture.qml" line="52"/>
        <source>Search directory to save imagess</source>
        <translation>Recherche de dossiers pour sauvegarder les images</translation>
    </message>
    <message>
        <location filename="../qml/ImageCapture.qml" line="61"/>
        <source>File format</source>
        <translation>Format de fichier</translation>
    </message>
    <message>
        <location filename="../qml/ImageCapture.qml" line="92"/>
        <source>Quality</source>
        <translation>Qualité</translation>
    </message>
    <message>
        <location filename="../qml/ImageCapture.qml" line="119"/>
        <source>Select the folder to save your photos</source>
        <translation>Sélectionnez un dossier où enregistrer vos photos</translation>
    </message>
</context>
<context>
    <name>OptionsPanel</name>
    <message>
        <location filename="../qml/OptionsPanel.qml" line="199"/>
        <source>Close %1 panel</source>
        <translation>Fermer le panneau %1</translation>
    </message>
</context>
<context>
    <name>PipewireScreenDev</name>
    <message>
        <location filename="../../../libAvKys/Plugins/DesktopCapture/src/pipewire/src/pipewirescreendev.cpp" line="216"/>
        <source>PipeWire Screen</source>
        <translation>Filtre à tubes</translation>
    </message>
</context>
<context>
    <name>PluginConfig</name>
    <message>
        <location filename="../qml/PluginConfig.qml" line="35"/>
        <source>Paths</source>
        <translation>Chemins</translation>
    </message>
    <message>
        <location filename="../qml/PluginConfig.qml" line="38"/>
        <source>Plugins</source>
        <translation>Greffons</translation>
    </message>
    <message>
        <location filename="../qml/PluginConfig.qml" line="164"/>
        <source>Search plugins in subfolders</source>
        <translation>Rechercher des greffons dans les sous-dossiers</translation>
    </message>
    <message>
        <location filename="../qml/PluginConfig.qml" line="173"/>
        <source>Add path</source>
        <translation>Ajouter un chemin</translation>
    </message>
    <message>
        <location filename="../qml/PluginConfig.qml" line="211"/>
        <source>Update</source>
        <translation>Mettre à jour</translation>
    </message>
    <message>
        <location filename="../qml/PluginConfig.qml" line="212"/>
        <source>Update plugins list</source>
        <translation>Mise à jour de la liste des plugins</translation>
    </message>
    <message>
        <location filename="../qml/PluginConfig.qml" line="239"/>
        <source>Add plugins search path</source>
        <translation>Ajouter un chemin de recherche des greffons</translation>
    </message>
</context>
<context>
    <name>PluginsPathItem</name>
    <message>
        <location filename="../qml/PluginsPathItem.qml" line="52"/>
        <source>Remove</source>
        <translation>Supprimer</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../../src/clioptions.cpp" line="45"/>
        <source>Webcam capture application.</source>
        <translation>Application de capture de webcam.</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="48"/>
        <source>Load settings from PATH. If PATH is empty, load configs from application directory.</source>
        <translation>Chargement des paramètres depuis le CHEMIN. Si le CHEMIN est vide, le chargement des configurations se fera depuis le répertoire d&apos;application.</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="50"/>
        <source>PATH</source>
        <translation>CHEMIN</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="62"/>
        <location filename="../../src/clioptions.cpp" line="71"/>
        <source>PATH1;PATH2;PATH3;...</source>
        <translation>Chemin 1 ; Chemin 2 ; Chemin 3…</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="76"/>
        <source>Send debug output to a file</source>
        <translation>Envoyer le débogage de sortie vers un fichier</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="77"/>
        <source>FILE</source>
        <translation>FICHIER</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="81"/>
        <source>Open a new instance of %1.</source>
        <translation>Ouvrir une nouvelle instance de %1.</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="55"/>
        <source>Search in the specified plugins paths recursively.</source>
        <translation>Recherche récursive dans les chemins des plugins spécifiés.</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="60"/>
        <source>Semi-colon separated list of paths to search for plugins.</source>
        <translation>Liste de chemins séparés par points-virgules pour la recherche de plugins.</translation>
    </message>
    <message>
        <location filename="../../src/clioptions.cpp" line="69"/>
        <source>Semi-colon separated list of paths to avoid loading.</source>
        <extracomment>Blacklist of plugins that could have conflicts when loading in Webcamoid.</extracomment>
        <translation>Liste de chemins séparés par points-virgules pour éviter le chargement.</translation>
    </message>
</context>
<context>
    <name>Recording</name>
    <message>
        <location filename="../../src/recording.cpp" line="376"/>
        <source>%1/Video %2.%3</source>
        <translation>%1/Vidéo %2.%3</translation>
    </message>
</context>
<context>
    <name>RecordingNotice</name>
    <message>
        <location filename="../qml/RecordingNotice.qml" line="55"/>
        <source>Recording</source>
        <translation>Enregistrement</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="../qml/SettingsDialog.qml" line="73"/>
        <source>Image Capture</source>
        <translation>Capture d&apos;image</translation>
    </message>
    <message>
        <location filename="../qml/SettingsDialog.qml" line="76"/>
        <source>Video Recording</source>
        <translation>Enregistrement vidéo</translation>
    </message>
    <message>
        <location filename="../qml/SettingsDialog.qml" line="79"/>
        <source>General Options</source>
        <translation>Options générales</translation>
    </message>
    <message>
        <location filename="../qml/SettingsDialog.qml" line="82"/>
        <source>Plugins</source>
        <translation>Greffons</translation>
    </message>
    <message>
        <location filename="../qml/SettingsDialog.qml" line="85"/>
        <source>Updates</source>
        <translation>Mises à jour</translation>
    </message>
</context>
<context>
    <name>SettingsMenu</name>
    <message>
        <location filename="../qml/SettingsMenu.qml" line="40"/>
        <source>Video</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <location filename="../qml/SettingsMenu.qml" line="46"/>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <location filename="../qml/SettingsMenu.qml" line="52"/>
        <source>Preferences</source>
        <translation>Préférences</translation>
    </message>
    <message>
        <location filename="../qml/SettingsMenu.qml" line="58"/>
        <source>Donate</source>
        <translation>Faire un don</translation>
    </message>
    <message>
        <location filename="../qml/SettingsMenu.qml" line="64"/>
        <source>About</source>
        <translation>À propos</translation>
    </message>
    <message>
        <location filename="../qml/SettingsMenu.qml" line="71"/>
        <source>Play sources</source>
        <translation>Lire les sources</translation>
    </message>
</context>
<context>
    <name>TableColor</name>
    <message>
        <location filename="../../../libAvKys/Plugins/FalseColor/share/qml/TableColor.qml" line="37"/>
        <source>Select the new color</source>
        <translation>Sélectionner la nouvelle couleur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FalseColor/share/qml/TableColor.qml" line="39"/>
        <source>Color %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FalseColor/share/qml/TableColor.qml" line="45"/>
        <source>Remove color %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UpdatesConfig</name>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="84"/>
        <source>Notify about new versions</source>
        <translation>Notifier les nouvelles versions</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="96"/>
        <source>Show updates dialog</source>
        <translation>Afficher les dialogues mis à jour</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="106"/>
        <source>Check new versions</source>
        <translation>Vérifier les nouvelles versions</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="115"/>
        <source>Daily</source>
        <translation>Quotidiennement</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="119"/>
        <source>Every two days</source>
        <translation>Tous les deux jours</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="123"/>
        <source>Weekly</source>
        <translation>Hebdomadairement</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="127"/>
        <source>Every two weeks</source>
        <translation>Toutes les deux semaines</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="131"/>
        <source>Monthly</source>
        <translation>Mensuellement</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="135"/>
        <source>Never</source>
        <translation>Jamais</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="148"/>
        <source>Last updated</source>
        <translation>Dernière mise à jour</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="169"/>
        <source>Your version of %1 is outdated. Latest version is &lt;b&gt;%2&lt;/b&gt;.</source>
        <translation>Votre version de %1 est périmée. La dernière version est &lt;b&gt;%2&lt;/b&gt;.</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="175"/>
        <source>Upgrade Now!</source>
        <translation>Mettez-vous à niveau !</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="190"/>
        <source>Thanks for using a &lt;b&gt;development version&lt;/b&gt;!&lt;br /&gt;It will be very helpful if you can report any bug and suggestions you have.</source>
        <translation>Merci d&apos;utiliser une &lt;b&gt;version de développement&lt;/b&gt; ! &lt;br /&gt; Cela serait vraiment utile si vous pouvez signaler tout bug ou suggestion.</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesConfig.qml" line="195"/>
        <source>Report a Bug</source>
        <translation>Signaler une erreur</translation>
    </message>
</context>
<context>
    <name>UpdatesDialog</name>
    <message>
        <location filename="../qml/UpdatesDialog.qml" line="33"/>
        <source>New version available!</source>
        <translation>Nouvelle version disponible !</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesDialog.qml" line="72"/>
        <source>Download %1 %2 NOW!</source>
        <translation>Télécharger %1 %2 MAINTENANT !</translation>
    </message>
    <message>
        <location filename="../qml/UpdatesDialog.qml" line="79"/>
        <source>Show this dialog next time</source>
        <translation>Montrer ce dialogue la prochaine fois</translation>
    </message>
</context>
<context>
    <name>VCamInstallFailedDialog</name>
    <message>
        <location filename="../qml/VCamInstallFailedDialog.qml" line="31"/>
        <source>Installation failed</source>
        <translation>Échec de l&apos;installation</translation>
    </message>
</context>
<context>
    <name>VCamInstallSucceededDialog</name>
    <message>
        <location filename="../qml/VCamInstallSucceededDialog.qml" line="31"/>
        <source>Installation succeeded</source>
        <translation>Installation réussie</translation>
    </message>
    <message>
        <location filename="../qml/VCamInstallSucceededDialog.qml" line="40"/>
        <source>Restart Webcamoid?</source>
        <translation>Redémarrer Webcamoid ?</translation>
    </message>
</context>
<context>
    <name>VCamManualDownloadDialog</name>
    <message>
        <location filename="../qml/VCamManualDownloadDialog.qml" line="31"/>
        <source>Can&apos;t get latest version</source>
        <translation>Impossible d&apos;obtenir la dernière version</translation>
    </message>
    <message>
        <location filename="../qml/VCamManualDownloadDialog.qml" line="40"/>
        <source>Download the virtual camera manually?</source>
        <translation>Télécharger manuellement la caméra virtuelle ?</translation>
    </message>
</context>
<context>
    <name>VideoCodecOptions</name>
    <message>
        <location filename="../qml/VideoCodecOptions.qml" line="27"/>
        <source>Video Codec Options</source>
        <translation>Options des codecs vidéos</translation>
    </message>
    <message>
        <location filename="../qml/VideoCodecOptions.qml" line="170"/>
        <source>Bitrate</source>
        <translation>Débit</translation>
    </message>
    <message>
        <location filename="../qml/VideoCodecOptions.qml" line="174"/>
        <source>Bitrate (bits/secs)</source>
        <translation>Débit (bits/s)</translation>
    </message>
    <message>
        <location filename="../qml/VideoCodecOptions.qml" line="187"/>
        <location filename="../qml/VideoCodecOptions.qml" line="191"/>
        <source>Keyframes stride</source>
        <translation>Allongement d&apos;images-clés</translation>
    </message>
</context>
<context>
    <name>VideoEffectOptions</name>
    <message>
        <location filename="../qml/VideoEffectOptions.qml" line="53"/>
        <source>Remove</source>
        <translation>Supprimer</translation>
    </message>
    <message>
        <location filename="../qml/VideoEffectOptions.qml" line="58"/>
        <source>Remove %1 video effect</source>
        <translation>Supprimer l&apos;effet vidéo %1</translation>
    </message>
</context>
<context>
    <name>VideoEffectsDialog</name>
    <message>
        <location filename="../qml/VideoEffectsDialog.qml" line="36"/>
        <source>Add video effect</source>
        <translation>Ajouter des effets vidéos</translation>
    </message>
    <message>
        <location filename="../qml/VideoEffectsDialog.qml" line="87"/>
        <source>Search effect</source>
        <translation>Rechercher un effet</translation>
    </message>
    <message>
        <location filename="../qml/VideoEffectsDialog.qml" line="88"/>
        <source>Search video effect</source>
        <translation>Recherche d&apos;effet vidéo</translation>
    </message>
    <message>
        <location filename="../qml/VideoEffectsDialog.qml" line="204"/>
        <source>Chain effect</source>
        <extracomment>Apply the effect over the other effects.</extracomment>
        <translation>Effet de chaîne</translation>
    </message>
</context>
<context>
    <name>VideoEffectsList</name>
    <message>
        <location filename="../qml/VideoEffectsList.qml" line="47"/>
        <source>Add effect</source>
        <translation>Ajouter un effet</translation>
    </message>
    <message>
        <location filename="../qml/VideoEffectsList.qml" line="54"/>
        <source>Remove all effects</source>
        <translation>Supprimer tous les effets</translation>
    </message>
</context>
<context>
    <name>VideoEffectsPanel</name>
    <message>
        <location filename="../qml/VideoEffectsPanel.qml" line="27"/>
        <source>Effects</source>
        <translation>Effets</translation>
    </message>
    <message>
        <location filename="../qml/VideoEffectsPanel.qml" line="28"/>
        <source>%1 options</source>
        <translation>%1 options</translation>
    </message>
</context>
<context>
    <name>VideoFormatOptions</name>
    <message>
        <location filename="../qml/VideoFormatOptions.qml" line="27"/>
        <source>Video Format Options</source>
        <translation>Options de format vidéo</translation>
    </message>
    <message>
        <location filename="../qml/VideoFormatOptions.qml" line="172"/>
        <source>File extension</source>
        <translation>Extension de fichier</translation>
    </message>
</context>
<context>
    <name>VideoInputAddEdit</name>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="57"/>
        <source>Edit Source</source>
        <translation>Éditer la source</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="58"/>
        <source>Add Source</source>
        <translation>Ajouter une source</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="86"/>
        <source>File</source>
        <translation>Fichier</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="89"/>
        <location filename="../qml/VideoInputAddEdit.qml" line="180"/>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="111"/>
        <location filename="../qml/VideoInputAddEdit.qml" line="164"/>
        <source>Description</source>
        <translation>Description</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="117"/>
        <location filename="../qml/VideoInputAddEdit.qml" line="170"/>
        <source>Source title</source>
        <translation>Titre de la source</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="127"/>
        <source>Path</source>
        <translation>Chemin</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="134"/>
        <source>File path</source>
        <translation>Chemin du fichier</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="142"/>
        <source>Search</source>
        <translation>Rechercher</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="143"/>
        <source>Search file to use as source</source>
        <translation>Recherche du fichier à utiliser comme source</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputAddEdit.qml" line="226"/>
        <source>Choose the file to add as source</source>
        <translation>Choisir le fichier à ajouter comme source</translation>
    </message>
</context>
<context>
    <name>VideoInputOptions</name>
    <message>
        <location filename="../qml/VideoInputOptions.qml" line="61"/>
        <source>Edit</source>
        <translation>Modifier</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputOptions.qml" line="74"/>
        <source>Remove</source>
        <translation>Supprimer</translation>
    </message>
</context>
<context>
    <name>VideoInputs</name>
    <message>
        <location filename="../qml/VideoInputs.qml" line="65"/>
        <source>Add source</source>
        <translation>Ajouter une source</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputs.qml" line="57"/>
        <source>Configure source</source>
        <translation>Configurer la source</translation>
    </message>
    <message>
        <location filename="../qml/VideoInputs.qml" line="76"/>
        <source>No webcams found</source>
        <translation>Aucune webcam trouvée</translation>
    </message>
</context>
<context>
    <name>VideoLayer</name>
    <message>
        <location filename="../../src/videolayer.cpp" line="135"/>
        <source>3GP Video</source>
        <translation>Vidéo 3GP</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="136"/>
        <source>AVI Video</source>
        <translation>Vidéo AVI</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="137"/>
        <source>Windows Bitmap</source>
        <translation>Bitmap Windows</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="138"/>
        <source>Microsoft Windows Cursor</source>
        <translation>Curseur Microsoft Windows</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="140"/>
        <source>Flash Video</source>
        <extracomment>Adobe FLV Flash video</extracomment>
        <translation>Vidéo Flash</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="141"/>
        <source>Animated GIF</source>
        <translation>GIF animé</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="142"/>
        <source>Graphic Interchange Format</source>
        <translation>Format d&apos;échange graphique</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="143"/>
        <source>Apple Icon Image</source>
        <translation>Image icône d&apos;Apple</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="144"/>
        <source>Microsoft Windows Icon</source>
        <translation>Icône Microsoft Windows</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="145"/>
        <source>Joint Photographic Experts Group</source>
        <translation>&apos;Joint Photographic Experts Group&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="146"/>
        <source>MKV Video</source>
        <translation>Vidéo MKV</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="147"/>
        <source>Animated PNG</source>
        <translation>PNG animé</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="148"/>
        <source>Multiple-image Network Graphics</source>
        <translation>&apos;Multiple-image Network Graphics&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="149"/>
        <source>QuickTime Video</source>
        <translation>Vidéo QuickTime</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="150"/>
        <source>MP4 Video</source>
        <translation>Vidéo MP4</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="151"/>
        <source>MPEG Video</source>
        <translation>Vidéo MPEG</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="152"/>
        <source>Ogg Video</source>
        <translation>Vidéo Ogg</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="153"/>
        <source>Portable Bitmap</source>
        <translation>Bitmap portable</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="154"/>
        <source>Portable Graymap</source>
        <translation>Graymap portable</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="155"/>
        <source>Portable Network Graphics</source>
        <translation>&apos;Portable Network Graphics&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="156"/>
        <source>Portable Pixmap</source>
        <translation>Pixmap portable</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="158"/>
        <source>RealMedia Video</source>
        <extracomment>Don&apos;t translate &quot;RealMedia&quot;, leave it as is.</extracomment>
        <translation>Vidéo RealMedia</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="159"/>
        <source>Scalable Vector Graphics</source>
        <translation>&apos;Scalable Vector Graphics&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="160"/>
        <source>Truevision TGA</source>
        <translation>&apos;Truevision TGA&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="161"/>
        <source>Tagged Image File Format</source>
        <translation>&apos;Tagged Image File Format&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="162"/>
        <source>DVD Video</source>
        <translation>Vidéo DVD</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="163"/>
        <source>Wireless Bitmap</source>
        <translation>&apos;Wireless Bitmap&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="164"/>
        <source>WebM Video</source>
        <translation>Vidéo WebM</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="165"/>
        <source>WebP</source>
        <translation>&apos;WebP&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="167"/>
        <source>Windows Media Video</source>
        <extracomment>Also known as WMV, is a video file format.</extracomment>
        <translation>Windows Media Vidéo</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="168"/>
        <source>X11 Bitmap</source>
        <translation>&apos;X11 Bitmap&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="169"/>
        <source>X11 Pixmap</source>
        <translation>&apos;X11 Pixmap&apos;</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="209"/>
        <source>All Image and Video Files</source>
        <translation>Tous les fichiers image et vidéo</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="244"/>
        <source>All Files</source>
        <translation>Tous les fichiers</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="386"/>
        <source>No Output</source>
        <extracomment>Disable video output, don&apos;t send the video to the output device.</extracomment>
        <translation>Pas de sortie</translation>
    </message>
    <message>
        <location filename="../../src/videolayer.cpp" line="721"/>
        <source>Virtual Camera</source>
        <translation>Caméra virtuelle</translation>
    </message>
</context>
<context>
    <name>VideoOptions</name>
    <message>
        <location filename="../qml/VideoOptions.qml" line="41"/>
        <source>Sources</source>
        <translation>Sources</translation>
    </message>
    <message>
        <location filename="../qml/VideoOptions.qml" line="44"/>
        <source>Outputs</source>
        <translation>Sorties</translation>
    </message>
</context>
<context>
    <name>VideoOutputAddEdit</name>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="179"/>
        <source>Edit Virtual Camera</source>
        <translation>Éditer la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="180"/>
        <source>Add Virtual Camera</source>
        <translation>Ajouter une caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="207"/>
        <source>Virtual camera name</source>
        <translation>Nom de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="216"/>
        <source>Add format</source>
        <translation>Ajouter un format</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="226"/>
        <source>Clear formats</source>
        <translation>Effacer les formats</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="258"/>
        <source>Can&apos;t edit the virtual camera</source>
        <translation>Impossible de modifier la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="259"/>
        <source>Can&apos;t add the virtual camera</source>
        <translation>Impossible d&apos;ajouter la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="268"/>
        <location filename="../qml/VideoOutputAddEdit.qml" line="295"/>
        <source>Error editing the virtual camera</source>
        <translation>Erreur d&apos;édition de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="269"/>
        <source>Error adding the virtual camera</source>
        <translation>Erreur lors de l&apos;ajout de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="307"/>
        <source>Error creating the virtual camera</source>
        <translation>Erreur de création de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputAddEdit.qml" line="270"/>
        <source>Camera description and formats can&apos;t be empty.</source>
        <translation>Les formats et la description de la caméra ne peuvent être vides.</translation>
    </message>
</context>
<context>
    <name>VideoOutputOptions</name>
    <message>
        <location filename="../qml/VideoOutputOptions.qml" line="61"/>
        <source>Edit</source>
        <translation>Modifier</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputOptions.qml" line="73"/>
        <source>Can&apos;t Edit The Virtual Camera</source>
        <translation>Impossible d&apos;éditer la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputOptions.qml" line="80"/>
        <source>Remove</source>
        <translation>Supprimer</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputOptions.qml" line="95"/>
        <source>Error removing the virtual camera</source>
        <translation>Erreur de suppression de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputOptions.qml" line="99"/>
        <source>Can&apos;t Remove The Virtual Camera</source>
        <translation>Impossible de supprimer la caméra virtuelle</translation>
    </message>
</context>
<context>
    <name>VideoOutputPicture</name>
    <message>
        <location filename="../qml/VideoOutputPicture.qml" line="28"/>
        <source>Virtual camera output picture</source>
        <translation>Image de sortie de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputPicture.qml" line="65"/>
        <source>Virtual camera default output picture</source>
        <translation>Image de sortie par défaut de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputPicture.qml" line="71"/>
        <source>Search</source>
        <translation>Rechercher</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputPicture.qml" line="72"/>
        <source>Search image to use as default output picture</source>
        <translation>Recherche d&apos;une image à utiliser en image de sortie par défaut</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputPicture.qml" line="95"/>
        <source>Can&apos;t set virtual camera picture</source>
        <translation>Impossible de définir l&apos;image de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputPicture.qml" line="99"/>
        <source>Error Removing Virtual Cameras</source>
        <translation>Erreur de suppression des caméras virtuelles</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputPicture.qml" line="111"/>
        <source>Please choose an image file</source>
        <translation>Veuillez choisir un fichier d’image</translation>
    </message>
</context>
<context>
    <name>VideoOutputs</name>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="86"/>
        <source>The virtual camera is outdated (%1), install the latest version (%2)?</source>
        <translation>La caméra virtuelle est périmée (%1), installez la dernière version (%2) ?</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="95"/>
        <location filename="../qml/VideoOutputs.qml" line="227"/>
        <source>Install</source>
        <translation>Installer</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="100"/>
        <location filename="../qml/VideoOutputs.qml" line="231"/>
        <source>Install virtual camera</source>
        <translation>Installer une caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="111"/>
        <source>Configure output</source>
        <translation>Configurer la sortie</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="121"/>
        <source>Add output</source>
        <translation>Ajouter une sortie</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="129"/>
        <source>Error Creating Virtual Camera</source>
        <translation>Erreur de création de la caméra virtuelle</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="136"/>
        <source>Remove all outputs</source>
        <translation>Supprimer toutes les sorties</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="143"/>
        <source>Error removing virtual cameras</source>
        <translation>Erreur de suppression des caméras virtuelles</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="148"/>
        <source>Error Removing Virtual Cameras</source>
        <translation>Erreur de suppression des caméras virtuelles</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="155"/>
        <source>Set output picture</source>
        <translation>Régler l&apos;image de sortie</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="220"/>
        <source>The virtual camera is not installed, do you want to install it?</source>
        <translation>La caméra virtuelle n&apos;est pas installée, voulez-vous l&apos;installer ?</translation>
    </message>
    <message>
        <location filename="../qml/VideoOutputs.qml" line="247"/>
        <source>The virtual camera is not supported in this platform</source>
        <translation>La caméra virtuelle n&apos;est pas prise en charge par cette plate-forme</translation>
    </message>
</context>
<context>
    <name>VideoRecording</name>
    <message>
        <location filename="../qml/VideoRecording.qml" line="116"/>
        <source>Videos directory</source>
        <translation>Répertoire de vidéos</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="127"/>
        <source>Search</source>
        <translation>Rechercher</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="128"/>
        <source>Search directory to save videos</source>
        <translation>Recherche de dossier pour sauvegarder les vidéos</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="137"/>
        <source>Record audio</source>
        <translation>Enregistrer l&apos;audio</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="149"/>
        <source>File format</source>
        <translation>Format de fichier</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="180"/>
        <location filename="../qml/VideoRecording.qml" line="219"/>
        <location filename="../qml/VideoRecording.qml" line="260"/>
        <source>Configure</source>
        <translation>Configurer</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="181"/>
        <source>Configure file format</source>
        <translation>Configurer le format du fichier</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="188"/>
        <source>Video codec</source>
        <translation>Codec vidéo</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="220"/>
        <source>Configure video codec</source>
        <translation>Configurer le codec vidéo</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="227"/>
        <source>Audio codec</source>
        <translation>Codec audio</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="261"/>
        <source>Configure audio codec</source>
        <translation>Configurer le codec audio</translation>
    </message>
    <message>
        <location filename="../qml/VideoRecording.qml" line="295"/>
        <source>Select the folder to save your videos</source>
        <translation>Choisir le dossier où sauvegarder les vidéos</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../../../libAvKys/Plugins/Aging/share/qml/main.qml" line="40"/>
        <source>Number of scratches</source>
        <translation>Nombre de rayures</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Aging/share/qml/main.qml" line="66"/>
        <source>Add dust</source>
        <translation>Ajouter de la poussière</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Blur/share/qml/main.qml" line="40"/>
        <location filename="../../../libAvKys/Plugins/ColorFilter/share/qml/main.qml" line="65"/>
        <location filename="../../../libAvKys/Plugins/ColorReplace/share/qml/main.qml" line="88"/>
        <location filename="../../../libAvKys/Plugins/Denoise/share/qml/main.qml" line="46"/>
        <location filename="../../../libAvKys/Plugins/OilPaint/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/OilPaint/share/qml/main.qml" line="33"/>
        <source>Radius</source>
        <translation>Rayon</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cartoon/share/qml/main.qml" line="72"/>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="312"/>
        <source>Number of colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cartoon/share/qml/main.qml" line="97"/>
        <source>Color difference</source>
        <translation>Différence des couleurs</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cartoon/share/qml/main.qml" line="122"/>
        <source>Show edges</source>
        <translation>Montrer les bordures</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cartoon/share/qml/main.qml" line="187"/>
        <source>Line color</source>
        <translation>Couleur de ligne</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cartoon/share/qml/main.qml" line="209"/>
        <location filename="../../../libAvKys/Plugins/Cartoon/share/qml/main.qml" line="213"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="200"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="204"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="167"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="171"/>
        <source>Scan block</source>
        <translation>Bloc de numérisation</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cartoon/share/qml/main.qml" line="198"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="173"/>
        <source>Choose a color</source>
        <translation>Choisir une couleur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="38"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="37"/>
        <location filename="../../../libAvKys/Plugins/MatrixTransform/share/qml/main.qml" line="36"/>
        <source>Transform matrix</source>
        <extracomment>https://en.wikipedia.org/wiki/Transformation_matrix</extracomment>
        <translation>Matrice d’application linéaire</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="52"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="51"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="62"/>
        <location filename="../../../libAvKys/Plugins/MatrixTransform/share/qml/main.qml" line="50"/>
        <source>Column 0, Row 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="64"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="63"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="74"/>
        <location filename="../../../libAvKys/Plugins/MatrixTransform/share/qml/main.qml" line="62"/>
        <source>Column 1, Row 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="76"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="75"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="86"/>
        <location filename="../../../libAvKys/Plugins/MatrixTransform/share/qml/main.qml" line="74"/>
        <source>Column 2, Row 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="88"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="87"/>
        <source>Column 3, Row 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="102"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="101"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="100"/>
        <location filename="../../../libAvKys/Plugins/MatrixTransform/share/qml/main.qml" line="88"/>
        <source>Column 0, Row 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="114"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="113"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="112"/>
        <location filename="../../../libAvKys/Plugins/MatrixTransform/share/qml/main.qml" line="100"/>
        <source>Column 1, Row 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="126"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="125"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="124"/>
        <location filename="../../../libAvKys/Plugins/MatrixTransform/share/qml/main.qml" line="112"/>
        <source>Column 2, Row 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="138"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="137"/>
        <source>Column 3, Row 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="152"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="151"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="138"/>
        <source>Column 0, Row 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="164"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="163"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="150"/>
        <source>Column 1, Row 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="176"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="175"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="162"/>
        <source>Column 2, Row 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ChangeHSL/share/qml/main.qml" line="188"/>
        <location filename="../../../libAvKys/Plugins/ColorTransform/share/qml/main.qml" line="187"/>
        <source>Column 3, Row 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="45"/>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="83"/>
        <location filename="../../../libAvKys/Plugins/Hypnotic/share/qml/main.qml" line="53"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="44"/>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="42"/>
        <source>Mode</source>
        <translation>Mode</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="56"/>
        <source>Natural</source>
        <translation>Naturel</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="60"/>
        <source>Fixed</source>
        <translation>Fixe</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="70"/>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="74"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="61"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="65"/>
        <source>Symbols</source>
        <translation>Symboles</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="84"/>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="90"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="75"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="81"/>
        <source>Font</source>
        <translation>Police de caractères</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="98"/>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="128"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="542"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="612"/>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="145"/>
        <source>Search</source>
        <translation>Rechercher</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="100"/>
        <source>Search the font to be used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="108"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="99"/>
        <source>Hinting</source>
        <translation>Indice</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="119"/>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="153"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="110"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="144"/>
        <source>Default</source>
        <translation>Par défaut</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="123"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="114"/>
        <source>No hinting</source>
        <translation>Pas d&apos;indice</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="127"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="118"/>
        <source>Vertical hinting</source>
        <translation>Indice vertical</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="131"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="122"/>
        <source>Full hinting</source>
        <translation>Indices complets</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="142"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="133"/>
        <source>Style</source>
        <extracomment>Different font rendering strategies</extracomment>
        <translation>Style</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="157"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="148"/>
        <source>Bitmap</source>
        <translation>Bitmap</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="161"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="152"/>
        <source>Device</source>
        <translation>Appareil</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="165"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="156"/>
        <source>Outline</source>
        <translation>Contour</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="169"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="160"/>
        <source>Force outline</source>
        <translation>Forcer le contour</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="173"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="164"/>
        <source>Match</source>
        <translation>Correspondance</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="177"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="168"/>
        <source>Quality</source>
        <translation>Qualité</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="181"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="172"/>
        <source>Antialias</source>
        <translation>Antialias</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="185"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="176"/>
        <source>No antialias</source>
        <translation>Pas d’antialias</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="189"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="180"/>
        <source>Compatible with OpenGL</source>
        <translation>Compatible avec OpenGL</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="193"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="184"/>
        <source>Force integer metrics</source>
        <translation>Forcer les métriques intégrales</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="197"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="188"/>
        <source>No subpixel antialias</source>
        <translation>Pas d&apos;anticrénelage sous-pixel</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="201"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="192"/>
        <source>No font merging</source>
        <translation>Pas de fusion des polices</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="211"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="219"/>
        <source>Foreground color</source>
        <translation>Couleur de premier plan</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="229"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="236"/>
        <location filename="../../../libAvKys/Plugins/Wave/share/qml/main.qml" line="165"/>
        <source>Background color</source>
        <translation>Couleur d&apos;arrière-plan</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="247"/>
        <source>Reversed</source>
        <translation>Inversé</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="263"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="334"/>
        <source>Please choose a font</source>
        <translation>Veuillez sélectionner une police</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="219"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="227"/>
        <source>Choose the foreground color</source>
        <translation>Sélectionnez la couleur de premier plan</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Charify/share/qml/main.qml" line="237"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="244"/>
        <location filename="../../../libAvKys/Plugins/Wave/share/qml/main.qml" line="175"/>
        <source>Choose the background color</source>
        <translation>Sélectionnez la couleur d&apos;arrière-plan</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cinema/share/qml/main.qml" line="42"/>
        <location filename="../../../libAvKys/Plugins/Dice/share/qml/main.qml" line="39"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cinema/share/qml/main.qml" line="81"/>
        <location filename="../../../libAvKys/Plugins/ColorFilter/share/qml/main.qml" line="42"/>
        <location filename="../../../libAvKys/Plugins/Life/share/qml/main.qml" line="47"/>
        <location filename="../../../libAvKys/Plugins/Vignette/share/qml/main.qml" line="53"/>
        <source>Color</source>
        <translation>Couleur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cinema/share/qml/main.qml" line="91"/>
        <source>Choose the strips color</source>
        <translation>Sélectionnez la couleur des bandes</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorFilter/share/qml/main.qml" line="91"/>
        <location filename="../../../libAvKys/Plugins/ColorReplace/share/qml/main.qml" line="114"/>
        <location filename="../../../libAvKys/Plugins/FalseColor/share/qml/main.qml" line="70"/>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="95"/>
        <source>Soft</source>
        <translation>Doux</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorFilter/share/qml/main.qml" line="52"/>
        <source>Select the color to filter</source>
        <translation>Sélectionnez la couleur à filtrer</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="37"/>
        <source>Color table</source>
        <translation>Table des couleurs</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="48"/>
        <source>Base</source>
        <extracomment>Base color, show the image without modifications</extracomment>
        <translation>Base</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="52"/>
        <source>Metal</source>
        <translation>Métal</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="57"/>
        <source>Heat</source>
        <extracomment>https://en.wikipedia.org/wiki/Heat_map</extracomment>
        <translation>Chaleur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="61"/>
        <source>Old Photo</source>
        <translation>Ancienne photo</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="65"/>
        <source>Red &amp; Green</source>
        <translation>Rouge &amp; vert</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="70"/>
        <source>Sepia</source>
        <extracomment>https://en.wikipedia.org/wiki/Sepia_(color)</extracomment>
        <translation>Sépia</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="74"/>
        <source>X-Pro</source>
        <translation>X-Pro</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="78"/>
        <source>X-Ray</source>
        <translation>Rayon X</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="82"/>
        <source>Yellow &amp; Blue</source>
        <translation>Jaune &amp; bleu</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="86"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="497"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="567"/>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="101"/>
        <source>Custom</source>
        <translation>Personnalisé</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="107"/>
        <source>Source palette</source>
        <translation>Palette source</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="110"/>
        <source>Image file to use as palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="130"/>
        <source>Search the image file to use as palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorTap/share/qml/main.qml" line="138"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="1008"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="1024"/>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="221"/>
        <source>Please choose an image file</source>
        <translation>Veuillez choisir un fichier d’image</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="48"/>
        <source>Convolve matrix</source>
        <extracomment>https://en.wikipedia.org/wiki/Kernel_(image_processing)</extracomment>
        <translation>Convertir la matrice</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="173"/>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="177"/>
        <location filename="../../../libAvKys/Plugins/Denoise/share/qml/main.qml" line="71"/>
        <location filename="../../../libAvKys/Plugins/Denoise/share/qml/main.qml" line="75"/>
        <location filename="../../../libAvKys/Plugins/Emboss/share/qml/main.qml" line="30"/>
        <location filename="../../../libAvKys/Plugins/Emboss/share/qml/main.qml" line="34"/>
        <location filename="../../../libAvKys/Plugins/PrimariesColors/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/PrimariesColors/share/qml/main.qml" line="33"/>
        <source>Factor</source>
        <translation>Facteur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Convolve/share/qml/main.qml" line="190"/>
        <location filename="../../../libAvKys/Plugins/Emboss/share/qml/main.qml" line="48"/>
        <location filename="../../../libAvKys/Plugins/Emboss/share/qml/main.qml" line="52"/>
        <source>Bias</source>
        <translation>&apos;Bias&apos;</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="43"/>
        <source>Grab mode</source>
        <translation>Mode de capture</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="54"/>
        <source>Random square</source>
        <translation>Carré aléatoire</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="58"/>
        <source>Vertical increase</source>
        <translation>Hausse verticale</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="62"/>
        <source>Horizontal increase</source>
        <translation>Hausse horizontale</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="66"/>
        <source>Rings increase</source>
        <translation>Hausse des bagues</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="76"/>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="80"/>
        <location filename="../../../libAvKys/Plugins/Pixelate/share/qml/main.qml" line="42"/>
        <location filename="../../../libAvKys/Plugins/Pixelate/share/qml/main.qml" line="46"/>
        <source>Block size</source>
        <translation>Taille du bloc</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="93"/>
        <location filename="../../../libAvKys/Plugins/DelayGrab/share/qml/main.qml" line="97"/>
        <location filename="../../../libAvKys/Plugins/FrameOverlap/share/qml/main.qml" line="30"/>
        <location filename="../../../libAvKys/Plugins/FrameOverlap/share/qml/main.qml" line="34"/>
        <location filename="../../../libAvKys/Plugins/Nervous/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/Nervous/share/qml/main.qml" line="33"/>
        <location filename="../../../libAvKys/Plugins/Quark/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/Quark/share/qml/main.qml" line="33"/>
        <location filename="../../../libAvKys/Plugins/Warhol/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/Warhol/share/qml/main.qml" line="33"/>
        <source>Number of frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Denoise/share/qml/main.qml" line="93"/>
        <source>Mu</source>
        <extracomment>Mu factor (µ letter from greek), represents the average of a group of values. https://en.wikipedia.org/wiki/Arithmetic_mean</extracomment>
        <translation>Mu</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Denoise/share/qml/main.qml" line="116"/>
        <source>Sigma</source>
        <extracomment>Sigma factor (σ letter from greek), represents the standard deviation of a group of values. https://en.wikipedia.org/wiki/Standard_deviation</extracomment>
        <translation>Sigma</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/DesktopCapture/share/qml/main.qml" line="48"/>
        <location filename="../../../libAvKys/Plugins/ImageSrc/share/qml/main.qml" line="66"/>
        <source>Frame rate</source>
        <translation>Fréquence d&apos;images</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Distort/share/qml/main.qml" line="30"/>
        <location filename="../../../libAvKys/Plugins/Distort/share/qml/main.qml" line="34"/>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="66"/>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="70"/>
        <location filename="../../../libAvKys/Plugins/Wave/share/qml/main.qml" line="53"/>
        <source>Amplitude</source>
        <translation>Amplitude</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Distort/share/qml/main.qml" line="48"/>
        <location filename="../../../libAvKys/Plugins/Distort/share/qml/main.qml" line="52"/>
        <location filename="../../../libAvKys/Plugins/Wave/share/qml/main.qml" line="91"/>
        <source>Frequency</source>
        <translation>Fréquence</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Distort/share/qml/main.qml" line="66"/>
        <location filename="../../../libAvKys/Plugins/Distort/share/qml/main.qml" line="70"/>
        <source>Grid size</source>
        <translation>Taille de grille</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Dizzy/share/qml/main.qml" line="51"/>
        <source>Speed</source>
        <translation>Vitesse</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Dizzy/share/qml/main.qml" line="91"/>
        <source>Zoom rate</source>
        <translation>Niveau de zoom</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Dizzy/share/qml/main.qml" line="129"/>
        <source>Strength</source>
        <translation>Force</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Edge/share/qml/main.qml" line="47"/>
        <source>Canny mode</source>
        <extracomment>https://en.wikipedia.org/wiki/Canny_edge_detector</extracomment>
        <translation>Mode Canny</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Edge/share/qml/main.qml" line="65"/>
        <source>Canny threshold</source>
        <translation>Seuil Canny</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Edge/share/qml/main.qml" line="110"/>
        <source>Equalize</source>
        <extracomment>https://en.wikipedia.org/wiki/Histogram_equalization</extracomment>
        <translation>Égaliseur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Edge/share/qml/main.qml" line="127"/>
        <source>Invert</source>
        <translation>Inverser</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="94"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="60"/>
        <source>Haar file</source>
        <extracomment>https://en.wikipedia.org/wiki/Haar-like_feature</extracomment>
        <translation>Fichier Haar</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="105"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="71"/>
        <source>Eye</source>
        <translation>Œil</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="109"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="75"/>
        <source>Eye glasses</source>
        <translation>Lunettes</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="113"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="79"/>
        <source>Frontal face alternative 1</source>
        <translation>Face avant alternative 1</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="117"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="83"/>
        <source>Frontal face alternative 2</source>
        <translation>Face avant alternative 2</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="121"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="87"/>
        <source>Frontal face alternative 3</source>
        <translation>Face avant alternative 3</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="125"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="91"/>
        <source>Frontal face default</source>
        <translation>Faces frontales par défaut</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="129"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="95"/>
        <source>Full body</source>
        <translation>Corps entier</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="133"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="99"/>
        <source>Left Eye 1</source>
        <translation>Œil gauche 1</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="137"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="103"/>
        <source>Lower body</source>
        <translation>Bas du corps</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="141"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="107"/>
        <source>Eye pair big</source>
        <translation>Grande paire d&apos;yeux</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="145"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="111"/>
        <source>Eye pair small</source>
        <translation>Petite paire d&apos;yeux</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="149"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="115"/>
        <source>Left ear</source>
        <translation>Oreille gauche</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="153"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="119"/>
        <source>Left eye 2</source>
        <translation>Œil gauche 2</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="157"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="123"/>
        <source>Mouth</source>
        <translation>Bouche</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="161"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="127"/>
        <source>Nose</source>
        <translation>Nez</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="165"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="131"/>
        <source>Right ear</source>
        <translation>Oreille droite</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="169"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="135"/>
        <source>Right Eye 1</source>
        <translation>Œil droit 1</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="173"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="139"/>
        <source>Upper body 1</source>
        <translation>Haut de corps 1</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="177"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="143"/>
        <source>Profile face</source>
        <translation>Visage de profil</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="181"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="147"/>
        <source>Right eye 2</source>
        <translation>Œil droit 2</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="185"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="151"/>
        <source>Smile</source>
        <translation>Sourire</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="189"/>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="155"/>
        <source>Upper body</source>
        <translation>Haut de corps</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="218"/>
        <source>Marker type</source>
        <translation>Type de marqueur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="229"/>
        <source>Rectangle</source>
        <translation>Rectangle</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="233"/>
        <source>Ellipse</source>
        <translation>Ellipse</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="237"/>
        <source>Image</source>
        <translation>Image</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="241"/>
        <source>Pixelate</source>
        <translation>Pixeliser</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="245"/>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="157"/>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="161"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="77"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="81"/>
        <source>Blur</source>
        <translation>Flouter</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="249"/>
        <source>Blur Outer</source>
        <translation>Flou externe</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="253"/>
        <source>Background Image</source>
        <translation>Image de fond</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="264"/>
        <source>Marker style</source>
        <translation>Style de marqueur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="275"/>
        <source>Solid</source>
        <translation>Solide</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="279"/>
        <source>Dash</source>
        <translation>Tirets</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="283"/>
        <source>Dot</source>
        <translation>Points</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="287"/>
        <source>Dash dot</source>
        <translation>Tirets + Points</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="291"/>
        <source>Dash dot dot</source>
        <translation>Tirets + Points + Points</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="302"/>
        <source>Marker color</source>
        <translation>Couleur de marqueur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="321"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="325"/>
        <source>Marker width</source>
        <translation>Largeur de marqueur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="339"/>
        <source>Masks</source>
        <translation>Masques</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="349"/>
        <source>Angel</source>
        <translation>Ange</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="353"/>
        <source>Bear</source>
        <translation>Ours</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="357"/>
        <source>Beaver</source>
        <translation>Castor</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="361"/>
        <source>Cat</source>
        <translation>Chat</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="365"/>
        <source>Chicken</source>
        <translation>Poule</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="369"/>
        <source>Cow</source>
        <translation>Vache</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="373"/>
        <source>Devil</source>
        <translation>Diable</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="377"/>
        <source>Dog</source>
        <translation>Chien</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="381"/>
        <source>Dalmatian dog</source>
        <translation>Dalmatien</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="385"/>
        <source>Happy dog</source>
        <translation>Chien heureux</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="389"/>
        <source>Dragon</source>
        <translation>Dragon</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="393"/>
        <source>Elephant 1</source>
        <translation>Éléphant 1</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="397"/>
        <source>Elephant 2</source>
        <translation>Éléphant 2</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="401"/>
        <source>Elk</source>
        <translation>Wapiti</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="405"/>
        <source>Frog</source>
        <translation>Grenouille</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="409"/>
        <source>Ghost</source>
        <translation>Fantôme</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="413"/>
        <source>Giraffe</source>
        <translation>Girafe</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="417"/>
        <source>Gnu</source>
        <translation>Gnou</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="421"/>
        <source>Goat</source>
        <translation>Chèvre</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="425"/>
        <source>Hippo</source>
        <translation>Hippopotame</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="429"/>
        <source>Horse</source>
        <translation>Cheval</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="433"/>
        <source>Gray horse</source>
        <translation>Cheval gris</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="437"/>
        <source>Koala</source>
        <translation>Koala</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="441"/>
        <source>Monkey</source>
        <translation>Singe</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="445"/>
        <source>Gray mouse</source>
        <translation>Souris grise</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="449"/>
        <source>White mouse</source>
        <translation>Souris blanche</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="453"/>
        <source>Panda</source>
        <translation>Panda</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="457"/>
        <source>Penguin</source>
        <translation>Pingouin</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="461"/>
        <source>Pumpkin 1</source>
        <translation>Citrouille 1</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="465"/>
        <source>Pumpkin 2</source>
        <translation>Citrouille 2</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="469"/>
        <source>Raccoon</source>
        <translation>Raton laveur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="473"/>
        <source>Rhino</source>
        <translation>Rhinocéros</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="477"/>
        <source>Sheep</source>
        <translation>Mouton</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="481"/>
        <source>Skull 1</source>
        <translation>Squelette 1</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="485"/>
        <source>Skull 2</source>
        <translation>Squelette 2</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="489"/>
        <source>Triceratops</source>
        <translation>Tricératops</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="493"/>
        <source>Zebra</source>
        <translation>Zèbre</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="507"/>
        <source>Marker picture</source>
        <translation>Photo de marqueur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="521"/>
        <source>Replace face with this picture</source>
        <translation>Remplacer le visage par cette image</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="544"/>
        <source>Search the image to put into the detected rectangle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="553"/>
        <source>Background</source>
        <translation>Arrière-plan</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="665"/>
        <source>Advanced face area settings for 
background blur or image below.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="720"/>
        <source>Horizontal Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="749"/>
        <source>Vertical Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="954"/>
        <source>Horizontal Radius %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="981"/>
        <source>Vertical Radius %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="563"/>
        <source>Black Square</source>
        <translation>Carré noir</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="577"/>
        <source>Background picture</source>
        <translation>Image d&apos;arrière-plan</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="591"/>
        <source>Replace background with this picture</source>
        <translation>Remplacer l&apos;arrière-plan par cette image</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="614"/>
        <source>Search the image to use as background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="623"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="627"/>
        <source>Pixel grid size</source>
        <translation>Taille de la grille de pixels</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="641"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="645"/>
        <source>Blur radius</source>
        <translation>Niveau de flou</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="658"/>
        <source>Face Area Settings</source>
        <translation>Réglages de la zone du visage</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="779"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="895"/>
        <source>Width Adjust %</source>
        <translation>Régler la largeur (%)</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="808"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="924"/>
        <source>Height Adjust %</source>
        <translation>Régler la hauteur %</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="838"/>
        <source>Round Area</source>
        <translation>Zone circulaire</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="310"/>
        <source>Select marker color</source>
        <translation>Sélectionner la couleur du marqueur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="99"/>
        <source>Hard</source>
        <translation>Fort</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="110"/>
        <source>Cooling</source>
        <translation>Refroidissement</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="138"/>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="142"/>
        <source>Dissolve</source>
        <translation>Dissoudre</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="176"/>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="180"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="93"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="97"/>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Cartoon/share/qml/main.qml" line="142"/>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="195"/>
        <location filename="../../../libAvKys/Plugins/Hypnotic/share/qml/main.qml" line="104"/>
        <location filename="../../../libAvKys/Plugins/Life/share/qml/main.qml" line="68"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="109"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="113"/>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="98"/>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="102"/>
        <source>Threshold</source>
        <translation>Bouclier</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="226"/>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="130"/>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="119"/>
        <source>Luma threshold</source>
        <extracomment>Minimum luminance/light/white level/intensity in a gray or black and white picture. https://en.wikipedia.org/wiki/Luma_(video)</extracomment>
        <translation>Seuil Luma</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="255"/>
        <source>Alpha diff</source>
        <extracomment>Alpha channel, also known as the transparency component of a pixel in an image.</extracomment>
        <translation>Diff Alpha</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Fire/share/qml/main.qml" line="286"/>
        <source>Alpha variation</source>
        <extracomment>Alpha channel, also known as the transparency component of a pixel in an image.</extracomment>
        <translation>Variation Alpha</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FrameOverlap/share/qml/main.qml" line="48"/>
        <location filename="../../../libAvKys/Plugins/FrameOverlap/share/qml/main.qml" line="52"/>
        <source>Stride</source>
        <translation>Écart</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="51"/>
        <source>Pattern</source>
        <translation>Modèle</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="61"/>
        <source>90° Halftone 6x6</source>
        <translation>90° Halftone 6 x 6</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="65"/>
        <source>Cluster 3</source>
        <translation>Groupe 3</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="69"/>
        <source>Cluster 4</source>
        <translation>Groupe 4</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="73"/>
        <source>Cluster 8</source>
        <translation>Groupe 8</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="77"/>
        <source>Lines 4x4</source>
        <translation>Lignes 4x4</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="81"/>
        <source>Magic 2x2</source>
        <translation>Magique 2x2</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="85"/>
        <source>Magic 4x4</source>
        <translation>Magique 4x4</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="89"/>
        <source>Ordered 4x4</source>
        <translation>Ordonné 4 x 4</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="93"/>
        <source>Ordered 6x6</source>
        <translation>Ordonné 6 x 6</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="97"/>
        <source>Ordered 8x8</source>
        <translation>Ordonné 8 x 8</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="123"/>
        <source>Bitmap pattern</source>
        <translation>Motif bitmap</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="126"/>
        <source>Image to use as pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="147"/>
        <source>Search the image to use as pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="156"/>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="160"/>
        <source>Pattern size</source>
        <translation>Taille du motif</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="172"/>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="176"/>
        <source>Lightness</source>
        <translation>Légèreté</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="188"/>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="192"/>
        <source>Slope</source>
        <translation>Pente</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="204"/>
        <location filename="../../../libAvKys/Plugins/Halftone/share/qml/main.qml" line="208"/>
        <source>Intercept</source>
        <translation>Intercepter</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Hypnotic/share/qml/main.qml" line="65"/>
        <source>Spiral 1</source>
        <translation>Spirale 1</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Hypnotic/share/qml/main.qml" line="69"/>
        <source>Spiral 2</source>
        <translation>Spirale 2</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Hypnotic/share/qml/main.qml" line="73"/>
        <source>Parabola</source>
        <translation>Parabole</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Hypnotic/share/qml/main.qml" line="77"/>
        <source>Horizontal stripe</source>
        <translation>Bande horizontale</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Hypnotic/share/qml/main.qml" line="86"/>
        <location filename="../../../libAvKys/Plugins/Hypnotic/share/qml/main.qml" line="90"/>
        <source>Speed increment</source>
        <translation>Augmenter la vitesse</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Implode/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/Implode/share/qml/main.qml" line="33"/>
        <source>Amount</source>
        <translation>Montant</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Life/share/qml/main.qml" line="98"/>
        <source>Luma Threshold</source>
        <extracomment>Minimum luminance/light/white level/intensity in a gray or black and white picture. https://en.wikipedia.org/wiki/Luma_(video)</extracomment>
        <translation>Seuil Luma</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Life/share/qml/main.qml" line="58"/>
        <source>Choose the automata color</source>
        <extracomment>https://en.wikipedia.org/wiki/Life-like_cellular_automaton</extracomment>
        <translation>Choisir la couleur de l&apos;automate</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="45"/>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="49"/>
        <source>Number of drops</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="89"/>
        <source>Select</source>
        <translation>Sélectionner</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="91"/>
        <source>Select font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="202"/>
        <source>Cursor color</source>
        <translation>Couleur du curseur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="210"/>
        <source>Choose the cursor color</source>
        <translation>Sélectionner la couleur du curseur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="253"/>
        <source>Minimum drop length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="257"/>
        <source>Min. drop length</source>
        <translation>Longueur de chute mini</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="269"/>
        <source>Maximum drop length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="273"/>
        <source>Max. drop length</source>
        <translation>Longueur de chute maxi</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="285"/>
        <source>Minimum speed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="289"/>
        <source>Min. speed</source>
        <translation>Vitesse mini</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="301"/>
        <source>Maximum speed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="305"/>
        <source>Max. speed</source>
        <translation>Vitesse maxi</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Matrix/share/qml/main.qml" line="318"/>
        <source>Show cursor</source>
        <translation>Afficher le curseur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/MultiSrc/share/qml/main.qml" line="123"/>
        <source>Video track</source>
        <translation>Piste vidéo</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/MultiSrc/share/qml/main.qml" line="139"/>
        <source>Audio track</source>
        <translation>Piste audio</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/MultiSrc/share/qml/main.qml" line="155"/>
        <source>Subtitles track</source>
        <translation>Piste des sous-titres</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Nervous/share/qml/main.qml" line="46"/>
        <source>Simple</source>
        <translation>Simple</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Photocopy/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/Photocopy/share/qml/main.qml" line="33"/>
        <source>Brightness</source>
        <translation>Luminosité</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Contrast/share/qml/main.qml" line="40"/>
        <location filename="../../../libAvKys/Plugins/Photocopy/share/qml/main.qml" line="45"/>
        <location filename="../../../libAvKys/Plugins/Photocopy/share/qml/main.qml" line="49"/>
        <source>Contrast</source>
        <translation>Contraste</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="55"/>
        <source>Soft normal</source>
        <translation>Doux normal</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="59"/>
        <source>Hard normal</source>
        <translation>Dur normal</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="63"/>
        <source>Soft color</source>
        <translation>Couleur douce</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="67"/>
        <source>Hard color</source>
        <translation>Couleur dure</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="149"/>
        <source>Alpha differential</source>
        <extracomment>Alpha channel, also known as the transparency component of a pixel in an image.</extracomment>
        <translation>Différence Alpha</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Radioactive/share/qml/main.qml" line="165"/>
        <source>Radiation color</source>
        <translation>Couleur de radiation</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="53"/>
        <source>Motion detect</source>
        <translation>Détection du mouvement</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="57"/>
        <source>Rain</source>
        <translation>Pluie</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="82"/>
        <location filename="../../../libAvKys/Plugins/Ripple/share/qml/main.qml" line="86"/>
        <source>Decay</source>
        <translation>Dégradation</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ScanLines/share/qml/main.qml" line="35"/>
        <location filename="../../../libAvKys/Plugins/ScanLines/share/qml/main.qml" line="39"/>
        <source>Show lines</source>
        <translation>Montrer les lignes</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ScanLines/share/qml/main.qml" line="51"/>
        <location filename="../../../libAvKys/Plugins/ScanLines/share/qml/main.qml" line="55"/>
        <source>Hide lines</source>
        <translation>Cacher les lignes</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ScanLines/share/qml/main.qml" line="67"/>
        <source>Hide color</source>
        <translation>Cacher la couleur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ScanLines/share/qml/main.qml" line="75"/>
        <source>Choose the hide color</source>
        <translation>Choisir la couleur cachée</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scroll/share/qml/main.qml" line="45"/>
        <source>Vertical Sync</source>
        <translation>Synchronisation verticale</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scroll/share/qml/main.qml" line="85"/>
        <source>Noise</source>
        <translation>Bruit</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Shagadelic/share/qml/main.qml" line="34"/>
        <location filename="../../../libAvKys/Plugins/Shagadelic/share/qml/main.qml" line="38"/>
        <source>Mask</source>
        <translation>Masque</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Swirl/share/qml/main.qml" line="39"/>
        <source>Degrees</source>
        <translation>Degrés</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Temperature/share/qml/main.qml" line="39"/>
        <source>Temperature</source>
        <translation>Température</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/VideoCapture/share/qml/main.qml" line="318"/>
        <source>Video format</source>
        <translation>Format vidéo</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/VideoCapture/share/qml/main.qml" line="338"/>
        <source>Resolution</source>
        <translation>Résolution</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/VideoCapture/share/qml/main.qml" line="358"/>
        <source>FPS</source>
        <translation>IPS</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/VideoCapture/share/qml/main.qml" line="382"/>
        <source>Reset</source>
        <translation>Réinitialiser</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/VideoCapture/share/qml/main.qml" line="385"/>
        <source>Reset to default values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Vignette/share/qml/main.qml" line="74"/>
        <source>Aspect</source>
        <extracomment>Aspect ratio</extracomment>
        <translation>Rapport hauteur/largeur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="675"/>
        <location filename="../../../libAvKys/Plugins/FaceDetect/share/qml/main.qml" line="851"/>
        <location filename="../../../libAvKys/Plugins/Vignette/share/qml/main.qml" line="112"/>
        <source>Scale</source>
        <translation>Échelle</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Vignette/share/qml/main.qml" line="150"/>
        <source>Softness</source>
        <translation>Douceur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Vignette/share/qml/main.qml" line="63"/>
        <source>Choose the vignette color</source>
        <translation>Sélectionner la couleur de la miniature</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Warp/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/Warp/share/qml/main.qml" line="33"/>
        <source>Ripples</source>
        <translation>Ondulations</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Wave/share/qml/main.qml" line="128"/>
        <source>Phase</source>
        <translation>Phase</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="161"/>
        <source>Use flash</source>
        <translation>Utiliser le flash</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="185"/>
        <source>Now</source>
        <translation>Maintenant</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="192"/>
        <source>%1 seconds</source>
        <translation>%1 secondes</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="293"/>
        <location filename="../qml/main.qml" line="296"/>
        <source>Take a photo</source>
        <translation>Prendre une photo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="59"/>
        <source>%1/Picture %2.%3</source>
        <translation>%1/Photo %2.%3</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="45"/>
        <source>Daily Build</source>
        <translation>Construction du jour</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="154"/>
        <source>Video effects</source>
        <translation>Effets vidéo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="155"/>
        <source>Open video effects pannel</source>
        <translation>Ouvrir le panneau d&apos;effets vidéo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="166"/>
        <source>Use flash when taking a photo</source>
        <translation>Utiliser le flash pour prendre une photo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="179"/>
        <source>Photo timer</source>
        <translation>Minuterie photo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="180"/>
        <source>The time to wait before the photo is taken</source>
        <translation>Temps d&apos;attente avant la prise de la photo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="226"/>
        <source>Sources and outputs settings</source>
        <translation>Paramètres des sources et des sorties</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="227"/>
        <source>Open sources and outputs settings menu</source>
        <translation>Ouvrir le menu paramètres des sources et des sorties</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="267"/>
        <source>Open last photo</source>
        <translation>Ouvrir la dernière photo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="278"/>
        <source>Open last photo taken</source>
        <translation>Ouvrir la dernière photo prise</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="297"/>
        <source>Image capture mode</source>
        <translation>Mode de capture d&apos;image</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="300"/>
        <source>Make a capture and save it to an image file</source>
        <translation>Faire une capture et l&apos;enregistrer en fichier image</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="301"/>
        <source>Put %1 in image capture mode</source>
        <translation>Mettre %1 en mode capture d&apos;image</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="351"/>
        <location filename="../qml/main.qml" line="357"/>
        <source>Record video</source>
        <translation>Enregistrer une vidéo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="352"/>
        <location filename="../qml/main.qml" line="358"/>
        <source>Stop video recording</source>
        <translation>Arrêter l&apos;enregistrement vidéo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="355"/>
        <source>Video capture mode</source>
        <translation>Mode de capture vidéo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="361"/>
        <source>Put %1 in video recording mode</source>
        <translation>Mettre %1 en mode enregistrement vidéo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="363"/>
        <source>Start recording to a video file</source>
        <translation>Lancer l&apos;enregistrement dans un fichier vidéo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="364"/>
        <source>Stop current video recording</source>
        <translation>Arrêter l&apos;enregistrement vidéo en cours</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="381"/>
        <source>Open last video</source>
        <translation>Ouvrir la dernière vidéo</translation>
    </message>
    <message>
        <location filename="../qml/main.qml" line="393"/>
        <source>Open last recorded video</source>
        <translation>Ouvrir la dernière vidéo créée</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="425"/>
        <source>Aspect ratio</source>
        <translation>Rapport d&apos;aspect</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="185"/>
        <source>Face bracketing
duration (seconds)</source>
        <translation>Bracketing visage
durée (secondes)</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="202"/>
        <source>Face bracket count</source>
        <translation>Nombre de bracket</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="219"/>
        <source>Zoom out rate</source>
        <translation>Taux zoom arrière</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="236"/>
        <source>Zoom in rate</source>
        <translation>Taux zoom avant</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="252"/>
        <source>Face padding (% of face size)</source>
        <translation>Gonflement du visage (% taille du visage)</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="270"/>
        <source>Padding top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="288"/>
        <source>Padding left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="306"/>
        <source>Padding right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="323"/>
        <source>Padding bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="337"/>
        <source>Face margin (% of face size)</source>
        <translation>Bordure de la face (% taille de la face)</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="355"/>
        <source>Margin top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="374"/>
        <source>Margin left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="393"/>
        <source>Margin right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="410"/>
        <source>Margin bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="433"/>
        <source>e.g. 16:9, 4:3</source>
        <translation>ex. 16:9, 4:3</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="460"/>
        <source>Lock viewport</source>
        <translation>Verrouiller la fenêtre aperçu</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FaceTrack/share/qml/main.qml" line="473"/>
        <source>Debug mode</source>
        <translation>Mode débogage</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Flip/share/qml/main.qml" line="29"/>
        <source>Flip horizontally</source>
        <translation>Retourner à l&apos;horizontale</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Flip/share/qml/main.qml" line="40"/>
        <source>Flip vertically</source>
        <translation>Retourner à la verticale</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/AspectRatio/share/qml/main.qml" line="29"/>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="43"/>
        <source>Width</source>
        <translation>Largeur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/AspectRatio/share/qml/main.qml" line="33"/>
        <source>Aspect ratio width</source>
        <translation>Largeur du rapport d&apos;aspect</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/AspectRatio/share/qml/main.qml" line="45"/>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="58"/>
        <source>Height</source>
        <translation>Hauteur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/AspectRatio/share/qml/main.qml" line="49"/>
        <source>Aspect ratio height</source>
        <translation>Hauteur du rapport d&apos;aspect</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="73"/>
        <source>Scaling mode</source>
        <translation>Mode mise à l&apos;échelle</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="82"/>
        <source>Fast</source>
        <translation>Rapide</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="86"/>
        <source>Linear</source>
        <translation>Linéaire</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="95"/>
        <source>Aspect ratio mode</source>
        <translation>Mode rapport d&apos;aspect</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="104"/>
        <source>Ignore</source>
        <translation>Ignorer</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="108"/>
        <source>Keep</source>
        <translation>Passer</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Scale/share/qml/main.qml" line="112"/>
        <source>Expanding</source>
        <translation>Élargissement</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Otsu/share/qml/main.qml" line="40"/>
        <source>Levels</source>
        <translation>Niveaux</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FalseColor/share/qml/main.qml" line="85"/>
        <source>Add color</source>
        <translation>Ajouter une couleur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FalseColor/share/qml/main.qml" line="93"/>
        <source>Clear all colors</source>
        <translation>Effacer toutes les couleurs</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FalseColor/share/qml/main.qml" line="109"/>
        <source>Select the color to add</source>
        <extracomment>Select the color to add to the color table</extracomment>
        <translation>Choisir la couleur à ajouter</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/FalseColor/share/qml/main.qml" line="106"/>
        <source></source>
        <translation></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Gamma/share/qml/main.qml" line="40"/>
        <source>Gamma</source>
        <translation>&apos;Gamma&apos;</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/AdjustHSL/share/qml/main.qml" line="52"/>
        <source>Hue</source>
        <translation>Teinte</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/AdjustHSL/share/qml/main.qml" line="78"/>
        <source>Saturation</source>
        <translation>&apos;Saturation&apos;</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/AdjustHSL/share/qml/main.qml" line="104"/>
        <source>Luminance</source>
        <translation>Luminosité</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ImageSrc/share/qml/main.qml" line="48"/>
        <source>Force frame rate</source>
        <translation>Forcer la fréquence d&apos;images</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorReplace/share/qml/main.qml" line="42"/>
        <source>Old color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorReplace/share/qml/main.qml" line="52"/>
        <source>Select the color to replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorReplace/share/qml/main.qml" line="65"/>
        <source>New color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/ColorReplace/share/qml/main.qml" line="75"/>
        <source>Select the new color</source>
        <translation type="unfinished">Sélectionner la nouvelle couleur</translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Rotate/share/qml/main.qml" line="40"/>
        <source>Angle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Rotate/share/qml/main.qml" line="65"/>
        <source>Keep resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../libAvKys/Plugins/Opacity/share/qml/main.qml" line="40"/>
        <source>Opacity</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
