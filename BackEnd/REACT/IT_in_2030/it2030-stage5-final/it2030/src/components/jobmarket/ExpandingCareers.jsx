import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { expandingCareers } from '../../data/jobMarket.js'

/**
 * Section 2 — Expanding Careers.
 * A list of accordion cards. Clicking a career expands it in place to reveal
 * what they do, why the role is growing, key skills, human value, and future
 * direction — all sourced from data/jobMarket.js so nothing here is hardcoded
 * per-role markup.
 */
export default function ExpandingCareers() {
  const [openId, setOpenId] = useState(expandingCareers[0].id)

  return (
    <div className="mt-12 space-y-4">
      {expandingCareers.map((career) => {
        const isOpen = career.id === openId
        const Icon = career.icon
        return (
          <div
            key={career.id}
            className={`glass overflow-hidden rounded-2xl transition-all duration-300 ${
              isOpen ? 'border-cyan/40 shadow-glow-cyan' : 'hover:border-signal/30'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : career.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-7"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                  isOpen ? 'border-cyan/40 bg-cyan/15 text-cyan' : 'border-white/10 bg-white/5 text-mist/55'
                }`}
              >
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-base font-semibold text-mist md:text-lg">
                  {career.role}
                </span>
                <span className="mt-0.5 block truncate text-xs text-mist/50 md:text-sm">{career.tagline}</span>
              </span>
              <FiChevronDown
                size={18}
                className={`shrink-0 text-mist/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan' : ''}`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-6 border-t border-white/5 px-5 pb-7 pt-6 md:px-7 lg:grid-cols-2">
                  <div className="space-y-5">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.2em] text-sky/60">WHAT THEY DO</p>
                      <p className="mt-2 text-sm leading-relaxed text-mist/65">{career.whatTheyDo}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.2em] text-cyan/60">WHY THE ROLE MAY GROW</p>
                      <p className="mt-2 text-sm leading-relaxed text-mist/65">{career.whyGrow}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.2em] text-orchid/60">FUTURE DIRECTION</p>
                      <p className="mt-2 text-sm leading-relaxed text-mist/65">{career.futureDirection}</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.2em] text-mist/45">IMPORTANT SKILLS</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {career.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-mist/70"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="glass rounded-xl border-violet/20 p-4">
                      <p className="font-mono text-[11px] tracking-[0.2em] text-violet/70">HUMAN VALUE</p>
                      <p className="mt-2 text-sm leading-relaxed text-mist/65">{career.humanValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
