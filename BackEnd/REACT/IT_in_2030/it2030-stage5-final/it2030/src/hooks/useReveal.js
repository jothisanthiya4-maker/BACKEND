import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, `.is-visible` is added
 * (see the `.reveal` utility in index.css), triggering a one-time
 * fade/slide transition. Respects prefers-reduced-motion implicitly
 * since the CSS transition duration collapses to ~0 in that case.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
