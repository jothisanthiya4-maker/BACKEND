import { useState } from 'react'
import { frontendStages } from '../../data/transformation.js'

/**
 * Section 2 visualisation — "Developer Evolution".
 * Three columns (TODAY → AI-ASSISTED → 2030 DIRECTION) that compare the same
 * six aspects of frontend work. On mobile the columns become a tab switcher so
 * nothing is squeezed or scrolled sideways.
 */
export default function FrontendEvolution() {
  const [mobileStage, setMobileStage] = useState(0)
  const [hovered, setHovered] = useState(null)

  return (
    <div className="mt-14">
      {/* Mobile: tab switcher */}
      <div className="flex gap-2 md:hidden">
        {frontendStages.map((stage, i) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => setMobileStage(i)}
            className={`flex-1 rounded-xl border px-3 py-2.5 text-xs font-medium transition-colors ${
              mobileStage === i ? 'text-mist' : 'border-white/10 text-mist/50'
            }`}
            style={
              mobileStage === i
                ? { borderColor: `${stage.color}66`, backgroundColor: `${stage.color}14` }
                : undefined
            }
          >
            {stage.title}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:mt-0 md:grid-cols-3 md:gap-4">
        {frontendStages.map((stage, i) => {
          const dim = hovered !== null && hovered !== i
          return (
            <div
              key={stage.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`${mobileStage === i ? 'flex' : 'hidden'} flex-col md:flex ${
                dim ? 'md:opacity-55' : 'md:opacity-100'
              } transition-opacity duration-300`}
            >
              {/* Column head + connector */}
              <div className="relative">
                <div
                  className="glass rounded-2xl p-5"
                  style={{ borderColor: `${stage.color}40` }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: stage.color, boxShadow: `0 0 12px ${stage.color}` }}
                    />
                    <h3 className="font-display text-base font-bold text-mist">{stage.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist/55">{stage.caption}</p>
                </div>

                {/* Downward flow marker, desktop only */}
                {i < frontendStages.length - 1 && (
                  <div
                    className="absolute -right-4 top-1/2 hidden h-px w-4 md:block"
                    style={{ background: `linear-gradient(90deg, ${stage.color}, transparent)` }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Aspect rows */}
              <dl className="mt-4 flex-1 space-y-px overflow-hidden rounded-2xl border border-white/5">
                {stage.rows.map((row, rowIndex) => (
                  <div
                    key={row.k}
                    className="bg-deep/30 px-5 py-3.5 transition-colors duration-300 hover:bg-deep/60"
                    style={{ animationDelay: `${rowIndex * 60}ms` }}
                  >
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-mist/35">
                      {row.k.toUpperCase()}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-mist/75">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <p
                className="mt-4 rounded-xl border-l-2 bg-void/40 py-3 pl-4 pr-4 text-xs leading-relaxed text-mist/55"
                style={{ borderColor: stage.color }}
              >
                {stage.note}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
