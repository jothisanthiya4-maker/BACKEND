import { useState, useEffect } from 'react'
import { roadmapByPath, pathOptions } from '../../data/your2030.js'

export default function FutureRoadmap({ pathId }) {
  const steps = roadmapByPath[pathId] || null
  const [active, setActive] = useState(0)

  // Reset the highlighted step whenever the user changes their chosen path
  useEffect(() => {
    setActive(0)
  }, [pathId])

  if (!steps) {
    return (
      <div className="glass mt-10 rounded-2xl p-8 text-center">
        <p className="text-sm text-mist/55">
          Choose a future path in Section 3 to generate your personal 2026 → 2030 roadmap.
        </p>
      </div>
    )
  }

  const pathLabel = pathOptions.find((p) => p.id === pathId)?.label
  const progress = (active / (steps.length - 1)) * 100
  const current = steps[active]

  return (
    <div className="mt-10">
      <p className="font-mono text-[11px] tracking-[0.2em] text-orchid/70">ROADMAP FOR: {pathLabel?.toUpperCase()}</p>

      <div className="relative mt-8">
        <div className="absolute left-0 right-0 top-4 h-[2px] bg-white/10 md:top-1/2">
          <div
            className="h-full bg-gradient-to-r from-violet via-orchid to-sky transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="relative flex flex-col gap-3 md:flex-row md:justify-between">
          {steps.map((step, i) => {
            const isActive = i === active
            const isPast = i < active
            return (
              <button
                key={step.year}
                type="button"
                onClick={() => setActive(i)}
                className="group flex items-center gap-3 text-left md:flex-col md:items-center md:gap-3"
              >
                <span
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[11px] transition-all duration-300 ${
                    isActive
                      ? 'border-orchid bg-orchid/20 text-orchid shadow-glow-violet scale-110'
                      : isPast
                        ? 'border-violet/60 bg-violet/10 text-violet/80'
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
                  {step.year}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div key={current.year} className="glass mt-10 animate-fade-up rounded-2xl p-6 md:p-8">
        <span className="rounded-full border border-orchid/25 bg-violet/10 px-3 py-1 font-mono text-[11px] text-orchid">
          {current.year}
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-mist md:text-2xl">{current.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist/65 md:text-base">{current.detail}</p>
      </div>
    </div>
  )
}
