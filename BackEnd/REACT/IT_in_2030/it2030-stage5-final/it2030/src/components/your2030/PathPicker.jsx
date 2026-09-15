import { pathOptions } from '../../data/your2030.js'

export default function PathPicker({ pathId, onSelect }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pathOptions.map((path) => {
        const isActive = pathId === path.id
        const Icon = path.icon
        return (
          <button
            key={path.id}
            type="button"
            onClick={() => onSelect(path.id)}
            aria-pressed={isActive}
            className={`group flex h-full flex-col rounded-2xl border p-6 text-left transition-all duration-300 ${
              isActive
                ? 'border-orchid/50 bg-orchid/10 shadow-glow-violet'
                : 'glass hover:-translate-y-1 hover:border-violet/30'
            }`}
          >
            <span
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${
                isActive ? 'border-orchid/40 bg-orchid/15 text-orchid' : 'border-violet/25 bg-violet/10 text-orchid/80'
              }`}
            >
              <Icon size={20} />
            </span>
            <h3 className="font-display text-lg font-semibold text-mist">{path.label}</h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mist/60">{path.description}</p>
            {isActive && (
              <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-orchid/30 bg-orchid/15 px-3 py-1 font-mono text-[10px] tracking-wide text-orchid">
                SELECTED
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
