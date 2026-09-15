import useReveal from '../../hooks/useReveal.js'
import {
  alternativePlanIntro,
  alternativePlanCoverage,
  alternativePlanDisclaimer,
} from '../../data/humanBackup.js'

/**
 * Section 3 — My Alternative Plan.
 * The most personal section of the page. Visually it borrows warm
 * amber/rose accents (default Tailwind palette, not the futuristic theme
 * tokens) to signal a different, human-made identity — while staying
 * inside the same glass/rounded-card language as the rest of the site.
 */
export default function AlternativePlanFeature() {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal relative mt-10 overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#1a0f08]/60 via-abyss/60 to-deep/60 p-8 md:p-14"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: 'radial-gradient(circle at 15% 10%, rgba(245,158,11,0.14), transparent 55%), radial-gradient(circle at 85% 90%, rgba(251,113,133,0.12), transparent 55%)' }}
        aria-hidden="true"
      />

      <div className="relative">
        <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.25em] text-amber-300">
          {alternativePlanIntro.eyebrow}
        </span>

        <h3 className="mt-6 max-w-3xl font-display text-2xl font-bold leading-tight text-mist sm:text-3xl md:text-4xl">
          <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent">
            {alternativePlanIntro.headline}
          </span>
        </h3>

        <div className="mt-6 max-w-3xl space-y-4">
          {alternativePlanIntro.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-mist/70 md:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {alternativePlanCoverage.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-xl border border-amber-500/15 bg-void/40 px-3.5 py-3 backdrop-blur-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10 text-amber-300">
                  <Icon size={15} />
                </span>
                <span className="text-xs text-mist/70 md:text-sm">{item.label}</span>
              </div>
            )
          })}
        </div>

        <p className="mt-10 max-w-2xl border-t border-amber-500/15 pt-6 font-mono text-xs leading-relaxed text-mist/45">
          {alternativePlanDisclaimer}
        </p>
      </div>
    </div>
  )
}
