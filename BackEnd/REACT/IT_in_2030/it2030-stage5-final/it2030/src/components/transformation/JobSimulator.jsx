import { useState } from 'react'
import {
  FiLayout,
  FiServer,
  FiPenTool,
  FiCheckSquare,
  FiBarChart2,
  FiShield,
  FiCloud,
  FiHeadphones,
} from 'react-icons/fi'
import { careers, shiftMeta } from '../../data/careers.js'

const ROLE_ICONS = {
  frontend: FiLayout,
  backend: FiServer,
  uiux: FiPenTool,
  qa: FiCheckSquare,
  data: FiBarChart2,
  security: FiShield,
  cloud: FiCloud,
  support: FiHeadphones,
}

const PANELS = [
  {
    key: 'today',
    title: 'Today',
    caption: 'What the role mostly involves now',
    color: '#4BB8FA',
  },
  {
    key: 'future',
    title: '2030',
    caption: 'How responsibilities are expected to evolve',
    color: '#22D3EE',
  },
  {
    key: 'newSkills',
    title: 'New skills',
    caption: 'Worth building deliberately',
    color: '#7C3AED',
  },
  {
    key: 'humanEdge',
    title: 'Human advantage',
    caption: 'Hardest to automate, easiest to underrate',
    color: '#A855F7',
  },
]

/**
 * Section 8 — Job Transformation Simulator.
 * Role selection drives every panel from src/data/careers.js, so all eight
 * roles render real content rather than one hardcoded example.
 */
export default function JobSimulator() {
  const [roleId, setRoleId] = useState('frontend')
  const role = careers.find((c) => c.id === roleId)
  const meta = shiftMeta[role.shift]

  return (
    <div className="mt-14">
      {/* Role selector */}
      <div>
        <p className="font-mono text-[11px] tracking-[0.2em] text-mist/40">SELECT A ROLE</p>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {careers.map((c) => {
            const Icon = ROLE_ICONS[c.id]
            const isActive = c.id === roleId
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setRoleId(c.id)}
                aria-pressed={isActive}
                className={`glass flex items-center gap-2.5 rounded-xl px-3 py-3 text-left transition-all duration-300 ${
                  isActive ? 'border-cyan/50 shadow-glow-cyan' : 'hover:-translate-y-0.5 hover:border-signal/30'
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                    isActive
                      ? 'border-cyan/40 bg-cyan/15 text-cyan'
                      : 'border-white/10 bg-white/5 text-mist/50'
                  }`}
                >
                  <Icon size={15} />
                </span>
                <span
                  className={`min-w-0 text-xs font-medium leading-snug sm:text-[13px] ${
                    isActive ? 'text-mist' : 'text-mist/60'
                  }`}
                >
                  {c.role}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Result */}
      <div key={role.id} className="mt-10 animate-fade-up">
        {/* Role header */}
        <div className="glass relative overflow-hidden rounded-2xl p-6 md:p-8">
          <div
            className="absolute inset-0 opacity-50"
            style={{ background: `radial-gradient(circle at 15% 0%, ${meta.color}22, transparent 65%)` }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <h3 className="font-display text-2xl font-bold text-mist md:text-3xl">{role.role}</h3>
              <p className="mt-2 text-sm text-mist/65 md:text-base">{role.tagline}</p>
            </div>
            <span
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border px-3.5 py-1.5 font-mono text-[11px]"
              style={{
                color: meta.color,
                borderColor: `${meta.color}55`,
                backgroundColor: `${meta.color}14`,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: meta.color }} />
              {role.shift.toUpperCase()}
            </span>
          </div>
          <p className="relative mt-5 max-w-3xl border-t border-white/5 pt-5 text-sm leading-relaxed text-mist/60">
            {role.shiftNote}
          </p>
        </div>

        {/* Four-stage flow */}
        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {PANELS.map((panel, i) => (
            <div key={panel.key} className="relative flex">
              <div className="glass flex w-full flex-col rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: panel.color, boxShadow: `0 0 10px ${panel.color}` }}
                  />
                  <h4 className="font-display text-base font-semibold text-mist">{panel.title}</h4>
                </div>
                <p className="mt-1.5 text-xs text-mist/45">{panel.caption}</p>

                <ul className="mt-4 flex-1 space-y-3">
                  {role[panel.key].map((item, itemIndex) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-mist/70"
                      style={{ animationDelay: `${i * 80 + itemIndex * 40}ms` }}
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: `${panel.color}cc` }}
                      />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Flow arrow between panels */}
              {i < PANELS.length - 1 && (
                <>
                  <span
                    className="absolute -bottom-4 left-1/2 flex h-4 -translate-x-1/2 items-center text-sky/35 lg:hidden"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                  <span
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-sky/35 lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-mist/40">
        Every role above is shown as evolving, not ending. The pattern across all eight is the same:
        routine, repeatable tasks move toward automation, and the human share of the job shifts toward
        judgment, context, and responsibility for what the automation produced.
      </p>
    </div>
  )
}
