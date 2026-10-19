import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const isFirst = useRef(true)
  useScrollReveal(pathname)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    window.scrollTo(0, 0)
    document.getElementById('page-title')?.focus()
  }, [pathname])

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
