import { humanPrinciples } from '../../data/humanBackup.js'

/**
 * Section 8 — The Human Backup Principle.
 * Six words, staggered fade/float animation, closing the page on a
 * capability-focused note rather than a specific prediction.
 */
export default function PrinciplesGrid() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {humanPrinciples.map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={item.word}
            className="glass group animate-fade-up rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-violet"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet/25 bg-violet/10 text-orchid transition-transform duration-500 group-hover:scale-110 group-hover:animate-float">
              <Icon size={24} />
            </span>
            <h4 className="mt-5 font-display text-lg font-bold tracking-[0.15em] text-mist">{item.word}</h4>
            <p className="mt-2.5 text-sm leading-relaxed text-mist/60">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
