import { useState } from 'react'
import { FiSmartphone, FiCpu, FiCloud, FiActivity, FiCheckCircle } from 'react-icons/fi'
import { edgeLayers } from '../../data/transformation.js'

const ICONS = {
  device: FiSmartphone,
  edge: FiCpu,
  cloud: FiCloud,
  ai: FiActivity,
  decision: FiCheckCircle,
}

/**
 * Section 4 visualisation.
 * A vertical architecture stack. Each layer is selectable; the panel beside it
 * (below it on mobile) explains what happens there and on what timescale.
 */
export default function EdgeCloudStack() {
  const [active, setActive] = useState('edge')
  const current = edgeLayers.find((l) => l.id === active)
  const activeIndex = edgeLayers.findIndex((l) => l.id === active)

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
      {/* Stack */}
      <div className="relative">
        {edgeLayers.map((layer, i) => {
          const Icon = ICONS[layer.id]
          const isActive = layer.id === active
          const isHuman = layer.id === 'decision'
          const accent = isHuman ? '#A855F7' : '#4BB8FA'

          return (
            <div key={layer.id}>
              <button
                type="button"
                onClick={() => setActive(layer.id)}
                aria-pressed={isActive}
                className={`glass group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 md:p-5 ${
                  isActive ? 'translate-x-0 md:translate-x-2' : 'hover:md:translate-x-1'
                }`}
                style={
                  isActive
                    ? { borderColor: `${accent}66`, boxShadow: `0 0 36px -12px ${accent}` }
                    : undefined
                }
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                  style={{ borderColor: `${accent}40`, backgroundColor: `${accent}14`, color: accent }}
                >
                  <Icon size={19} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-base font-semibold text-mist">{layer.layer}</span>
                    <span className="font-mono text-[10px] tracking-wide text-mist/35">{layer.latency}</span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-mist/55">{layer.summary}</span>
                </span>
              </button>

              {i < edgeLayers.length - 1 && (
                <div className="relative mx-auto h-7 w-px overflow-hidden bg-white/10" aria-hidden="true">
                  <span
                    className="absolute inset-x-0 top-0 h-3.5 animate-flow-down rounded-full bg-gradient-to-b from-transparent to-cyan"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Detail */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div key={current.id} className="glass animate-fade-up rounded-2xl p-6 md:p-8">
          <span className="font-mono text-[11px] tracking-[0.2em] text-cyan/70">
            LAYER {activeIndex + 1} OF {edgeLayers.length}
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-mist">{current.layer}</h3>
          <p className="mt-3 text-sm leading-relaxed text-mist/65 md:text-[0.95rem]">{current.detail}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {current.examples.map((example) => (
              <span
                key={example}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-mist/60"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
