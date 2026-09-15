import { useState } from 'react'
import { FiAlertTriangle, FiRadio, FiLayers, FiZap, FiUser } from 'react-icons/fi'
import { securityPipeline } from '../../data/transformation.js'

const ICONS = {
  attack: FiAlertTriangle,
  detection: FiRadio,
  analysis: FiLayers,
  response: FiZap,
  human: FiUser,
}

function Connector({ toneColor }) {
  return (
    <>
      {/* Vertical connector — mobile */}
      <div className="relative mx-auto h-8 w-px overflow-hidden bg-white/10 lg:hidden" aria-hidden="true">
        <span
          className="absolute inset-x-0 top-0 h-4 animate-flow-down rounded-full"
          style={{ background: `linear-gradient(to bottom, transparent, ${toneColor})` }}
        />
      </div>
      {/* Horizontal connector — desktop */}
      <div className="relative hidden h-px flex-1 overflow-hidden bg-white/10 lg:block" aria-hidden="true">
        <span
          className="absolute inset-y-0 left-0 w-10 animate-flow-right rounded-full"
          style={{ background: `linear-gradient(to right, transparent, ${toneColor})` }}
        />
      </div>
    </>
  )
}

/**
 * Section 3 visualisation.
 * Five-stage defence pipeline with a pulse travelling along each connector.
 * The last stage is deliberately styled differently: it is the human one.
 */
export default function SecurityPipeline() {
  const [active, setActive] = useState('detection')
  const current = securityPipeline.find((s) => s.id === active)

  return (
    <div className="mt-14">
      <div className="flex flex-col lg:flex-row lg:items-center">
        {securityPipeline.map((stage, i) => {
          const Icon = ICONS[stage.id]
          const isHuman = stage.owner === 'human'
          const isActive = stage.id === active
          const accent = isHuman ? '#A855F7' : '#22D3EE'

          return (
            <div key={stage.id} className="contents">
              <button
                type="button"
                onClick={() => setActive(stage.id)}
                aria-pressed={isActive}
                className={`glass group relative w-full overflow-hidden rounded-2xl px-4 py-5 text-center transition-all duration-300 lg:w-auto lg:flex-1 ${
                  isActive ? '-translate-y-0.5' : 'hover:-translate-y-0.5'
                }`}
                style={
                  isActive
                    ? { borderColor: `${accent}66`, boxShadow: `0 0 34px -10px ${accent}` }
                    : undefined
                }
              >
                {isHuman && (
                  <span
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${accent}33, transparent 70%)` }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative flex flex-col items-center gap-2.5">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl border transition-colors"
                    style={{
                      borderColor: `${accent}40`,
                      backgroundColor: `${accent}14`,
                      color: accent,
                    }}
                  >
                    <Icon size={19} />
                  </span>
                  <span className="font-display text-sm font-semibold text-mist">{stage.stage}</span>
                  <span
                    className="font-mono text-[10px] tracking-wide"
                    style={{ color: isHuman ? '#A855F7' : 'rgba(226,232,240,0.4)' }}
                  >
                    {isHuman ? 'HUMAN' : 'AUTOMATED'}
                  </span>
                </span>
              </button>

              {i < securityPipeline.length - 1 && (
                <Connector toneColor={securityPipeline[i + 1].owner === 'human' ? '#A855F7' : '#22D3EE'} />
              )}
            </div>
          )
        })}
      </div>

      {/* Stage detail */}
      <div key={current.id} className="glass mt-8 animate-fade-up rounded-2xl p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full border px-3 py-1 font-mono text-[11px]"
                style={{
                  color: current.owner === 'human' ? '#A855F7' : '#22D3EE',
                  borderColor: current.owner === 'human' ? '#A855F755' : '#22D3EE55',
                  backgroundColor: current.owner === 'human' ? '#A855F714' : '#22D3EE14',
                }}
              >
                {current.stage.toUpperCase()}
              </span>
              <span className="text-xs text-mist/45">{current.actor}</span>
            </div>
            <p className="mt-4 font-display text-lg font-semibold leading-snug text-mist md:text-xl">
              {current.summary}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist/60 md:text-[0.95rem]">{current.detail}</p>
          </div>

          <div className="rounded-xl border border-white/5 bg-void/40 p-5">
            <p className="font-mono text-[11px] tracking-[0.2em] text-mist/40">AT THIS STAGE</p>
            <ul className="mt-4 space-y-2.5">
              {current.signals.map((signal) => (
                <li key={signal} className="flex items-center gap-2.5 text-sm text-mist/70">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: current.owner === 'human' ? '#A855F7' : '#22D3EE' }}
                  />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
