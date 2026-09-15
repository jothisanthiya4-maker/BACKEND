import { useEffect, useState } from 'react'
import { FiPlusCircle, FiTrash2, FiClock } from 'react-icons/fi'
import { planCategories, categoryIcons, seedPlans } from '../../data/your2030.js'
import { formatDate } from '../../utils/profileEngine.js'

const STORAGE_KEY = 'futurePlans'

function loadPlans() {
  if (typeof window === 'undefined') return seedPlans
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      // First-ever visit: seed the wall so it isn't empty, then persist it.
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedPlans))
      return seedPlans
    }
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return seedPlans
    return parsed.filter((p) => p && typeof p === 'object' && p.name && p.plan && p.category)
  } catch {
    // Malformed JSON — reset the key rather than crash the page.
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedPlans))
    } catch {
      /* storage unavailable */
    }
    return seedPlans
  }
}

function savePlans(plans) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plans))
  } catch {
    /* storage unavailable — the in-memory list still updates for this session */
  }
}

const EMPTY_FORM = { name: '', plan: '', category: '' }

export default function CommunityWall() {
  const [plans, setPlans] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setPlans(loadPlans())
  }, [])

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function validate() {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Enter your name.'
    if (!form.plan.trim()) nextErrors.plan = 'Share your plan.'
    if (!form.category) nextErrors.category = 'Pick a category.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const entry = {
      id: `plan-${Date.now()}`,
      name: form.name.trim(),
      plan: form.plan.trim(),
      category: form.category,
      createdAt: new Date().toISOString(),
    }

    const next = [entry, ...plans]
    setPlans(next)
    savePlans(next)
    setForm(EMPTY_FORM)
    setErrors({})
  }

  function handleDelete(id) {
    const next = plans.filter((p) => p.id !== id)
    setPlans(next)
    savePlans(next)
  }

  const sorted = [...plans].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="cw-name" className="block text-xs font-medium text-mist/60">Name</label>
            <input
              id="cw-name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`mt-2 w-full rounded-xl border bg-void/50 p-3.5 text-sm text-mist placeholder:text-mist/25 focus:outline-none ${
                errors.name ? 'border-rose-500/50' : 'border-white/10 focus:border-orchid/40'
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1.5 text-[11px] text-rose-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="cw-category" className="block text-xs font-medium text-mist/60">Category</label>
            <select
              id="cw-category"
              value={form.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className={`mt-2 w-full rounded-xl border bg-void/50 p-3.5 text-sm text-mist focus:outline-none ${
                errors.category ? 'border-rose-500/50' : 'border-white/10 focus:border-orchid/40'
              }`}
            >
              <option value="" disabled>
                Select a category
              </option>
              {planCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && <p className="mt-1.5 text-[11px] text-rose-400">{errors.category}</p>}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="cw-plan" className="block text-xs font-medium text-mist/60">Your Plan</label>
            <textarea
              id="cw-plan"
              rows={3}
              value={form.plan}
              onChange={(e) => handleChange('plan', e.target.value)}
              className={`mt-2 w-full resize-none rounded-xl border bg-void/50 p-3.5 text-sm text-mist placeholder:text-mist/25 focus:outline-none ${
                errors.plan ? 'border-rose-500/50' : 'border-white/10 focus:border-orchid/40'
              }`}
              placeholder="If IT is not there, what will you do?"
            />
            {errors.plan && <p className="mt-1.5 text-[11px] text-rose-400">{errors.plan}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-orchid px-7 py-3.5 font-display text-sm font-semibold text-void shadow-glow-violet transition-transform duration-300 hover:scale-[1.03]"
        >
          <FiPlusCircle size={16} />
          ADD MY FUTURE PLAN
        </button>
      </form>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((entry) => {
          const Icon = categoryIcons[entry.category] || FiPlusCircle
          return (
            <div
              key={entry.id}
              className="group glass relative flex flex-col rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orchid/30 hover:shadow-glow-violet"
            >
              <button
                type="button"
                onClick={() => handleDelete(entry.id)}
                aria-label={`Delete plan from ${entry.name}`}
                className="absolute right-4 top-4 text-mist/35 transition-colors hover:text-rose-400 md:text-mist/20 md:group-hover:text-mist/60"
              >
                <FiTrash2 size={15} />
              </button>

              <span className="flex w-fit items-center gap-1.5 rounded-full border border-violet/25 bg-violet/10 px-3 py-1 font-mono text-[10px] tracking-wide text-orchid">
                <Icon size={12} />
                {entry.category.toUpperCase()}
              </span>

              <p className="mt-4 font-display text-sm font-bold tracking-wide text-mist">{entry.name.toUpperCase()}</p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/65">&ldquo;{entry.plan}&rdquo;</p>

              <div className="mt-5 flex items-center gap-1.5 border-t border-white/5 pt-3 font-mono text-[10px] text-mist/35">
                <FiClock size={11} />
                {formatDate(entry.createdAt)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
