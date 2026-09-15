import { useState } from 'react'
import { evolvingCareers } from '../../data/jobMarket.js'

const STAGES = [
  { key: 'current', title: 'Current Role', caption: 'What the job mostly involves today', color: '#4BB8FA' },
  { key: 'automation', title: 'Automation / AI Assistance', caption: 'Where AI is landing first', color: '#22D3EE' },
  { key: 'evolving', title: 'Evolving Responsibilities', caption: 'What the role grows into', color: '#7C3AED' },
  { key: 'newSkills', title: 'New Skills', caption: 'Worth building deliberately', color: '#A855F7' },
]

/**
 * Section 3 — Evolving Careers.
 * Role selector followed by a vertical stepped flow: current role down
 * through automation, evolving responsibilities, and new skills. Distinct
 * from Section 2's accordion pattern and from Page 2's horizontal
 * JobSimulator flow, per the design brief's "don't make every section
 * identical" instruction.
 */
export default function EvolvingCareerFlow() {
  const [roleId, setRoleId] = useState(evolvingCareers[0].id)
  const role = evolvingCareers.find((r) => r.id === roleId)

  return (
    <div className="mt-12">
      <p className="font-mono text-[11px] tracking-[0.2em] text-mist/40">SELECT A ROLE</p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {evolvingCareers.map((r) => {
          const Icon = r.icon
          const isActive = r.id === roleId
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setRoleId(r.id)}
              aria-pressed={isActive}
              className={`glass flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-300 md:text-sm ${
                isActive ? 'border-cyan/50 text-mist shadow-glow-cyan' : 'text-mist/55 hover:border-signal/30 hover:text-mist/80'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-cyan' : 'text-mist/40'} />
              {r.role}
            </button>
          )
        })}
      </div>

      <div key={role.id} className="relative mt-10 animate-fade-up space-y-5">
        {STAGES.map((stage, i) => (
          <div key={stage.key} className="relative flex gap-5">
            <div className="flex flex-col items-center">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs"
                style={{ borderColor: `${stage.color}88`, backgroundColor: `${stage.color}1a`, color: stage.color }}
              >
                {i + 1}
              </span>
              {i < STAGES.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-gradient-to-b from-white/15 to-transparent" style={{ minHeight: '2rem' }} />
              )}
            </div>
            <div className="glass mb-1 flex-1 rounded-2xl p-5 md:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h4 className="font-display text-base font-semibold text-mist md:text-lg">{stage.title}</h4>
                <span className="font-mono text-[10px] tracking-wide text-mist/40">{stage.caption.toUpperCase()}</span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {role[stage.key].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-mist/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: `${stage.color}cc` }} />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
