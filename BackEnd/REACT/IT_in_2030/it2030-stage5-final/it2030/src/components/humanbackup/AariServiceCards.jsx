import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { aariServices } from '../../data/humanBackup.js'

/**
 * Section 4 — Aari Business Model: service catalogue.
 * Same accordion mechanics as the job-market ExpandingCareers component,
 * re-skinned with warm amber accents for the Aari identity.
 */
export default function AariServiceCards() {
  const [openId, setOpenId] = useState(aariServices[0].id)

  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-2">
      {aariServices.map((service) => {
        const isOpen = service.id === openId
        const Icon = service.icon
        return (
          <div
            key={service.id}
            className={`glass overflow-hidden rounded-2xl border-amber-500/10 transition-all duration-300 ${
              isOpen ? 'border-amber-400/40 shadow-[0_0_40px_-8px_rgba(245,158,11,0.35)]' : 'hover:border-amber-400/25'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : service.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-6"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                  isOpen ? 'border-amber-400/40 bg-amber-400/15 text-amber-300' : 'border-white/10 bg-white/5 text-mist/55'
                }`}
              >
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-base font-semibold text-mist">{service.name}</span>
                <span className="mt-0.5 block truncate text-xs text-mist/50">{service.tagline}</span>
              </span>
              <FiChevronDown
                size={18}
                className={`shrink-0 text-mist/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-300' : ''}`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 border-t border-white/5 px-5 pb-6 pt-5 md:px-6">
                  <p className="text-sm leading-relaxed text-mist/65">{service.detail}</p>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-amber-300/70">WHAT I NEED FROM THE CUSTOMER</p>
                    <ul className="mt-2.5 space-y-2">
                      {service.needs.map((need) => (
                        <li key={need} className="flex gap-2.5 text-sm leading-relaxed text-mist/60">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                          {need}
                        </li>
                      ))}
                    </ul>
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
