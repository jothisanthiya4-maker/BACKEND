import { useState } from 'react'
import { skillStackLayers } from '../../data/jobMarket.js'

/**
 * Section 6 — The 2030 Skill Stack.
 * Four layers rendered as a literal stack, foundation at the bottom. Clicking
 * a layer expands it to show its skills. Only one layer is expanded at a
 * time so the visualization reads as a stack, not a plain accordion list.
 */
export default function SkillStack() {
  const [openId, setOpenId] = useState('ai')
  // Render foundation at the bottom, human at the top — a real stack order.
  const stackOrder = [...skillStackLayers].reverse()

  return (
    <div className="mt-12">
      <div className="space-y-3">
        {stackOrder.map((layer) => {
          const isOpen = layer.id === openId
          return (
            <div
              key={layer.id}
              className="glass overflow-hidden rounded-2xl transition-all duration-300"
              style={{ borderColor: isOpen ? `${layer.color}66` : undefined, boxShadow: isOpen ? `0 0 40px -12px ${layer.color}88` : undefined }}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : layer.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-7"
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: layer.color, boxShadow: `0 0 12px ${layer.color}` }}
                />
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg font-bold text-mist md:text-xl">{layer.name}</span>
                  <span className="mt-0.5 block text-xs text-mist/50 md:text-sm">{layer.tagline}</span>
                </span>
                <span
                  className="shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] tracking-wide"
                  style={{ color: layer.color, borderColor: `${layer.color}55`, backgroundColor: `${layer.color}14` }}
                >
                  {layer.skills.length} SKILLS
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-4 border-t border-white/5 px-5 pb-6 pt-5 sm:grid-cols-2 md:px-7 lg:grid-cols-4">
                    {layer.skills.map((skill) => (
                      <div key={skill.name} className="rounded-xl border border-white/5 bg-void/40 p-4">
                        <p className="font-display text-sm font-semibold text-mist">{skill.name}</p>
                        <p className="mt-2 text-xs leading-relaxed text-mist/55">{skill.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-6 max-w-2xl text-xs leading-relaxed text-mist/40">
        The four layers build on each other rather than compete. A strong 2030 profile usually draws
        something from all four — foundation and technical skills stay the entry price, AI fluency is
        the newest addition, and the human layer is what determines who gets trusted with judgment
        calls.
      </p>
    </div>
  )
}
