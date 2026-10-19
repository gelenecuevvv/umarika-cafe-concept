import { Link } from 'react-router-dom'
import { business } from '../data/business.js'
import Address from './Address.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid" data-reveal>
        <div>
          <p className="footer-wordmark">Umarika</p>
          <p className="footer-cafe">Café</p>
        </div>
        <Address className="footer-address" />
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
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
