import { useState } from 'react'
import { aariRoadmap } from '../../data/humanBackup.js'

/**
 * Section 5 — Aari Business Roadmap.
 * Eight clickable phase markers on a progress rail (same mechanic as the
 * Page 2 Timeline component), with a detail panel below. Warm amber/rose
 * accents distinguish this from the futuristic signal/cyan rail used
 * elsewhere on the site.
 */
export default function AariRoadmap() {
  const [active, setActive] = useState(0)
  const current = aariRoadmap[active]
  const Icon = current.icon
  const progress = (active / (aariRoadmap.length - 1)) * 100

  return (
    <div className="mt-12">
      <div className="relative overflow-x-auto pb-2">
        <div className="relative min-w-[720px] lg:min-w-0">
          <div className="absolute left-0 right-0 top-4 h-[2px] bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="relative flex justify-between">
            {aariRoadmap.map((step, i) => {
              const isActive = i === active
              const isPast = i < active
              return (
                <button
                  key={step.phase}
                  type="button"
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-center gap-2.5"
                  style={{ width: `${100 / aariRoadmap.length}%` }}
                >
                  <span
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[11px] transition-all duration-300 ${
                      isActive
                        ? 'scale-110 border-amber-400 bg-amber-400/20 text-amber-300 shadow-[0_0_24px_-4px_rgba(245,158,11,0.7)]'
                        : isPast
                          ? 'border-orange-400/60 bg-orange-400/10 text-orange-300/80'
                          : 'border-white/15 bg-void text-mist/40'
                    }`}
                  >
                    {step.phase}
                  </span>
                  <span
                    className={`hidden text-center font-display text-[11px] font-medium leading-tight transition-colors sm:block ${
                      isActive ? 'text-mist' : 'text-mist/35 group-hover:text-mist/65'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div key={current.phase} className="glass mt-8 animate-fade-up rounded-2xl border-amber-500/15 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-300">
            <Icon size={19} />
          </span>
          <div>
            <span className="block font-mono text-[10px] tracking-[0.25em] text-amber-300/70">
              PHASE {current.phase} OF {aariRoadmap.length}
            </span>
            <span className="block font-display text-lg font-bold text-mist md:text-xl">{current.title}</span>
          </div>
        </div>
        <p className="mt-4 text-sm italic leading-relaxed text-mist/55 md:text-base">{current.summary}</p>
        <ul className="mt-5 space-y-3">
          {current.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist/65 md:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
