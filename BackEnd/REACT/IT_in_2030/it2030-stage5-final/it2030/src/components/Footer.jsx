import { NavLink } from 'react-router-dom'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const SITEMAP = [
  { num: '01', label: 'Enter 2030', to: '/' },
  { num: '02', label: 'Transformation', to: '/transformation' },
  { num: '03', label: 'Job Market', to: '/job-market' },
  { num: '04', label: 'Human Backup', to: '/human-backup' },
  { num: '05', label: 'Your 2030', to: '/your-2030' },
]

const SOURCES = [
  { name: 'World Economic Forum — Future of Jobs Report', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' },
  { name: 'Stanford HAI — AI Index Report', url: 'https://aiindex.stanford.edu/report/' },
  { name: 'Microsoft — Work Trend Index', url: 'https://www.microsoft.com/en-us/worklab/work-trend-index' },
  { name: 'McKinsey Global Institute — Future of Work', url: 'https://www.mckinsey.com/mgi/our-research/future-of-work' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-signal/10 bg-abyss/60">
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-lg font-bold text-mist">
              IT <span className="text-gradient-signal">2030</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist/55">
              An interactive intelligence platform tracking how information technology,
              careers, and human skills are likely to evolve as automation and AI
              become part of everyday work.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-sky/50">SITEMAP</p>
            <ul className="mt-4 space-y-2">
              {SITEMAP.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className="group flex items-center gap-2 text-sm text-mist/60 transition-colors hover:text-mist"
                  >
                    <span className="font-mono text-[10px] text-sky/40 group-hover:text-cyan">{item.num}</span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-sky/50">RESEARCH REFERENCES</p>
            <ul className="mt-4 space-y-2.5">
              {SOURCES.map((source) => (
                <li key={source.name}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-1.5 text-sm text-mist/55 transition-colors hover:text-sky"
                  >
                    <span>{source.name}</span>
                    <HiOutlineArrowUpRight className="mt-0.5 shrink-0 opacity-40 transition-opacity group-hover:opacity-100" size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-signal/10 pt-6 text-xs text-mist/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Forward-looking content on this site describes expected directions and emerging
            trends — not guaranteed outcomes.
          </p>
          <p className="font-mono">© 2030 SIMULATION · BUILT {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
