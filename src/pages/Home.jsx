import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { business } from '../data/business.js'
import { venuePhoto } from '../data/images.js'
import { exploreGroups } from '../data/menu.js'
import { reviews } from '../data/reviews.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import ExternalLink from '../components/ExternalLink.jsx'
import LocationSection from '../components/LocationSection.jsx'

export default function Home() {
  usePageTitle('Umarika Café — Good food. Great coffee.')

  return (
    <>
      <section className="photo-hero" aria-labelledby="page-title">
        <div className="photo-hero-media">
          <img
            src={venuePhoto.src}
            width={venuePhoto.width}
            height={venuePhoto.height}
            alt={venuePhoto.heroAlt}
            fetchPriority="high"
          />
        </div>
        <div className="photo-hero-scrim">
          <div className="container hero-copy">
            <p className="eyebrow">{business.eyebrow}</p>
            <h1 id="page-title" tabIndex={-1} className="hero-title">
              <span className="title-line">Good food.</span>
              <span className="title-line">Great coffee.</span>
              <span className="title-line">Welcome to Umarika.</span>
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="lede">Coffee, matcha, ramen, and Japanese–Filipino favorites, all in one place.</p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                Explore Our Menu.
              </Link>
              <Link to="/#location" className="btn btn-secondary">
                Find Us.
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section explore" aria-labelledby="explore-title">
        <div className="container">
          <div data-reveal>
            <p className="eyebrow">The menu</p>
            <h2 id="explore-title" className="section-title">
              Explore the menu
            </h2>
          </div>
          <div className="explore-grid">
            {exploreGroups.map((entry) => (
              <Link
                key={entry.group}
                to={`/menu?group=${entry.group}`}
                className={`explore-card explore-card--${entry.tone}`}
                data-reveal
              >
                <span className="gold-rule" aria-hidden="true" />
                <span className="explore-index">{entry.index}</span>
                <h3 className="explore-title">{entry.title}</h3>
                <p className="explore-text">{entry.text}</p>
                <span className="explore-go">
                  See this category
                  <ArrowRight aria-hidden="true" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section reviews" aria-labelledby="reviews-title">
        <div className="container">
          <div data-reveal>
            <p className="eyebrow">{reviews.label}</p>
            <h2 id="reviews-title" className="section-title">
              {reviews.heading}
            </h2>
            <p className="review-score">
              <Star aria-hidden="true" size={22} fill="currentColor" />
              <span>{reviews.ratingLabel}</span>
            </p>
            <p className="review-curated">{reviews.curatedLabel}</p>
          </div>
          <ul className="review-grid">
            {reviews.items.map((review) => (
              <li key={review.author} className="review-card" data-reveal>
                <p className="review-stars" aria-label="5 stars">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star key={starIndex} aria-hidden="true" size={16} fill="currentColor" />
                  ))}
                </p>
                <blockquote>
                  <p>{review.text}</p>
                </blockquote>
                <p className="review-author">{review.author}</p>
              </li>
            ))}
          </ul>
          <ExternalLink href={reviews.mapsUrl} className="btn btn-secondary review-more">
            Read more on Google Maps ↗
          </ExternalLink>
        </div>
      </section>

      <section id="location" className="section location-section" aria-labelledby="location-title">
        <LocationSection
          headingId="location-title"
          heading="Come by Umarika."
          intro="Write, visit the Facebook page, or open the map to reach Umarika Café."
        />
      </section>
    </>
  )
}
