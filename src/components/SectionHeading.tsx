import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--gold)]">
        {eyebrow}
      </p>
      <h2
        className={`font-heading text-4xl font-semibold leading-tight md:text-6xl ${
          light ? 'text-white' : 'text-[color:var(--gold)]'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-8 md:text-lg ${
            light ? 'text-white/72' : 'text-[color:var(--muted)]'
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
