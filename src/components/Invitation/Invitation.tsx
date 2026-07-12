import { HeartHandshake } from 'lucide-react'
import AnimatedDivider from '../AnimatedDivider'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

export default function Invitation() {
  return (
    <section className="section-shell cream-pattern geo-pattern">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Personal Invitation"
          title="With Love, Honour & Dua"
          description="A celebration of faith, family, and the beginning of a blessed companionship."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal direction="right" className="glass-card rounded-[2rem] p-8 md:p-10">
            <div className="mb-8 grid size-16 place-items-center rounded-full bg-[color:var(--dark-bg)] text-[color:var(--gold)]">
              <HeartHandshake size={28} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--gold)]">
              Hosted by
            </p>
            <h3 className="font-heading mt-3 text-4xl font-semibold text-[color:var(--gold)]">
              {invitation.families.hosts}
            </h3>
            <AnimatedDivider />
            <p className="text-lg leading-9 text-[color:var(--muted)]">
              {invitation.families.invitationText}
            </p>
          </Reveal>

          <Reveal direction="left" className="grid gap-5">
            {[invitation.bride, invitation.groom].map((person) => (
              <article
                key={person.fullName}
                className="rounded-[1.75rem] border border-[color:var(--gold)]/25 bg-[color:var(--surface)] p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[color:var(--gold)]/55"
              >
                {person.parents ? (
                  <p className="text-sm font-medium text-[color:var(--gold)]">{person.parents}</p>
                ) : null}
                <h3 className={`font-heading text-4xl font-semibold text-[color:var(--gold)] md:text-5xl ${person.parents ? 'mt-3' : ''}`}>
                  {person.fullName}
                </h3>
              </article>
            ))}
            <p className="rounded-[1.75rem] border border-[color:var(--gold)]/25 bg-[color:var(--dark-bg)] p-7 text-center font-arabic text-3xl leading-[1.8] text-[color:var(--gold-light)] shadow-[var(--shadow-soft)]">
              دعواتكم لنا بالخير والبركة
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
