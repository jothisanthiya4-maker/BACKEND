import { pathIT, pathAari, resilienceCenter } from '../../data/humanBackup.js'

function PathColumn({ path, accent }) {
  const isSignal = accent === 'signal'
  return (
    <div className="glass rounded-2xl p-6 md:p-7">
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.25em] ${
          isSignal ? 'border-signal/30 bg-signal/10 text-sky' : 'border-amber-400/30 bg-amber-400/10 text-amber-300'
        }`}
      >
        {path.label}
      </span>
      <h4 className="mt-3 font-display text-xl font-bold text-mist md:text-2xl">{path.title}</h4>

      <div className="mt-6 space-y-0">
        {path.steps.map((step, i) => (
          <div key={step} className="relative flex items-center gap-4 pb-7 last:pb-0">
            {i < path.steps.length - 1 && (
              <span
                className={`absolute left-[15px] top-8 h-full w-px ${isSignal ? 'bg-signal/25' : 'bg-amber-400/25'}`}
                aria-hidden="true"
              />
            )}
            <span
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[11px] ${
                isSignal ? 'border-sky/50 bg-void text-sky' : 'border-amber-400/60 bg-void text-amber-300'
              }`}
            >
              {i + 1}
            </span>
            <span className="font-display text-sm font-semibold text-mist/85 md:text-base">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Section 7 — My 2030 Resilience Plan.
 * Two vertical step-paths (IT career in signal/cyan, Aari business in
 * amber/rose) with a shared center badge tying both back to one person.
 */
export default function DualPathDiagram() {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
      <PathColumn path={pathIT} accent="signal" />

      <div className="flex justify-center lg:px-2">
        <div className="glass relative flex w-full max-w-[220px] flex-col items-center gap-1 rounded-2xl border-violet/25 px-6 py-8 text-center shadow-glow-violet lg:w-[220px]">
          <div className="absolute inset-0 rounded-2xl bg-radial-glow opacity-40" aria-hidden="true" />
          <span className="relative font-display text-sm font-bold leading-snug text-mist">
            {resilienceCenter.line1}
            <br />
            <span className="text-gradient-human">{resilienceCenter.line2}</span>
          </span>
        </div>
      </div>

      <PathColumn path={pathAari} accent="amber" />
    </div>
  )
}
