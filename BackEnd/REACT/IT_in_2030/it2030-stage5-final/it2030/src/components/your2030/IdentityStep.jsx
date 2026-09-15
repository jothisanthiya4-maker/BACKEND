import { roleOptions } from '../../data/your2030.js'

export default function IdentityStep({ roleId, onSelect }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {roleOptions.map((role) => {
        const isActive = roleId === role.id
        const Icon = role.icon
        return (
          <button
            key={role.id}
            type="button"
            onClick={() => onSelect(role.id)}
            aria-pressed={isActive}
            className={`group flex flex-col items-center gap-3 rounded-2xl border px-4 py-6 text-center transition-all duration-300 ${
              isActive
                ? 'border-cyan/50 bg-cyan/10 shadow-glow-cyan'
                : 'border-white/10 bg-void/40 hover:-translate-y-0.5 hover:border-signal/30'
            }`}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
                isActive ? 'border-cyan/40 bg-cyan/15 text-cyan' : 'border-white/10 bg-white/5 text-mist/50 group-hover:text-sky'
              }`}
            >
              <Icon size={20} />
            </span>
            <span className={`text-sm font-medium ${isActive ? 'text-mist' : 'text-mist/65'}`}>{role.label}</span>
          </button>
        )
      })}
    </div>
  )
}
