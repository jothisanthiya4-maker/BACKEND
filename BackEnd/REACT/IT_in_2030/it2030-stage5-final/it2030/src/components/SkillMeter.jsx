import { useEffect, useRef, useState } from 'react'

const LEVEL_STYLES = {
  Low: { color: '#4BB8FA', bar: 'from-signal to-sky' },
  Medium: { color: '#22D3EE', bar: 'from-sky to-cyan' },
  High: { color: '#A855F7', bar: 'from-cyan to-orchid' },
}

export default function SkillMeter({ label, level, value, description }) {
  const ref = useRef(null)
  const [filled, setFilled] = useState(false)
  const style = LEVEL_STYLES[level] || LEVEL_STYLES.Medium

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-mist">{label}</h3>
        <span
          className="rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide"
          style={{ color: style.color, borderColor: `${style.color}55`, backgroundColor: `${style.color}14` }}
        >
          {level.toUpperCase()}
        </span>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${style.bar} transition-[width] duration-[1400ms] ease-out`}
          style={{ width: filled ? `${value}%` : '0%' }}
        />
      </div>

      <p className="mt-3 font-mono text-xs text-mist/40">SIGNAL STRENGTH · {filled ? value : 0}/100 (illustrative)</p>
      <p className="mt-3 text-sm leading-relaxed text-mist/60">{description}</p>
    </div>
  )
}
