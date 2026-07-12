import AnimatedDivider from '../AnimatedDivider'
import Reveal from '../Reveal'
import { invitation } from '../../config/invitation'

export default function QuranVerse() {
  return (
    <section id="quran" className="section-shell cream-pattern geo-pattern">
      <div className="section-inner">
        <Reveal className="glass-card mx-auto max-w-4xl rounded-[2.5rem] px-6 py-12 text-center md:px-14 md:py-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[color:var(--gold)]">
            A Sacred Reminder
          </p>
          <p className="font-arabic text-4xl leading-[1.9] text-[color:var(--gold)] md:text-5xl">
            {invitation.quran.arabic}
          </p>
          <AnimatedDivider />
          <p className="mx-auto max-w-3xl text-lg leading-9 text-[color:var(--muted)]">
            “{invitation.quran.translation}”
          </p>
          <p className="mt-6 font-semibold text-[color:var(--gold)]">
            {invitation.quran.reference}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
