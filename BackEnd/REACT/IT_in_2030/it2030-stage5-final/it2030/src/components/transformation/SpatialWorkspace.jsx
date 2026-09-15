import { useState } from 'react'
import { workspaceZones } from '../../data/transformation.js'

/**
 * Section 7 visualisation — "Future Workplace".
 * A schematic floor plan with selectable zones. Built from layout and SVG
 * rather than photography, so it stays crisp, themeable, and readable on a
 * phone. A list of zone buttons sits underneath as the accessible equivalent.
 */
export default function SpatialWorkspace() {
  const [active, setActive] = useState('twin')
  const current = workspaceZones.find((z) => z.id === active)

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
      {/* Schematic */}
      <div className="glass relative overflow-hidden rounded-3xl p-4 sm:p-6">
        <div className="relative aspect-[4/3] w-full">
          {/* Perspective floor grid */}
          <svg
            viewBox="0 0 400 300"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="spatialFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4BB8FA" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#4BB8FA" stopOpacity="0.16" />
              </linearGradient>
            </defs>
            {/* Horizontals */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
              const y = 40 + (i * i) * 3.4
              return (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={y}
                  x2="400"
                  y2={y}
                  stroke="rgba(75,184,250,0.16)"
                  strokeWidth="0.8"
                />
              )
            })}
            {/* Converging verticals */}
            {Array.from({ length: 11 }, (_, i) => {
              const bottomX = i * 40
              const topX = 200 + (bottomX - 200) * 0.34
              return (
                <line
                  key={`v${i}`}
                  x1={topX}
                  y1="40"
                  x2={bottomX}
                  y2="300"
                  stroke="rgba(75,184,250,0.12)"
                  strokeWidth="0.8"
                />
              )
            })}
            <rect x="0" y="40" width="400" height="260" fill="url(#spatialFade)" />
          </svg>

          {/* Connection lines from active zone to the others */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="none">
            {workspaceZones
              .filter((z) => z.id !== current.id)
              .map((z) => (
                <line
                  key={z.id}
                  x1={current.x}
                  y1={current.y}
                  x2={z.x}
                  y2={z.y}
                  stroke="rgba(34,211,238,0.28)"
                  strokeWidth="0.35"
                  strokeDasharray="1.5 2"
                />
              ))}
          </svg>

          {/* Zone nodes */}
          {workspaceZones.map((zone) => {
            const isActive = zone.id === active
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setActive(zone.id)}
                aria-pressed={isActive}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-offset-4"
                style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
              >
                <span className="relative flex items-center justify-center">
                  {isActive && (
                    <span className="absolute h-10 w-10 animate-pulse-glow rounded-full bg-cyan/20" aria-hidden="true" />
                  )}
                  <span
                    className={`relative h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'scale-125 border-cyan bg-cyan shadow-glow-cyan'
                        : 'border-sky/70 bg-deep hover:border-cyan'
                    }`}
                  />
                </span>
                <span
                  className={`pointer-events-none absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap font-mono text-[10px] transition-colors sm:block ${
                    isActive ? 'text-cyan' : 'text-mist/45'
                  }`}
                >
                  {zone.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Zone buttons — the accessible + mobile equivalent of the map */}
        <div className="mt-6 flex flex-wrap gap-2">
          {workspaceZones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              onClick={() => setActive(zone.id)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                zone.id === active
                  ? 'border-cyan/40 bg-cyan/10 text-cyan'
                  : 'border-white/10 text-mist/50 hover:text-mist/80'
              }`}
            >
              {zone.name}
            </button>
          ))}
        </div>
      </div>

      {/* Detail */}
      <div className="lg:self-center">
        <div key={current.id} className="glass animate-fade-up rounded-2xl p-6 md:p-8">
          <h3 className="font-display text-2xl font-bold text-mist">{current.name}</h3>
          <p className="mt-3 text-sm font-medium text-sky/80 md:text-base">{current.summary}</p>
          <p className="mt-4 text-sm leading-relaxed text-mist/60 md:text-[0.95rem]">{current.detail}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-mist/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
