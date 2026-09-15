import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { skillTransferPaths } from '../../data/humanBackup.js'

/**
 * Section 2 — Skill Transfer.
 * Each card shows a "skill combo → career" pathway. Clicking a card expands
 * a short explanation of why the transfer works, in place.
 */
export default function SkillTransferPathways() {
  const [openId, setOpenId] = useState(skillTransferPaths[0].id)

  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {skillTransferPaths.map((path) => {
        const isOpen = path.id === openId
        const Icon = path.icon
        return (
          <button
            key={path.id}
            type="button"
            onClick={() => setOpenId(isOpen ? null : path.id)}
            aria-expanded={isOpen}
            className={`group glass w-full rounded-2xl p-6 text-left transition-all duration-300 ${
              isOpen ? 'border-orchid/40 shadow-glow-violet' : 'hover:border-violet/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                  isOpen ? 'border-orchid/40 bg-violet/15 text-orchid' : 'border-white/10 bg-white/5 text-mist/55'
                }`}
              >
                <Icon size={19} />
              </span>
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                {path.fromSkills.map((skill, i) => (
                  <span key={skill} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-mist/75">
                      {skill}
                    </span>
                    {i < path.fromSkills.length - 1 && <span className="text-mist/30">+</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <FiArrowRight
                className={`shrink-0 transition-colors ${isOpen ? 'text-orchid' : 'text-mist/30'}`}
                size={16}
              />
              <span className="font-display text-base font-semibold text-mist md:text-lg">{path.toCareer}</span>
            </div>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-white/5 pt-4 text-sm leading-relaxed text-mist/60">
                  {path.description}
                </p>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
