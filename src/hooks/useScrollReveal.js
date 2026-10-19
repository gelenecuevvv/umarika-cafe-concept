import { useEffect } from 'react'

const STAGGER_MS = 80

export function useScrollReveal(pathname) {
  useEffect(() => {
    const scopes = [document.getElementById('main'), document.querySelector('.site-footer')].filter(Boolean)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const seen = new WeakSet()
    let observer

    function show(node, delay) {
      node.style.setProperty('--reveal-delay', `${delay}ms`)
      node.classList.add('is-in')
    }

    function onFocus(event) {
      const node = event.currentTarget
      if (!node.classList.contains('is-in')) show(node, 0)
    }

    if (!reduce.matches) {
      observer = new IntersectionObserver(
        (entries) => {
          const hit = entries.filter((entry) => entry.isIntersecting && !entry.target.classList.contains('is-in'))
          hit.sort((a, b) => {
            const position = a.target.compareDocumentPosition(b.target)
            if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1
            if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1
            return 0
          })
          hit.forEach((entry, index) => {
            const base = Number(entry.target.getAttribute('data-reveal-delay') || 0)
            show(entry.target, base + index * STAGGER_MS)
            observer.unobserve(entry.target)
          })
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0 },
      )
    }

    function arm(node) {
      if (!(node instanceof HTMLElement) || seen.has(node)) return
      seen.add(node)
      node.addEventListener('focusin', onFocus)
      if (reduce.matches) {
        node.classList.add('is-in')
        return
      }
      observer.observe(node)
    }

    function scan(scope) {
      scope.querySelectorAll('[data-reveal]').forEach(arm)
    }

    scopes.forEach(scan)
    const mutations = new MutationObserver(() => {
      scopes.forEach(scan)
    })
    scopes.forEach((scope) => mutations.observe(scope, { childList: true, subtree: true }))

    return () => {
      mutations.disconnect()
      observer?.disconnect()
      scopes.forEach((scope) => {
        scope.querySelectorAll('[data-reveal]').forEach((node) => {
          node.removeEventListener('focusin', onFocus)
        })
      })
    }
  }, [pathname])
}
