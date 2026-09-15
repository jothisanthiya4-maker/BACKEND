import { useEffect, useState } from 'react'
import { FiCheckCircle, FiRefreshCcw, FiSave } from 'react-icons/fi'

const STORAGE_KEY = 'myFuturePlan'

const EMPTY_PLAN = {
  name: '',
  currentRole: '',
  futureGoal: '',
  skillsToLearn: '',
  alternativePlan: '',
  personalMessage: '',
}

const FIELDS = [
  { id: 'name', label: 'Name', type: 'input', required: true },
  { id: 'currentRole', label: 'Current Role', type: 'input', required: true },
  { id: 'futureGoal', label: 'Future Goal', type: 'textarea', required: true },
  { id: 'skillsToLearn', label: 'Skills I Want to Learn', type: 'textarea', required: false },
  { id: 'alternativePlan', label: 'Alternative Plan', type: 'textarea', required: false },
  { id: 'personalMessage', label: 'Personal Message to Future Me', type: 'textarea', required: false },
]

function loadSavedPlan() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    return { ...EMPTY_PLAN, ...parsed }
  } catch {
    // Malformed JSON in storage — treat it as if nothing was saved.
    return null
  }
}

export default function MyPlanForm() {
  const [plan, setPlan] = useState(EMPTY_PLAN)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | saved
  const [hasSavedPlan, setHasSavedPlan] = useState(false)

  useEffect(() => {
    const saved = loadSavedPlan()
    if (saved) {
      setPlan(saved)
      setHasSavedPlan(true)
    }
  }, [])

  function handleChange(id, value) {
    setPlan((prev) => ({ ...prev, [id]: value }))
    setStatus('idle')
  }

  function validate() {
    const nextErrors = {}
    FIELDS.forEach((field) => {
      if (field.required && !plan[field.id].trim()) {
        nextErrors[field.id] = 'This field is required.'
      }
    })
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) {
      setStatus('idle')
      return
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan))
      setHasSavedPlan(true)
      setStatus('saved')
    } catch {
      setStatus('idle')
    }
  }

  function handleReset() {
    setPlan(EMPTY_PLAN)
    setErrors({})
    setStatus('idle')
    setHasSavedPlan(false)
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Storage unavailable — the in-memory reset above still applies.
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass mt-10 rounded-2xl p-6 md:p-8">
      {hasSavedPlan && (
        <div className="mb-6 flex items-center gap-2 rounded-xl border border-cyan/25 bg-cyan/10 px-4 py-2.5 text-xs text-cyan">
          <FiCheckCircle size={14} />
          Loaded from your last saved plan on this device.
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.id} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
            <label htmlFor={field.id} className="block text-xs font-medium text-mist/60">
              {field.label}
              {field.required && <span className="text-cyan"> *</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                rows={3}
                value={plan[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className={`mt-2 w-full resize-none rounded-xl border bg-void/50 p-3.5 text-sm text-mist placeholder:text-mist/25 focus:outline-none ${
                  errors[field.id] ? 'border-rose-500/50 focus:border-rose-500/70' : 'border-white/10 focus:border-cyan/40'
                }`}
              />
            ) : (
              <input
                id={field.id}
                type="text"
                value={plan[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className={`mt-2 w-full rounded-xl border bg-void/50 p-3.5 text-sm text-mist placeholder:text-mist/25 focus:outline-none ${
                  errors[field.id] ? 'border-rose-500/50 focus:border-rose-500/70' : 'border-white/10 focus:border-cyan/40'
                }`}
              />
            )}
            {errors[field.id] && <p className="mt-1.5 text-[11px] text-rose-400">{errors[field.id]}</p>}
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-cyan px-6 py-3 font-display text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03]"
        >
          <FiSave size={15} />
          Save My 2030 Plan
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-mist/60 transition-colors hover:border-white/25 hover:text-mist"
        >
          <FiRefreshCcw size={14} />
          Reset
        </button>
        {status === 'saved' && (
          <span className="flex items-center gap-1.5 font-mono text-xs text-cyan">
            <FiCheckCircle size={13} /> Saved to this device — it will still be here after a refresh.
          </span>
        )}
      </div>
    </form>
  )
}
