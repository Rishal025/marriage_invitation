import { motion } from 'framer-motion'
import { Gem } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

const people = [
  { role: 'The Bride', ...invitation.bride },
  { role: 'The Groom', ...invitation.groom },
]

export default function BrideGroom() {
  return (
    <section className="section-shell emerald-pattern geo-pattern">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Bride & Groom"
          title="Two Families, One Blessed Promise"
          description={invitation.quote}
          light
        />
        <div className="grid gap-8 md:grid-cols-2">
          {people.map((person, index) => (
            <Reveal key={person.fullName} direction={index === 0 ? 'right' : 'left'}>
              <article className="dark-glass rounded-[2.25rem] p-8 text-center md:p-10">
                <motion.div
                  className="relative mx-auto mb-7 grid size-44 place-items-center rounded-full border border-[color:var(--gold)]/45"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="absolute inset-3 rounded-full border border-white/10" />
                  <div className="grid size-28 place-items-center rounded-full bg-[color:var(--gold)]/12 text-[color:var(--gold)]">
                    <Gem size={44} />
                  </div>
                </motion.div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--gold)]">
                  {person.role}
                </p>
                <h3 className="font-heading mt-3 text-5xl font-semibold text-white">{person.fullName}</h3>
                <p className="mx-auto mt-5 max-w-md leading-8 text-white/68">“{person.quote}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
