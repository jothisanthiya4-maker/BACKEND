import { useState } from 'react'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { devEras, devTimeShift } from '../../data/transformation.js'
import useReveal from '../../hooks/useReveal.js'

/**
 * Section 1 visualisation.
 * A stepped rail (horizontal on desktop, vertical on mobile) through the five
 * stages of how development work is expected to change, plus a panel showing
 * where a developer's time is expected to move.
 */
export default function DevEvolutionTimeline() {
  const [active, setActive] = useState(0)
  const current = devEras[active]
  const progress = (active / (devEras.length - 1)) * 100
  const shiftRef = useReveal()

  return (
    <div className="mt-14">
      {/* Stage rail */}
      <div className="relative">
        {/* Desktop rail */}
        <div className="absolute inset-x-0 top-5 hidden h-[2px] bg-white/10 md:block">
          <div
            className="h-full bg-gradient-to-r from-signal via-sky to-cyan transition-[width] duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Mobile rail */}
        <div className="absolute bottom-4 left-[15px] top-4 w-[2px] bg-white/10 md:hidden">
          <div
            className="w-full bg-gradient-to-b from-signal via-sky to-cyan transition-[height] duration-700 ease-out"
            style={{ height: `${progress}%` }}
          />
        </div>

        <ol className="relative flex flex-col gap-5 md:flex-row md:gap-3">
          {devEras.map((era, i) => {
            const isActive = i === active
            const isPast = i < active
            return (
              <li key={era.id} className="md:flex-1">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? 'step' : undefined}
                  className="group flex w-full items-start gap-4 text-left md:flex-col md:items-center md:gap-3 md:text-center"
                >
                  <span
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[11px] transition-all duration-300 ${
                      isActive
                        ? 'scale-110 border-cyan bg-cyan/20 text-cyan shadow-glow-cyan'
                        : isPast
                          ? 'border-sky/60 bg-sky/10 text-sky/80'
                          : 'border-white/15 bg-void text-mist/40 group-hover:border-sky/40'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-display text-sm font-semibold leading-snug transition-colors ${
                        isActive ? 'text-mist' : 'text-mist/45 group-hover:text-mist/75'
                      }`}
                    >
                      {era.stage}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] tracking-wide text-sky/45">
                      {era.period}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Active stage detail */}
      <div key={current.id} className="glass mt-10 animate-fade-up rounded-2xl p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0">
            <span className="inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 font-mono text-[11px] text-cyan">
              STAGE {String(active + 1).padStart(2, '0')} · {current.stage.toUpperCase()}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-mist md:text-2xl">
              {current.headline}
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-sky/80 md:text-base">
              {current.summary}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist/60 md:text-[0.95rem]">{current.detail}</p>
          </div>

          <div className="rounded-xl border border-white/5 bg-void/40 p-5">
            <p className="font-mono text-[11px] tracking-[0.2em] text-mist/40">WHERE THE HUMAN ATTENTION GOES</p>
            <ul className="mt-4 space-y-3">
              {current.humanFocus.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-mist/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orchid" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Time-allocation shift */}
      <div ref={shiftRef} className="reveal mt-12">
        <h4 className="font-display text-lg font-semibold text-mist">
          Where a developer&rsquo;s time is expected to move
        </h4>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist/55">
          Directional, not measured. Read each row as &ldquo;this share of the week grows or shrinks&rdquo;
          rather than as a forecast percentage.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {devTimeShift.map((row) => {
            const up = row.direction === 'up'
            return (
              <div
                key={row.label}
                className="glass rounded-xl p-5 transition-colors duration-300 hover:border-signal/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display text-sm font-semibold text-mist">{row.label}</p>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                      up ? 'border-cyan/30 bg-cyan/10 text-cyan' : 'border-sky/25 bg-signal/10 text-sky/70'
                    }`}
                  >
                    {up ? <FiArrowUpRight size={14} /> : <FiArrowDownRight size={14} />}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                  <span className="rounded-md bg-white/5 px-2 py-1 text-mist/50">{row.today}</span>
                  <span className="text-sky/40">→</span>
                  <span
                    className={`rounded-md px-2 py-1 ${
                      up ? 'bg-cyan/10 text-cyan' : 'bg-signal/10 text-sky/75'
                    }`}
                  >
                    {row.future}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-mist/50">{row.note}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
