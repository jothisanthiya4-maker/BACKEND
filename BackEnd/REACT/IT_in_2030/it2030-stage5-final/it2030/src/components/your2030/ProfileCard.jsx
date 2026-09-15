import { roleOptions } from '../../data/your2030.js'

function ScoreBar({ label, value, color }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-mist/55">
        <span>{label}</span>
        <span className="font-mono">{value}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}55, ${color})` }}
        />
      </div>
    </div>
  )
}

export default function ProfileCard({ name, profile }) {
  const role = roleOptions.find((r) => r.id === profile.roleId)
  const roleLabel = role ? role.label : 'Not yet selected'
  const displayName = name.trim() || 'Your 2030 Profile'

  return (
    <div className="glass relative mt-10 overflow-hidden rounded-3xl p-6 md:p-10">
      <div className="absolute inset-0 bg-radial-glow opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan/15 blur-[90px] animate-float-slow"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-cyan/70">2030 PROFILE CARD</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-mist md:text-3xl">{displayName}</h3>
            <p className="mt-1 text-sm text-mist/55">Current role: {roleLabel}</p>
          </div>
          <div className="rounded-2xl border border-cyan/25 bg-cyan/10 px-5 py-3 text-right">
            <p className="font-mono text-[10px] tracking-[0.2em] text-cyan/70">FUTURE ROLE</p>
            <p className="mt-1 max-w-[220px] font-display text-base font-semibold text-mist md:text-lg">
              {profile.futureRole}
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <div className="space-y-5">
            <ScoreBar label="Skill Strength" value={profile.skillStrength} color="#4BB8FA" />
            <ScoreBar label="Adaptability Score" value={profile.adaptabilityScore} color="#22D3EE" />
            <ScoreBar label="AI Readiness" value={profile.aiReadiness} color="#7C3AED" />
            <ScoreBar label="Human Skills" value={profile.humanSkills} color="#A855F7" />
          </div>
          <div className="rounded-2xl border border-white/5 bg-void/40 p-5">
            <p className="font-mono text-[10px] tracking-[0.2em] text-mist/40">CAREER DIRECTION</p>
            <p className="mt-2 font-display text-lg font-semibold text-mist">{profile.careerDirection}</p>
            <p className="mt-4 text-sm leading-relaxed text-mist/60">
              {profile.hasSkills && profile.hasPath
                ? 'This profile updates live as you change your role, skills, or path above — it is a self-reflection snapshot, not a certified assessment.'
                : 'Select your skills and a future path above to complete your profile.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
