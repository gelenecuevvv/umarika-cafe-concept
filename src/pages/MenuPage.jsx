import { useState } from 'react'
import { Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { menuArtwork } from '../data/images.js'
import { categories, itemHaystack, menuGroups, menuItems } from '../data/menu.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import MenuItem from '../components/MenuItem.jsx'
import MenuViewer from '../components/MenuViewer.jsx'

const artworkList = [menuArtwork.food, menuArtwork.drinks]

export default function MenuPage() {
  const [params, setParams] = useSearchParams()
  const [artwork, setArtwork] = useState(null)
  const query = params.get('q') ?? ''
  const requestedCategory = params.get('category')
  const requestedGroup = params.get('group')
  const category = categories.some((entry) => entry.id === requestedCategory) ? requestedCategory : 'all'
  const group = menuGroups[requestedGroup] ? requestedGroup : ''

  usePageTitle('Our Menu — Umarika Café')

  const activeCategories = group
    ? menuGroups[group].categories
    : category !== 'all'
      ? [category]
      : null

  const needle = query.trim().toLowerCase()
  const results = menuItems.filter((item) => {
    if (activeCategories && !activeCategories.includes(item.category)) return false
    if (!needle) return true
    return itemHaystack(item).includes(needle)
  })

  const sections = categories
    .filter((entry) => entry.id !== 'all')
    .map((entry) => ({
      ...entry,
      items: results.filter((item) => item.category === entry.id),
    }))
    .filter((entry) => entry.items.length > 0)

  const filtersActive = Boolean(query.trim() || activeCategories)

  function updateQuery(value) {
    const next = new URLSearchParams(params)
    if (value) next.set('q', value)
    else next.delete('q')
    setParams(next, { replace: true })
  }

  function selectCategory(id) {
    const next = new URLSearchParams(params)
    next.delete('group')
    if (id === 'all') next.delete('category')
    else next.set('category', id)
    setParams(next)
  }

  function clearFilters() {
    setParams(new URLSearchParams(), { replace: true })
  }

  return (
    <section className="section menu-page">
      <div className="container">
        <div data-reveal>
          <p className="eyebrow">Umarika Café</p>
          <h1 id="page-title" tabIndex={-1} className="section-title page-title">
            Our Menu
          </h1>
          <p className="lede menu-intro">
            Coffee, matcha, breakfast, ramen, and Japanese–Filipino dishes transcribed from the supplied menus.
          </p>
          <p className="quiet-note">
            Menu and prices are based on the supplied menu. Please confirm current availability and pricing with Umarika
            Café.
          </p>
        </div>

        <div className="original-menu" data-reveal>
          <h2>View Original Menu</h2>
          <div className="original-menu-actions">
            {artworkList.map((image) => (
              <button key={image.id} type="button" className="artwork-button" onClick={() => setArtwork(image)}>
                <img src={image.src} alt="" width={image.width} height={image.height} />
                <span>{image.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="menu-tools" data-reveal>
          <div className="search-field">
            <label className="field-label" htmlFor="menu-search">
              Search the menu
            </label>
            <div className="search-control">
              <Search aria-hidden="true" size={18} />
              <input
                id="menu-search"
                type="search"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Ramen, matcha, breakfast"
                autoComplete="off"
                aria-controls="menu-results"
              />
            </div>
          </div>
          {filtersActive && (
            <button type="button" className="btn btn-secondary clear-filters" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>

        <div className="filter-bar" role="group" aria-label="Menu categories" data-reveal>
          {categories.map((entry) => {
            const pressed = entry.id === 'all' ? !activeCategories : Boolean(activeCategories?.includes(entry.id))
            return (
              <button
                key={entry.id}
                type="button"
                className="filter-btn"
                aria-pressed={pressed}
                onClick={() => selectCategory(entry.id)}
              >
                {entry.label}
              </button>
            )
          })}
        </div>

        <p className="result-count" aria-live="polite">
          {group ? `Showing ${menuGroups[group].label}. ` : ''}
          {results.length === 1 ? '1 item' : `${results.length} items`}
        </p>

        <div id="menu-results">
          {sections.length === 0 ? (
            <div className="empty-state" role="status" data-reveal>
              <p>No items match those filters.</p>
              <button type="button" className="btn btn-primary" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          ) : (
            sections.map((section) => (
              <section
                key={section.id}
                className="menu-category"
                aria-labelledby={`cat-${section.id}`}
                data-reveal
              >
                <h2 id={`cat-${section.id}`}>{section.label}</h2>
                <ul className="menu-list">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <MenuItem item={item} />
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </div>
      <MenuViewer image={artwork} onClose={() => setArtwork(null)} />
    </section>
  )
}
