import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useDialog } from '../hooks/useDialog.js'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/#reviews', label: 'Reviews', section: true },
  { to: '/visit', label: 'Visit & Contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [openPath, setOpenPath] = useState(null)
  const open = openPath === pathname

  function openMenu() {
    setOpenPath(pathname)
  }

  function closeMenu() {
    setOpenPath(null)
  }

  const dialogRef = useDialog(open, closeMenu)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 980px)')
    function onChange(event) {
      if (event.matches) setOpenPath(null)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-link" aria-label="Umarika Café home">
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) =>
            link.section ? (
              <Link key={link.to} to={link.to} className="nav-link">
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.end} className="nav-link">
                {link.label}
              </NavLink>
            ),
          )}
          <Link to="/menu" className="btn btn-primary">
            View Menu
          </Link>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={openMenu}
        >
          <Menu aria-hidden="true" size={22} />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Primary"
          tabIndex={-1}
          ref={dialogRef}
        >
          <div className="mobile-menu-top">
            <Link to="/" className="brand-link" aria-label="Umarika Café home" onClick={closeMenu}>
              <Logo />
            </Link>
            <button type="button" className="btn btn-secondary" onClick={closeMenu}>
              <X aria-hidden="true" size={18} />
              Close
            </button>
          </div>
          <nav className="mobile-nav-list" aria-label="Mobile">
            {links.map((link) =>
              link.section ? (
                <Link key={link.to} to={link.to} className="nav-link" onClick={closeMenu}>
                  {link.label}
                </Link>
              ) : (
                <NavLink key={link.to} to={link.to} end={link.end} className="nav-link" onClick={closeMenu}>
                  {link.label}
                </NavLink>
              ),
            )}
            <Link to="/menu" className="btn btn-primary" onClick={closeMenu}>
              View Menu
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
