import { ArrowUpRight } from 'lucide-react'
import { business, mailtoUrl } from '../data/business.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import Address from '../components/Address.jsx'
import CornerPattern from '../components/CornerPattern.jsx'
import ExternalLink from '../components/ExternalLink.jsx'

export default function Visit() {
  usePageTitle('Visit & Contact — Umarika Café')

  return (
    <section className="section visit-page">
      <div className="container visit-layout">
        <div className="visit-copy">
          <p className="eyebrow">{business.placeLabel}</p>
          <h1 id="page-title" tabIndex={-1} className="section-title page-title">
            Come by Umarika.
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="lede">Write, or visit the Facebook page, to reach Umarika Café.</p>

          <div className="contact-block">
            <h2>Address</h2>
            <Address className="address-lines" />
          </div>

          <div className="contact-block">
            <h2>Email</h2>
            <a className="contact-value" href={mailtoUrl}>
              {business.email}
            </a>
          </div>

          <div className="contact-block">
            <h2>Facebook</h2>
            <ExternalLink className="contact-value" href={business.facebookUrl}>
              Umarika Cafe
            </ExternalLink>
          </div>

          <div className="hero-actions">
            <ExternalLink href={business.facebookUrl} className="btn btn-primary">
              View Facebook Page
              <ArrowUpRight aria-hidden="true" size={18} />
            </ExternalLink>
            <a className="btn btn-secondary" href={mailtoUrl}>
              Email Umarika
            </a>
          </div>
        </div>

        <aside className="location-panel" aria-labelledby="map-search-title">
          <div className="pattern-slot bottom-left">
            <CornerPattern />
          </div>
          <p className="eyebrow">Map search</p>
          <h2 id="map-search-title">Purok 16, Damilag</h2>
          <span className="gold-rule" aria-hidden="true" />
          <p>
            This opens a Google Maps search for the business name and address. It is a search, not a confirmed map pin.
          </p>
          <ExternalLink href={business.mapSearchUrl} className="btn btn-primary">
            Search Location on Google Maps
            <ArrowUpRight aria-hidden="true" size={18} />
          </ExternalLink>
        </aside>
      </div>
    </section>
  )
}
