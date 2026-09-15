import { useState } from 'react'
import { quantumComparison, quantumApplications, quantumMyths } from '../../data/transformation.js'
import useReveal from '../../hooks/useReveal.js'

/**
 * Section 6 visualisation.
 * A small interactive contrast between a classical bit and a qubit, then a
 * plain comparison table, real application areas, and an explicit myth-check —
 * because the most common error about quantum computing is overstating it.
 */
function BitQubitVisual() {
  const [measured, setMeasured] = useState(false)
  const [outcome, setOutcome] = useState('0')

  const measure = () => {
    if (measured) {
      setMeasured(false)
      return
    }
    setOutcome(Math.random() < 0.5 ? '0' : '1')
    setMeasured(true)
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {/* Classical bit */}
      <div className="glass rounded-2xl p-6">
        <p className="font-mono text-[11px] tracking-[0.2em] text-sky/60">CLASSICAL BIT</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          {['0', '1'].map((v) => (
            <span
              key={v}
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border font-display text-2xl font-bold transition-colors ${
                v === '0'
                  ? 'border-signal/50 bg-signal/15 text-sky'
                  : 'border-white/10 bg-white/5 text-mist/25'
              }`}
            >
              {v}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-mist/60">
          A bit is one of two states at all times. Everything a normal computer does is built from
          billions of these switches flipping in sequence.
        </p>
      </div>

      {/* Qubit */}
      <div className="glass rounded-2xl p-6">
        <p className="font-mono text-[11px] tracking-[0.2em] text-orchid/70">QUBIT</p>
        <div className="mt-6 flex items-center justify-center">
          <div className="relative flex h-16 w-full max-w-[220px] items-center justify-center">
            {measured ? (
              <span className="flex h-16 w-16 animate-fade-up items-center justify-center rounded-2xl border border-orchid/50 bg-violet/20 font-display text-2xl font-bold text-orchid">
                {outcome}
              </span>
            ) : (
              <span className="relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl border border-orchid/30 bg-violet/10">
                <span
                  className="absolute inset-0 animate-gradient-shift bg-[length:200%_100%]"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(168,85,247,0.28), rgba(34,211,238,0.28), rgba(168,85,247,0.28))',
                    backgroundSize: '200% 100%',
                  }}
                  aria-hidden="true"
                />
                <span className="relative font-display text-sm font-semibold text-mist/85">
                  0 and 1 together
                </span>
              </span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={measure}
          className="mt-5 w-full rounded-full border border-orchid/35 bg-violet/10 px-4 py-2.5 text-xs font-medium text-orchid transition-colors hover:bg-violet/20"
        >
          {measured ? 'Reset the qubit' : 'Measure the qubit'}
        </button>
        <p className="mt-4 text-sm leading-relaxed text-mist/60">
          {measured
            ? `Measuring forces a single answer — this time ${outcome}. The richer state it held before is gone, which is why quantum algorithms are designed to make the useful answer the likely one.`
            : 'Before measurement a qubit holds a combination of both states. Useful algorithms arrange interference so that wrong answers cancel out and the right one becomes probable.'}
        </p>
      </div>
    </div>
  )
}

export default function QuantumExplainer() {
  const tableRef = useReveal()
  const mythRef = useReveal()

  return (
    <div className="mt-14">
      <BitQubitVisual />

      {/* Comparison table */}
      <div ref={tableRef} className="reveal mt-10 overflow-hidden rounded-2xl border border-white/10">
        <div className="hidden grid-cols-[0.8fr_1.2fr_1.2fr] gap-px bg-white/5 md:grid">
          <div className="bg-abyss/80 px-5 py-3 font-mono text-[11px] tracking-[0.2em] text-mist/40">
            ASPECT
          </div>
          <div className="bg-abyss/80 px-5 py-3 font-mono text-[11px] tracking-[0.2em] text-sky/60">
            CLASSICAL
          </div>
          <div className="bg-abyss/80 px-5 py-3 font-mono text-[11px] tracking-[0.2em] text-orchid/70">
            QUANTUM
          </div>
        </div>
        <div className="grid gap-px bg-white/5">
          {quantumComparison.map((row) => (
            <div key={row.aspect} className="grid gap-px md:grid-cols-[0.8fr_1.2fr_1.2fr]">
              <div className="bg-deep/35 px-5 py-4 font-display text-sm font-semibold text-mist">
                {row.aspect}
              </div>
              <div className="bg-deep/25 px-5 py-4 text-sm leading-relaxed text-mist/65">
                <span className="mb-1 block font-mono text-[10px] tracking-wide text-sky/50 md:hidden">
                  CLASSICAL
                </span>
                {row.classical}
              </div>
              <div className="bg-deep/25 px-5 py-4 text-sm leading-relaxed text-mist/65">
                <span className="mb-1 block font-mono text-[10px] tracking-wide text-orchid/60 md:hidden">
                  QUANTUM
                </span>
                {row.quantum}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {quantumApplications.map((app) => (
          <div
            key={app.title}
            className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-orchid/30"
          >
            <h4 className="font-display text-base font-semibold text-mist">{app.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-mist/60">{app.body}</p>
          </div>
        ))}
      </div>

      {/* Myth check */}
      <div ref={mythRef} className="reveal mt-12">
        <h4 className="font-display text-lg font-semibold text-mist">What quantum computing is not</h4>
        <div className="mt-5 space-y-3">
          {quantumMyths.map((item) => (
            <div key={item.myth} className="glass rounded-2xl p-5 md:p-6">
              <p className="flex gap-3 text-sm font-medium text-mist/85">
                <span className="mt-0.5 shrink-0 font-mono text-xs text-orchid/70">MYTH</span>
                {item.myth}
              </p>
              <p className="mt-3 flex gap-3 text-sm leading-relaxed text-mist/60">
                <span className="mt-0.5 shrink-0 font-mono text-xs text-cyan/70">REALITY</span>
                {item.reality}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
