import useReveal from '../hooks/useReveal.js'

/**
 * Shared header used to open each major content section.
 * `index` is a real position in the page's 8-part structure, so the
 * numbering communicates sequence rather than decorating the page.
 */
export default function SectionHeader({ title, description, tone = 'signal', align = 'left' }) {
  const ref = useReveal()

  return (
    <div ref={ref} className={`reveal ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <h2 className="font-display text-3xl font-bold leading-[1.15] text-mist sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-mist/60 md:text-[1.05rem]">{description}</p>
      )}
    </div>
  )
}
