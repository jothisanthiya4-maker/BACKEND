import { useMemo, useState } from 'react'
import { resilienceFactors, resilienceLevels, resilienceBands } from '../../data/jobMarket.js'

const DEFAULT_LEVEL = 2

/**
 * Section 8 — Career Resilience Index.
 * Six factors, each set independently on a 1–4 scale. The overall band
 * (Low / Moderate / High / Very High) and its explanation are recalculated
 * from React state on every change — nothing here is a fixed result.
 */
export default function ResilienceIndex() {
  const [levels, setLevels] = useState(() =>
    Object.fromEntries(resilienceFactors.map((f) => [f.id, DEFAULT_LEVEL]))
  )

  function setLevel(factorId, value) {
    setLevels((prev) => ({ ...prev, [factorId]: value }))
  }

  const { average, band } = useMemo(() => {
    const values = Object.values(levels)
    const avg = values.reduce((sum, v) => sum + v, 0) / values.length
    const matchedBand = resilienceBands.find((b) => avg <= b.max) || resilienceBands[resilienceBands.length - 1]
    return { average: avg, band: matchedBand }
  }, [levels])

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-10">
      {/* Factor sliders */}
      <div className="space-y-4">
        {resilienceFactors.map((factor) => (
          <div key={factor.id} className="glass rounded-2xl p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h4 className="font-display text-sm font-semibold text-mist md:text-base">{factor.label}</h4>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-mist/50">{factor.description}</p>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {resilienceLevels.map((lvl) => {
                const isActive = levels[factor.id] === lvl.value
                return (
                  <button
                    key={lvl.value}
                    type="button"
                    onClick={() => setLevel(factor.id, lvl.value)}
                    aria-pressed={isActive}
                    className={`rounded-lg border px-2 py-2 text-center text-[11px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'border-cyan/50 bg-cyan/15 text-cyan shadow-glow-cyan'
                        : 'border-white/10 text-mist/45 hover:border-signal/30 hover:text-mist/75'
                    }`}
                  >
                    {lvl.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Live result */}
      <div className="glass sticky top-24 overflow-hidden rounded-2xl p-6 md:p-8">
        <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(circle at 20% 0%, ${band.color}22, transparent 65%)` }} aria-hidden="true" />
        <div className="relative">
          <p className="font-mono text-[11px] tracking-[0.2em] text-mist/40">CAREER RESILIENCE INDEX</p>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-display text-5xl font-bold" style={{ color: band.color }}>
              {band.label.toUpperCase()}
            </span>
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full transition-[width] duration-700 ease-out"
              style={{ width: `${(average / 4) * 100}%`, background: `linear-gradient(90deg, ${band.color}55, ${band.color})` }}
            />
          </div>
          <p className="mt-2 font-mono text-[10px] text-mist/35">AVERAGE SCORE · {average.toFixed(1)} / 4 (illustrative)</p>

          <p className="mt-5 border-t border-white/5 pt-5 text-sm leading-relaxed text-mist/65">{band.explanation}</p>

          <div className="mt-6 space-y-2.5">
            {resilienceFactors.map((factor) => (
              <div key={factor.id} className="flex items-center justify-between text-xs text-mist/50">
                <span>{factor.label}</span>
                <span className="font-mono text-mist/40">
                  {resilienceLevels.find((l) => l.value === levels[factor.id])?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
