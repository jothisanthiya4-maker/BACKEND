import { FiCheck } from 'react-icons/fi'
import { skillOptions, skillCategoryMeta } from '../../data/your2030.js'

const CATEGORY_ORDER = ['technical', 'ai', 'human']

export default function SkillPicker({ skillIds, onToggle }) {
  return (
    <div className="mt-10">
      {CATEGORY_ORDER.map((cat) => (
        <div key={cat} className="mb-6 last:mb-0">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: skillCategoryMeta[cat].color }} />
            <p className="font-mono text-[11px] tracking-[0.2em] text-mist/45">
              {skillCategoryMeta[cat].label.toUpperCase()}
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {skillOptions
              .filter((s) => s.category === cat)
              .map((skill) => {
                const isActive = skillIds.has(skill.id)
                const color = skillCategoryMeta[cat].color
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => onToggle(skill.id)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-200 md:text-sm ${
                      isActive ? 'text-mist' : 'border-white/10 text-mist/55 hover:border-signal/30 hover:text-mist/80'
                    }`}
                    style={isActive ? { borderColor: `${color}66`, backgroundColor: `${color}1a` } : undefined}
                  >
                    <span
                      className="flex h-4 w-4 items-center justify-center rounded-full border transition-colors"
                      style={isActive ? { borderColor: color, backgroundColor: color } : { borderColor: 'rgba(255,255,255,0.2)' }}
                    >
                      {isActive && <FiCheck size={11} className="text-void" />}
                    </span>
                    {skill.label}
                  </button>
                )
              })}
          </div>
        </div>
      ))}
      <p className="mt-2 font-mono text-[11px] text-mist/35">{skillIds.size} skill{skillIds.size === 1 ? '' : 's'} selected</p>
    </div>
  )
}
