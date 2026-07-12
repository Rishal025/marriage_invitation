import { type FormEvent, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

type Attendance = 'yes' | 'no' | 'maybe'

export default function RSVP() {
  const [attendance, setAttendance] = useState<Attendance>('yes')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="section-shell cream-pattern geo-pattern">
      <div className="section-inner">
        <SectionHeading
          eyebrow="RSVP"
          title="Kindly Confirm Your Presence"
          description="Your response helps our families prepare the welcome with care."
        />
        <Reveal className="glass-card mx-auto max-w-3xl rounded-[2.25rem] p-6 md:p-10">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your name" required />
              <Field label="Phone" name="phone" placeholder="+91..." type="tel" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Guests" name="guests" placeholder="2" type="number" min="1" />
              <label className="grid gap-2 text-sm font-semibold text-[color:var(--gold)]">
                Attendance
                <select
                  className="rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--surface)] px-4 py-3 text-[color:var(--text-primary)]"
                  value={attendance}
                  onChange={(event) => setAttendance(event.target.value as Attendance)}
                  name="attendance"
                >
                  <option value="yes">InshaAllah, attending</option>
                  <option value="maybe">Will confirm soon</option>
                  <option value="no">Unable to attend</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-[color:var(--gold)]">
              Message
              <textarea
                className="min-h-32 rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--surface)] px-4 py-3 text-[color:var(--text-primary)]"
                name="message"
                placeholder="Leave a blessing or note..."
              />
            </label>
            <button
              type="submit"
              className="ripple-button inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--gold)] bg-[color:var(--dark-bg)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)] shadow-[var(--shadow-gold)] transition hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_35px_rgba(212,175,55,0.35)]"
            >
              <Send size={17} />
              Submit RSVP
            </button>
          </form>
          <AnimatePresence>
            {submitted ? (
              <motion.div
                className="mt-6 rounded-2xl border border-[color:var(--gold)]/35 bg-[color:var(--primary-bg)]/95 p-5 text-center text-[color:var(--cream)]"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20 }}
              >
                Thank you. Your RSVP has been received with gratitude. For direct confirmation,
                WhatsApp us at {invitation.contact.rsvpPhone}.
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  placeholder: string
  type?: string
  min?: string
  required?: boolean
}

function Field({ label, name, placeholder, type = 'text', min, required = false }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[color:var(--gold)]">
      {label}
      <input
        className="rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--surface)] px-4 py-3 text-[color:var(--text-primary)]"
        name={name}
        placeholder={placeholder}
        type={type}
        min={min}
        required={required}
      />
    </label>
  )
}
