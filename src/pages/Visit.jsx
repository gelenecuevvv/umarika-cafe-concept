import { usePageTitle } from '../hooks/usePageTitle.js'
import LocationSection from '../components/LocationSection.jsx'

export default function Visit() {
  usePageTitle('Visit & Contact — Umarika Café')

  return (
    <section className="section location-section visit-page">
      <LocationSection
        headingAs="h1"
        headingId="page-title"
        heading="Come by Umarika."
        intro="Write, visit the Facebook page, or open the map to reach Umarika Café."
      />
    </section>
  )
}
