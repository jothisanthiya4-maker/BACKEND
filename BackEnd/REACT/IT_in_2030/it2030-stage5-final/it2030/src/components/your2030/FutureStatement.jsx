import { useEffect, useState } from 'react'
import { FiRotateCcw } from 'react-icons/fi'
import { defaultStatements } from '../../data/your2030.js'

export default function FutureStatement({ pathId }) {
  const suggested = defaultStatements[pathId] || defaultStatements.default
  const [statement, setStatement] = useState(suggested)
  const [touched, setTouched] = useState(false)

  // Follow the suggested statement as the path changes, unless the user
  // has already started editing their own version.
  useEffect(() => {
    if (!touched) setStatement(suggested)
  }, [suggested, touched])

  function handleChange(e) {
    setTouched(true)
    setStatement(e.target.value)
  }

  function handleReset() {
    setTouched(false)
    setStatement(suggested)
  }

  return (
    <div className="glass mt-10 rounded-2xl p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.2em] text-mist/40">MY FUTURE STATEMENT</p>
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-mist/45 transition-colors hover:text-cyan"
        >
          <FiRotateCcw size={12} />
          Reset to suggested
        </button>
      </div>
      <textarea
        value={statement}
        onChange={handleChange}
        rows={4}
        maxLength={400}
        className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-void/50 p-4 font-display text-lg leading-relaxed text-mist placeholder:text-mist/30 focus:border-cyan/40 focus:outline-none md:text-xl"
        placeholder="Write your own future statement..."
      />
      <p className="mt-2 text-right font-mono text-[10px] text-mist/30">{statement.length}/400</p>
    </div>
  )
}
