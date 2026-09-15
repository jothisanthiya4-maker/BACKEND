import { useMemo, useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { automationTasks, automationExposureNote } from '../../data/jobMarket.js'
import useReveal from '../../hooks/useReveal.js'

const FIT_META = {
  High: { color: '#22D3EE', width: '85%', label: 'Strong automation fit' },
  Medium: { color: '#4BB8FA', width: '52%', label: 'Partial — assisted, not replaced' },
  Low: { color: '#A855F7', width: '20%', label: 'Stays human-led' },
}

const FILTERS = ['All', 'High', 'Medium', 'Low']

/**
 * Section 4 — Automation Exposure.
 * Organised by task, not job title, matching the framing used elsewhere on
 * the site: automation is selective about which tasks it lands on.
 */
export default function AutomationExposure() {
  const [filter, setFilter] = useState('All')
  const ref = useReveal()

  const rows = useMemo(
    () => (filter === 'All' ? automationTasks : automationTasks.filter((t) => t.fit === filter)),
    [filter]
  )

  return (
    <div ref={ref} className="reveal mt-12">
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const isActive = filter === f
          const color = FIT_META[f]?.color
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                isActive ? 'text-mist' : 'border-white/10 text-mist/50 hover:text-mist/80'
              }`}
              style={
                isActive
                  ? { borderColor: color ? `${color}66` : 'rgba(75,184,250,0.4)', backgroundColor: color ? `${color}14` : 'rgba(75,184,250,0.1)' }
                  : undefined
              }
            >
              {f === 'All' ? 'All tasks' : `${f} fit`}
            </button>
          )
        })}
      </div>

      <ul className="mt-6 space-y-3">
        {rows.map((row, i) => {
          const meta = FIT_META[row.fit]
          return (
            <li
              key={row.task}
              className="glass animate-sweep-in rounded-2xl p-5 opacity-0 md:p-6"
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="max-w-xl font-display text-sm font-semibold text-mist md:text-base">{row.task}</p>
                <span
                  className="rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide"
                  style={{ color: meta.color, borderColor: `${meta.color}55`, backgroundColor: `${meta.color}14` }}
                >
                  {row.fit.toUpperCase()}
                </span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
                  style={{ width: meta.width, background: `linear-gradient(90deg, ${meta.color}55, ${meta.color})` }}
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-[10px] tracking-wide" style={{ color: `${meta.color}cc` }}>
                  {meta.label.toUpperCase()}
                </span>
                <span className="text-xs leading-relaxed text-mist/50">{row.note}</span>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="glass relative mt-8 overflow-hidden rounded-2xl border-cyan/25 p-6 md:p-7">
        <div className="absolute inset-0 bg-radial-glow opacity-40" aria-hidden="true" />
        <div className="relative flex gap-4">
          <FiAlertCircle size={22} className="mt-0.5 shrink-0 text-cyan" />
          <div>
            <p className="font-display text-base font-bold tracking-wide text-mist md:text-lg">
              Automation exposure does not equal career extinction.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-mist/65">{automationExposureNote}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
