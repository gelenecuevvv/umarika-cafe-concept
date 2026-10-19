import { mapEmbedSrc } from '../data/business.js'

export default function MapPanel() {
  const src = mapEmbedSrc()

  if (!src) return null

  return (
    <iframe
      className="map-frame"
      src={src}
      title="Umarika Café location on Google Maps"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
