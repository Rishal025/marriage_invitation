import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

export default function Gallery() {
  return (
    <section className="section-shell cream-pattern geo-pattern">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Gallery"
          title="A Moodboard Of Sacred Beauty"
          description="Islamic architecture, lantern glow, florals, and quiet gold details."
        />
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {invitation.gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="mb-5 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-[1.8rem] bg-[color:var(--dark-bg)] shadow-[var(--shadow-soft)]">
                <img
                  className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                    index % 3 === 0 ? 'h-[420px]' : 'h-[320px]'
                  }`}
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-bg)]/78 via-transparent to-transparent" />
                <figcaption className="font-heading absolute bottom-0 left-0 right-0 p-6 text-3xl font-semibold text-white">
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
