export default function Video() {
    return (
        <video height="200" width="200" controls>
        <source src="/videoejemplo.MP4" type="video/mp4">
        </source>Tu navegador no soporta este tipo de video.
        </video>
    )
}