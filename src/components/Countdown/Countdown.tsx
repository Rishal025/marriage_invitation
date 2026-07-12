import CountdownLib, { type CountdownRendererFn } from 'react-countdown'
import { motion } from 'framer-motion'
import Particles from '../Particles/Particles'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

const labels = ['Days', 'Hours', 'Minutes', 'Seconds']

export default function Countdown() {
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    const values = completed ? [0, 0, 0, 0] : [days, hours, minutes, seconds]

    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <motion.div
            key={labels[index]}
            className="dark-glass rounded-[1.7rem] p-7 text-center"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 0.45, repeat: Infinity, repeatDelay: 0.55 }}
          >
            <motion.span
              key={value}
              className="font-heading block text-6xl font-semibold text-[color:var(--gold)] md:text-7xl"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {String(value).padStart(2, '0')}
            </motion.span>
            <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--cream)]">
              {labels[index]}
            </span>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section id="countdown" className="section-shell emerald-pattern geo-pattern">
      <Particles />
      <div className="section-inner relative z-10">
        <SectionHeading
          eyebrow="The Celebration Begins In"
          title="Counting Every Blessed Moment"
          description="A refined countdown to the day our families gather for Nikkah."
          light
        />
        <CountdownLib date={invitation.event.countdownDate} renderer={renderer} />
      </div>
    </section>
  )
}
