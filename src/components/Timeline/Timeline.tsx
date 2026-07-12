import { motion } from 'framer-motion'
import { CircleDot } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

export default function Timeline() {
  return (
    <section className="section-shell cream-pattern geo-pattern">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Ceremony Flow"
          title="A Graceful Day, Beautifully Timed"
          description="A simple timeline so every guest feels present, welcomed, and cared for."
        />
        <div className="relative mx-auto max-w-3xl">
          <motion.div
            className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--gold)]/45 to-transparent md:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            aria-hidden="true"
          />
          <div className="space-y-8">
            {invitation.timeline.map((item, index) => (
              <Reveal key={item.title} direction={index % 2 === 0 ? 'right' : 'left'}>
                <article
                  className={`relative grid gap-4 pl-16 md:grid-cols-2 md:pl-0 ${
                    index % 2 === 0 ? '' : 'md:text-right'
                  }`}
                >
                  <span className="absolute left-0 top-7 z-10 grid size-10 place-items-center rounded-full border border-[color:var(--gold)] bg-[color:var(--primary-bg)] text-[color:var(--gold)] md:left-1/2 md:-translate-x-1/2">
                    <CircleDot size={18} />
                  </span>
                  <div className={index % 2 === 0 ? 'md:pr-14' : 'md:col-start-2 md:pl-14'}>
                    <div className="glass-card rounded-[1.5rem] p-6">
                      <p className="text-sm font-semibold text-[color:var(--gold)]">{item.time}</p>
                      <h3 className="font-heading mt-2 text-3xl font-semibold text-[color:var(--gold)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-[color:var(--muted)]">{item.description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
