import { business, mailtoUrl, mapEmbedSrc } from '../data/business.js'
import Address from './Address.jsx'
import ExternalLink from './ExternalLink.jsx'
import MapPanel from './MapPanel.jsx'

export default function LocationSection({ headingAs = 'h2', headingId, heading, intro }) {
  const Title = headingAs
  const mapSrc = mapEmbedSrc()

  return (
    <div className="container location-layout">
      <div data-reveal>
        <p className="eyebrow">{business.eyebrow}</p>
        <Title id={headingId} className="section-title" tabIndex={headingAs === 'h1' ? -1 : undefined}>
          {heading}
        </Title>
        <span className="gold-rule" aria-hidden="true" />
        {intro ? <p className="lede">{intro}</p> : null}

        <div className="contact-block">
          <h3>Address</h3>
          <p className="contact-name">{business.name}</p>
          <Address className="address-lines" />
        </div>

        <div className="contact-block">
          <h3>{business.hoursLabel}</h3>
          <p className="contact-value">{business.hours}</p>
        </div>

        <div className="contact-block">
          <h3>Email</h3>
          <a className="contact-value" href={mailtoUrl}>
            {business.email}
          </a>
        </div>

        <div className="contact-block">
          <h3>Facebook</h3>
          <ExternalLink className="contact-value" href={business.facebookUrl}>
            Umarika Cafe
          </ExternalLink>
        </div>

        <div className="hero-actions">
          <ExternalLink href={business.mapsUrl} className="btn btn-primary">
            Open Google Maps
          </ExternalLink>
          <ExternalLink href={business.facebookUrl} className="btn btn-secondary">
            View Facebook Page
          </ExternalLink>
          <a className="btn btn-secondary" href={mailtoUrl}>
            Email Umarika
          </a>
        </div>
      </div>
      {mapSrc ? (
        <div data-reveal>
          <MapPanel />
        </div>
      ) : null}
    </div>
  )
}
