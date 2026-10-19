import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found — Umarika Café')

  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Umarika Café</p>
        <h1 id="page-title" tabIndex={-1} className="section-title page-title">
          This page is not part of the concept.
        </h1>
        <span className="gold-rule" aria-hidden="true" />
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
