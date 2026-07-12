import { useState } from 'react'
import { Copy, MapPin, Navigation } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

export default function Venue() {
  const [copied, setCopied] = useState(false)
  const mapQuery = encodeURIComponent(invitation.venue.fullAddress)

  const copyAddress = async () => {
    await navigator.clipboard.writeText(invitation.venue.fullAddress)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="venue" className="section-shell cream-pattern geo-pattern">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Venue"
          title="Join Us At The Celebration"
          description="Find the hall, copy the address, or open navigation directly from your phone."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal direction="right" className="glass-card rounded-[2rem] p-8 md:p-10">
            <div className="mb-7 grid size-16 place-items-center rounded-full bg-[color:var(--dark-bg)] text-[color:var(--gold)]">
              <MapPin size={28} />
            </div>
            <h3 className="font-heading text-4xl font-semibold text-[color:var(--gold)]">
              {invitation.venue.name}
            </h3>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">
              {invitation.venue.name}
              <br />({invitation.venue.address})
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="ripple-button inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--gold)] bg-[color:var(--dark-bg)] px-5 py-3 text-sm font-semibold text-[color:var(--gold)] shadow-[var(--shadow-gold)] transition hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_35px_rgba(212,175,55,0.35)]"
                href={invitation.venue.googleMapsLink}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={17} />
                Navigate
              </a>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--gold)]/45 px-5 py-3 text-sm font-semibold text-[color:var(--gold)] transition hover:-translate-y-1 hover:bg-[color:var(--surface)]"
                type="button"
                onClick={copyAddress}
              >
                <Copy size={17} />
                {copied ? 'Copied' : 'Copy Address'}
              </button>
            </div>
          </Reveal>

          <Reveal direction="left" className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <iframe
              className="h-full min-h-[430px] w-full border-0"
              title={`${invitation.venue.name} map`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
