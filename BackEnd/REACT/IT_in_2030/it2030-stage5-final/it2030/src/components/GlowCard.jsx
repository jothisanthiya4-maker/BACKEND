const TONE_STYLES = {
  signal: {
    iconWrap: 'bg-signal/10 text-sky border-signal/25',
    hoverShadow: 'hover:shadow-glow hover:border-signal/40',
  },
  human: {
    iconWrap: 'bg-violet/10 text-orchid border-violet/25',
    hoverShadow: 'hover:shadow-glow-violet hover:border-violet/40',
  },
  cyan: {
    iconWrap: 'bg-cyan/10 text-cyan border-cyan/25',
    hoverShadow: 'hover:shadow-glow-cyan hover:border-cyan/40',
  },
}

export default function GlowCard({ icon: Icon, title, description, tone = 'signal', footer }) {
  const styles = TONE_STYLES[tone] || TONE_STYLES.signal

  return (
    <div
      className={`group glass relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${styles.hoverShadow}`}
    >
      {Icon && (
        <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${styles.iconWrap}`}>
          <Icon size={20} />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-mist">{title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mist/60">{description}</p>
      {footer && <div className="mt-4 border-t border-white/5 pt-4">{footer}</div>}
    </div>
  )
}
