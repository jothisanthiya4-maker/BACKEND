import { useState } from 'react'
import { timeline } from '../data/futureTrends.js'

export default function Timeline() {
  const [active, setActive] = useState(0)
  const current = timeline[active]
  const progress = (active / (timeline.length - 1)) * 100

  return (
    <div className="mt-14">
      {/* Year markers + progress rail */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-4 h-[2px] bg-white/10 md:top-1/2">
          <div
            className="h-full bg-gradient-to-r from-signal via-sky to-cyan transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="relative flex flex-col gap-3 md:flex-row md:justify-between">
          {timeline.map((item, i) => {
            const isActive = i === active
            const isPast = i < active
            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setActive(i)}
                className="group flex items-center gap-3 text-left md:flex-col md:items-center md:gap-3"
              >
                <span
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[11px] transition-all duration-300 ${
                    isActive
                      ? 'border-cyan bg-cyan/20 text-cyan shadow-glow-cyan scale-110'
                      : isPast
                        ? 'border-sky/60 bg-sky/10 text-sky/80'
                        : 'border-white/15 bg-void text-mist/40'
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`font-display text-sm font-semibold transition-colors md:text-base ${
                    isActive ? 'text-mist' : 'text-mist/40 group-hover:text-mist/70'
                  }`}
                >
                  {item.year}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Active year detail panel */}
      <div key={current.year} className="glass mt-10 animate-fade-up rounded-2xl p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-sky/25 bg-signal/10 px-3 py-1 font-mono text-[11px] text-sky">
            EXPECTED DIRECTION · {current.year}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-mist md:text-2xl">{current.headline}</h3>
        <ul className="mt-5 space-y-3">
          {current.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist/65 md:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
