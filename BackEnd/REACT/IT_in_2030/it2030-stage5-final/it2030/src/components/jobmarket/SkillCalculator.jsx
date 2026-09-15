import { useMemo, useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { calculatorSkills, calculatorCategoryMeta, roleMatchRules } from '../../data/jobMarket.js'

const CATEGORY_IDS = ['technical', 'ai', 'human']

/**
 * Section 7 — Future Skill Calculator.
 * Every number shown here is derived live from React state (`selected`) —
 * nothing is a hardcoded result. Toggling a skill recalculates the
 * readiness score, category coverage, strengths, gaps, recommended skills,
 * and possible future roles on every render.
 */
export default function SkillCalculator() {
  const [selected, setSelected] = useState(() => new Set())

  function toggleSkill(id) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const result = useMemo(() => {
    const totalWeight = calculatorSkills.reduce((sum, s) => sum + s.weight, 0)
    const selectedWeight = calculatorSkills
      .filter((s) => selected.has(s.id))
      .reduce((sum, s) => sum + s.weight, 0)
    const score = totalWeight > 0 ? Math.round((selectedWeight / totalWeight) * 100) : 0

    const coverage = {}
    CATEGORY_IDS.forEach((cat) => {
      const skillsInCat = calculatorSkills.filter((s) => s.category === cat)
      const catTotal = skillsInCat.reduce((sum, s) => sum + s.weight, 0)
      const catSelected = skillsInCat
        .filter((s) => selected.has(s.id))
        .reduce((sum, s) => sum + s.weight, 0)
      coverage[cat] = catTotal > 0 ? catSelected / catTotal : 0
    })

    const strengths = CATEGORY_IDS.filter((cat) => coverage[cat] >= 0.6)
    const gaps = CATEGORY_IDS.filter((cat) => coverage[cat] < 0.34)

    const recommended = gaps
      .flatMap((cat) =>
        calculatorSkills
          .filter((s) => s.category === cat && !selected.has(s.id))
          .sort((a, b) => b.weight - a.weight)
          .slice(0, 2)
      )
      .slice(0, 5)

    const roles = roleMatchRules
      .map((rule) => ({
        role: rule.role,
        matched: rule.skillIds.filter((id) => selected.has(id)).length,
        min: rule.min,
      }))
      .filter((r) => r.matched >= r.min)
      .sort((a, b) => b.matched - a.matched)
      .slice(0, 4)
      .map((r) => r.role)

    return { score, coverage, strengths, gaps, recommended, roles }
  }, [selected])

  const hasSelection = selected.size > 0

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-10">
      {/* Skill selector */}
      <div>
        <p className="font-mono text-[11px] tracking-[0.2em] text-mist/40">SELECT YOUR CURRENT SKILLS</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {calculatorSkills.map((skill) => {
            const isActive = selected.has(skill.id)
            const color = calculatorCategoryMeta[skill.category]?.color
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => toggleSkill(skill.id)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-200 md:text-sm ${
                  isActive ? 'text-mist' : 'border-white/10 text-mist/55 hover:border-signal/30 hover:text-mist/80'
                }`}
                style={isActive ? { borderColor: `${color}66`, backgroundColor: `${color}1a` } : undefined}
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                    isActive ? '' : 'border-white/20'
                  }`}
                  style={isActive ? { borderColor: color, backgroundColor: color } : undefined}
                >
                  {isActive && <FiCheck size={11} className="text-void" />}
                </span>
                {skill.label}
              </button>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {CATEGORY_IDS.map((cat) => (
            <div key={cat} className="flex items-center gap-2 text-xs text-mist/50">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: calculatorCategoryMeta[cat].color }} />
              {calculatorCategoryMeta[cat].label}
            </div>
          ))}
        </div>
      </div>

      {/* Live results */}
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="flex flex-col items-center gap-5 border-b border-white/5 pb-7 sm:flex-row sm:items-center">
          <div
            className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(#22D3EE ${result.score * 3.6}deg, rgba(255,255,255,0.06) 0deg)`,
            }}
          >
            <div className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full bg-void">
              <span className="font-display text-2xl font-bold text-mist">{result.score}</span>
              <span className="font-mono text-[9px] tracking-wide text-mist/40">/ 100</span>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-cyan/70">2030 READINESS SCORE</p>
            <p className="mt-2 text-sm leading-relaxed text-mist/60">
              {hasSelection
                ? 'Illustrative, based on the skills you selected against the categories below — not a certified assessment.'
                : 'Select a few skills on the left to generate your illustrative readiness score.'}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {CATEGORY_IDS.map((cat) => {
            const pct = Math.round(result.coverage[cat] * 100)
            const color = calculatorCategoryMeta[cat].color
            return (
              <div key={cat}>
                <div className="flex items-center justify-between text-xs text-mist/55">
                  <span>{calculatorCategoryMeta[cat].label} coverage</span>
                  <span className="font-mono">{pct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full transition-[width] duration-700 ease-out"
                    style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}55, ${color})` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <ResultBlock title="Strengths" color="#22D3EE" empty="Select more skills to reveal strengths.">
            {result.strengths.map((cat) => (
              <li key={cat}>{calculatorCategoryMeta[cat].label}</li>
            ))}
          </ResultBlock>
          <ResultBlock title="Skill Gaps" color="#A855F7" empty="No strong gaps detected yet.">
            {result.gaps.map((cat) => (
              <li key={cat}>{calculatorCategoryMeta[cat].label}</li>
            ))}
          </ResultBlock>
          <ResultBlock title="Recommended Skills" color="#4BB8FA" empty="Select a few skills to get recommendations.">
            {result.recommended.map((skill) => (
              <li key={skill.id}>{skill.label}</li>
            ))}
          </ResultBlock>
          <ResultBlock title="Possible Future Roles" color="#7C3AED" empty="Select more skills to surface role matches.">
            {result.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ResultBlock>
        </div>
      </div>
    </div>
  )
}

function ResultBlock({ title, color, children, empty }) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children)
  return (
    <div className="rounded-xl border border-white/5 bg-void/40 p-4">
      <p className="font-mono text-[10px] tracking-[0.2em]" style={{ color }}>
        {title.toUpperCase()}
      </p>
      {hasChildren ? (
        <ul className="mt-2.5 space-y-1.5 text-sm text-mist/70">{children}</ul>
      ) : (
        <p className="mt-2.5 text-xs leading-relaxed text-mist/40">{empty}</p>
      )}
    </div>
  )
}
