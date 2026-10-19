import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { business } from '../data/business.js'
import { menuArtwork } from '../data/images.js'
import { exploreGroups, getMenuItem, highlightIds, itemPriceLabel, itemsInCategory } from '../data/menu.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import Address from '../components/Address.jsx'
import CornerPattern from '../components/CornerPattern.jsx'
import ExternalLink from '../components/ExternalLink.jsx'
import MenuViewer from '../components/MenuViewer.jsx'

export default function Home() {
  const [artwork, setArtwork] = useState(null)
  const highlights = highlightIds.map((id) => getMenuItem(id)).filter(Boolean)
  const espresso = itemsInCategory('espresso')
  const matcha = itemsInCategory('matcha')

  usePageTitle('Umarika Café — Coffee, comfort, and something delicious')

  return (
    <>
      <section className="hero section">
        <div className="pattern-slot bottom-left">
          <CornerPattern />
        </div>
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">{business.eyebrow}</p>
            <h1 id="page-title" tabIndex={-1} className="hero-title">
              <span className="title-line">Coffee, comfort,</span>
              <span className="title-line">and something delicious.</span>
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="lede">
              Explore coffee, matcha, breakfast plates, ramen, and Japanese–Filipino favorites at Umarika Café.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                Explore the Menu
              </Link>
              <Link to="/visit" className="btn btn-secondary">
                Plan Your Visit
              </Link>
            </div>
          </div>

          <div className="hero-panel on-dark">
            <div className="pattern-slot top-right">
              <CornerPattern />
            </div>
            <button type="button" className="hero-frame" onClick={() => setArtwork(menuArtwork.drinks)}>
              <img
                src={menuArtwork.drinks.src}
                alt=""
                width={menuArtwork.drinks.width}
                height={menuArtwork.drinks.height}
              />
              <span className="hero-frame-caption">View original menu</span>
            </button>
            <p className="hero-panel-note">Breakfast, snacks, and drinks artwork supplied for this concept.</p>
          </div>
        </div>
      </section>

      <section className="section explore" aria-labelledby="explore-title">
        <div className="container">
          <p className="eyebrow">The menu</p>
          <h2 id="explore-title" className="section-title">
            Explore the menu
          </h2>
          <div className="explore-grid">
            {exploreGroups.map((entry) => (
              <Link
                key={entry.group}
                to={`/menu?group=${entry.group}`}
                className={`explore-card explore-card--${entry.tone}`}
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

      <section className="section taste" aria-labelledby="taste-title">
        <div className="container taste-layout">
          <div>
            <p className="eyebrow">From the supplied menu</p>
            <h2 id="taste-title" className="section-title">
              A Taste of Umarika
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="lede">Four dishes and sets printed on the current menu artwork.</p>
          </div>
          <ul className="taste-list">
            {highlights.map((item) => (
              <li key={item.id}>
                <Link className="taste-row" to={`/menu?q=${encodeURIComponent(item.name)}`}>
                  <span className="taste-name">{item.name}</span>
                  <span className="price">{itemPriceLabel(item)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band on-dark" aria-labelledby="drinks-title">
        <div className="pattern-slot top-right">
          <CornerPattern />
        </div>
        <div className="container band-layout">
          <div>
            <p className="eyebrow">Espresso and matcha</p>
            <h2 id="drinks-title" className="section-title">
              Coffee days. Matcha moments.
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="lede">
              Espresso-based coffee and the matcha series, from the Umarika drinks menu. Fruit teas, frappes, milk
              teas, and other beverages are on the same list.
            </p>
            <Link to="/menu?group=drinks" className="btn btn-on-dark">
              Browse Drinks
            </Link>
          </div>
          <div className="band-lists">
            <div>
              <h3>Espresso-based</h3>
              <ul>
                {espresso.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Matcha series</h3>
              <ul>
                {matcha.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section visit-preview" aria-labelledby="visit-preview-title">
        <div className="container visit-preview-layout">
          <div>
            <p className="eyebrow">{business.placeLabel}</p>
            <h2 id="visit-preview-title" className="section-title">
              Visit & Contact
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <Address className="address-lines preview-address" />
          </div>
          <div className="hero-actions">
            <Link to="/visit" className="btn btn-primary">
              Visit & Contact
            </Link>
            <ExternalLink href={business.facebookUrl} className="btn btn-secondary">
              Find us on Facebook
            </ExternalLink>
          </div>
        </div>
      </section>

      <MenuViewer image={artwork} onClose={() => setArtwork(null)} />
    </>
  )
}
