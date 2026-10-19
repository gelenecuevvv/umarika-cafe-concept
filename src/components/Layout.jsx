import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function scrollToHash(hash) {
  if (!/^#[A-Za-z][\w-]*$/.test(hash)) return false
  const target = document.querySelector(hash)
  if (!target) return false
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  return true
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  const isFirst = useRef(true)
  useScrollReveal(pathname)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      if (hash) scrollToHash(hash)
      return
    }
    if (hash && scrollToHash(hash)) return
    window.scrollTo(0, 0)
    document.getElementById('page-title')?.focus()
  }, [pathname, hash])

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
