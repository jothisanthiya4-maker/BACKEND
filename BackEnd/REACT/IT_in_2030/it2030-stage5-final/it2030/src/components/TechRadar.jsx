import { useMemo, useState } from 'react'
import { technologies, stageMeta } from '../data/technologies.js'

const CENTER = 200
const MAX_RADIUS = 168
const RINGS = [
  { stage: 'Mainstream', r: 0.42 },
  { stage: 'Growing', r: 0.68 },
  { stage: 'Emerging', r: 0.94 },
]
const NODE_POSITIONS = [
  { left: '18%', top: '22%' }, { left: '49%', top: '14%' }, { left: '79%', top: '27%' }, { left: '27%', top: '51%' }, { left: '65%', top: '48%' },
  { left: '13%', top: '77%' }, { left: '46%', top: '82%' }, { left: '82%', top: '73%' }, { left: '34%', top: '35%' }, { left: '65%', top: '64%' },
]

function polarToCartesian(angleDeg, radiusFraction) {
  const angleRad = (angleDeg - 90) * (Math.PI / 180)
  const r = radiusFraction * MAX_RADIUS
  return {
    x: CENTER + r * Math.cos(angleRad),
    y: CENTER + r * Math.sin(angleRad),
  }
}

export default function TechRadar() {
  const [selectedId, setSelectedId] = useState('ai')
  const selected = useMemo(() => technologies.find((t) => t.id === selectedId), [selectedId])

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
      <div className="relative mx-auto w-full max-w-[440px]">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-cyan/20 bg-deep/50 shadow-[0_0_70px_rgba(34,211,238,0.12)]">
          <div className="absolute inset-0 bg-grid-lines bg-grid opacity-30" aria-hidden="true" />
          <div className="absolute -left-16 top-8 h-36 w-36 rounded-full bg-cyan/20 blur-3xl animate-float" aria-hidden="true" />
          <div className="absolute -bottom-12 right-0 h-40 w-40 rounded-full bg-orchid/20 blur-3xl animate-float-slow" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan/70 shadow-[0_0_24px_5px_rgba(34,211,238,0.25)] animate-scan-line" aria-hidden="true" />
          <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.28em] text-cyan/60">TECH SIGNAL GRID</div>
          <div className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.2em] text-mist/35">2030</div>
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/35 bg-void/80 font-display text-sm font-bold tracking-[0.18em] text-cyan shadow-[0_0_35px_rgba(34,211,238,0.28)]">
            2030
            <span className="absolute inset-[-10px] rounded-full border border-cyan/20 animate-ping" />
          </div>
          {technologies.map((technology, index) => {
            const isSelected = technology.id === selectedId
            const color = stageMeta[technology.stage]?.color || '#4BB8FA'
            const position = NODE_POSITIONS[index]
            return (
              <button key={technology.id} type="button" onClick={() => setSelectedId(technology.id)} className="group absolute -translate-x-1/2 -translate-y-1/2 text-left" style={{ left: position.left, top: position.top }} aria-pressed={isSelected}>
                <span className={`relative flex h-9 w-9 items-center justify-center rounded-xl border bg-void/90 transition-all duration-300 group-hover:scale-110 ${isSelected ? 'scale-110 shadow-[0_0_24px_rgba(75,184,250,0.5)]' : ''}`} style={{ borderColor: `${color}${isSelected ? 'cc' : '66'}` }}>
                  <span className="h-2.5 w-2.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
                  {isSelected && <span className="absolute inset-[-5px] rounded-2xl border animate-pulse" style={{ borderColor: `${color}66` }} />}
                </span>
                <span className={`absolute left-1/2 top-11 w-24 -translate-x-1/2 text-center font-mono text-[8px] leading-tight transition-colors ${isSelected ? 'text-mist' : 'text-mist/45 group-hover:text-mist/80'}`}>{technology.name}</span>
              </button>
            )
          })}
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-x-3 gap-y-1">
            {Object.entries(stageMeta).map(([stage, meta]) => <span key={stage} className="flex items-center gap-1.5 font-mono text-[9px] text-mist/45"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: meta.color }} />{stage}</span>)}
          </div>
        </div>

      {/* Retained only as a non-rendering fallback for the original interaction model. */}
      <div className="hidden">
        <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Interactive 2030 technology radar">
          {/* Concentric rings */}
          {RINGS.map((ring) => (
            <circle
              key={ring.stage}
              cx={CENTER}
              cy={CENTER}
              r={ring.r * MAX_RADIUS}
              fill="none"
              stroke="rgba(75,184,250,0.16)"
              strokeWidth="1"
            />
          ))}
          {/* Radial spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const outer = polarToCartesian(angle, 1)
            return (
              <line
                key={angle}
                x1={CENTER}
                y1={CENTER}
                x2={outer.x}
                y2={outer.y}
                stroke="rgba(75,184,250,0.08)"
                strokeWidth="1"
              />
            )
          })}

          {/* Sweep animation */}
          <g style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}>
            <path
              d={`M ${CENTER} ${CENTER} L ${CENTER} ${CENTER - MAX_RADIUS} A ${MAX_RADIUS} ${MAX_RADIUS} 0 0 1 ${
                polarToCartesian(35, 1).x
              } ${polarToCartesian(35, 1).y} Z`}
              fill="url(#sweepGradient)"
              opacity="0.5"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${CENTER} ${CENTER}`}
                to={`360 ${CENTER} ${CENTER}`}
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          <defs>
            <radialGradient id="sweepGradient">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Technology nodes */}
          {technologies.map((tech) => {
            const pos = polarToCartesian(tech.angle, tech.radius)
            const isSelected = tech.id === selectedId
            const color = stageMeta[tech.stage]?.color || '#4BB8FA'
            return (
              <g key={tech.id}>
                {isSelected && (
                  <circle cx={pos.x} cy={pos.y} r="14" fill={color} opacity="0.25">
                    <animate attributeName="r" values="10;16;10" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isSelected ? 7 : 5.5}
                  fill={isSelected ? color : '#0B1F3A'}
                  stroke={color}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => setSelectedId(tech.id)}
                >
                  <title>{tech.name}</title>
                </circle>
                <text
                  x={pos.x}
                  y={pos.y - 12}
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                  fill={isSelected ? '#E2E8F0' : 'rgba(226,232,240,0.45)'}
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                >
                  {tech.name.length > 14 ? `${tech.name.slice(0, 13)}…` : tech.name}
                </text>
              </g>
            )
          })}

          <circle cx={CENTER} cy={CENTER} r="3" fill="#4BB8FA" />
        </svg>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {Object.entries(stageMeta).map(([stage, meta]) => (
            <div key={stage} className="flex items-center gap-2 text-xs text-mist/55">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: meta.color }} />
              {stage}
            </div>
          ))}
        </div>
      </div>

      </div>

      {/* Detail panel */}
      {selected && (
        <div key={selected.id} className="glass animate-fade-up rounded-2xl p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="rounded-full border px-3 py-1 font-mono text-[11px]"
              style={{
                color: stageMeta[selected.stage]?.color,
                borderColor: `${stageMeta[selected.stage]?.color}55`,
                backgroundColor: `${stageMeta[selected.stage]?.color}14`,
              }}
            >
              {selected.stage.toUpperCase()}
            </span>
            <span className="text-xs text-mist/40">{stageMeta[selected.stage]?.description}</span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-mist">{selected.name}</h3>
          <p className="mt-2 text-sm font-medium text-sky/80">{selected.summary}</p>
          <p className="mt-4 text-sm leading-relaxed text-mist/60 md:text-[0.95rem]">{selected.detail}</p>
          <p className="mt-5 border-t border-white/5 pt-4 font-mono text-[11px] text-mist/35">
            SOURCE · {selected.source}
          </p>
        </div>
      )}
    </div>
  )
}
