import { FiArrowRight } from 'react-icons/fi'
import { itAariBridges } from '../../data/humanBackup.js'

/**
 * Section 6 — IT Skills + Aari Business.
 * Each card bridges one IT-side skill (cyan) to one Aari-side application
 * (amber), visually literalising the page's core claim that technology
 * skills carry over even when the career itself changes.
 */
export default function SkillBridgeGrid() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {itAariBridges.map((bridge) => {
        const Icon = bridge.icon
        return (
          <div
            key={bridge.itSkill}
            className="glass flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10 text-cyan">
                <Icon size={17} />
              </span>
              <span className="text-sm font-semibold leading-tight text-mist">{bridge.itSkill}</span>
            </div>

            <div className="my-3 flex items-center gap-2 pl-1">
              <FiArrowRight className="text-amber-400/70" size={14} />
              <span className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-amber-400/40" />
            </div>

            <span className="inline-flex w-fit items-center rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
              {bridge.application}
            </span>

            <p className="mt-3 flex-1 text-xs leading-relaxed text-mist/60 md:text-sm">{bridge.description}</p>
          </div>
        )
      })}
    </div>
  )
}
