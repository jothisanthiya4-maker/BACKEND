import { aariOrderJourney } from '../../data/humanBackup.js'

/**
 * Section 4 — the order process, from first message to repeat customer.
 * A simple connected-step flow, wraps to a vertical list on small screens.
 */
export default function AariOrderJourney() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {aariOrderJourney.map((step, i) => {
        const Icon = step.icon
        return (
          <div key={step.title} className="glass relative rounded-2xl border-amber-500/10 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10 font-mono text-xs text-amber-300">
                {i + 1}
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-mist/60">
                <Icon size={16} />
              </span>
            </div>
            <h4 className="mt-3.5 font-display text-sm font-semibold text-mist md:text-base">{step.title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-mist/55 md:text-sm">{step.description}</p>
          </div>
        )
      })}
    </div>
  )
}
