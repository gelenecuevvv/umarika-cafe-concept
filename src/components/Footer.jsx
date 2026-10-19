import { Link } from 'react-router-dom'
import { business } from '../data/business.js'
import Address from './Address.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid" data-reveal>
        <Link to="/" className="footer-brand brand-link" aria-label="Umarika Café home">
          <Logo />
        </Link>
        <Address className="footer-address" />
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/#reviews">Reviews</Link>
          <Link to="/visit">Visit & Contact</Link>
        </nav>
      </div>
      <div className="container">
        <p className="concept-credit" data-reveal>
          {business.conceptCredit}
        </p>
      </div>
    </footer>
  )
}
