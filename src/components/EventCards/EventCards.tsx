import dayjs from 'dayjs'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

const eventDetails = [
  {
    icon: CalendarDays,
    title: 'Nikkah Date',
    value: dayjs(invitation.event.date).format('dddd, MMMM D, YYYY'),
  },
  { icon: Clock, title: 'Time', value: invitation.event.time },
  {
    icon: MapPin,
    title: 'Venue',
    value: `${invitation.venue.name}\n(${invitation.venue.address})`,
  },
]

export default function EventCards() {
  return (
    <section className="section-shell cream-pattern geo-pattern">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Event Details"
          title="Everything You Need To Know"
          description="Thoughtfully arranged details for a smooth, graceful celebration."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventDetails.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="glass-card group h-full rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--gold)]">
                  <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-[color:var(--dark-bg)] text-[color:var(--gold)] transition group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-[var(--shadow-gold)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-3xl font-semibold text-[color:var(--gold)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 whitespace-pre-line leading-7 text-[color:var(--muted)]">
                    {item.value}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
