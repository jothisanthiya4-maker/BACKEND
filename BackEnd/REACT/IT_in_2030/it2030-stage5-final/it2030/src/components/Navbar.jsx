import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const LINKS = [
  { num: '01', label: 'ENTER 2030', to: '/' },
  { num: '02', label: 'TRANSFORMATION', to: '/transformation' },
  { num: '03', label: 'JOB MARKET', to: '/job-market' },
  { num: '04', label: 'HUMAN BACKUP', to: '/human-backup' },
  { num: '05', label: 'YOUR 2030', to: '/your-2030' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-void/85 backdrop-blur-xl border-b border-signal/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <NavLink to="/" className="group flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold tracking-tight text-mist md:text-2xl">
            IT <span className="text-gradient-signal">2030</span>
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.35em] text-sky/60 sm:inline">
            FUTURE INTELLIGENCE
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `group relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-mist' : 'text-mist/55 hover:text-mist/90'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`font-mono text-[10px] ${isActive ? 'text-cyan' : 'text-sky/40 group-hover:text-sky/70'}`}>
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[3px] h-[2px] rounded-full bg-gradient-to-r from-signal via-cyan to-signal shadow-glow-cyan" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-signal/20 text-mist lg:hidden"
        >
          {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out lg:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-signal/10 bg-void/95 px-5 pb-6 pt-3 backdrop-blur-xl">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors ${
                  isActive ? 'bg-deep/60 text-mist' : 'text-mist/60'
                }`
              }
            >
              <span className="font-mono text-xs text-sky/60">{link.num}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
