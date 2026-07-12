import dayjs from 'dayjs'
import { motion, useReducedMotion } from 'framer-motion'
import { CalendarHeart, ChevronDown } from 'lucide-react'
import AnimatedDivider from '../AnimatedDivider'
import Particles from '../Particles/Particles'
import { invitation } from '../../config/invitation'
import { useMouseParallax } from '../../hooks/useMouseParallax'
import { staggerContainer } from '../../utils/motion'

const nameLetters = `${invitation.bride.name} & ${invitation.groom.name}`.split('')

export default function Hero() {
  const parallax = useMouseParallax(18)
  const shouldReduceMotion = useReducedMotion()
  const weddingDate = dayjs(invitation.event.date).format('dddd, MMMM D, YYYY')

  return (
    <section
      id="hero"
      className="section-shell emerald-pattern geo-pattern flex min-h-screen items-center"
      aria-label="Wedding invitation hero"
    >
      <Particles />
      <motion.div
        className="absolute left-[8%] top-[14%] hidden text-[color:var(--gold)]/40 md:block"
        style={shouldReduceMotion ? undefined : { x: parallax.x, y: parallax.y }}
        animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Lantern />
      </motion.div>
      <motion.div
        className="absolute bottom-[16%] right-[9%] hidden text-[color:var(--light-gold)]/30 lg:block"
        style={shouldReduceMotion ? undefined : { x: -parallax.x, y: -parallax.y }}
        animate={{ y: [0, 22, 0], rotate: [4, -2, 4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Lantern />
      </motion.div>

      <motion.div
        className="section-inner relative z-10 mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-arabic mb-5 text-5xl text-[color:var(--light-gold)] md:text-7xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
          }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>
        <motion.p
          className="mx-auto max-w-xl text-xs font-semibold uppercase tracking-[0.42em] text-white/65"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          You are invited to our <strong className="font-semibold text-[color:var(--gold)]">Nikkah</strong>
        </motion.p>
        <AnimatedDivider light />
        <motion.h1
          className="font-heading mx-auto max-w-5xl text-6xl font-semibold leading-none text-white md:text-8xl lg:text-9xl"
          aria-label={`${invitation.bride.name} and ${invitation.groom.name}`}
        >
          {nameLetters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className={letter === ' ' ? 'inline-block w-4' : 'inline-block'}
              initial={{ opacity: 0, y: 40, rotateX: -70, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.45 + index * 0.035, duration: 0.75 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-[color:var(--gold)]/35 bg-white/8 px-5 py-3 text-sm text-white/80 backdrop-blur"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.75 }}
        >
          <CalendarHeart size={18} className="text-[color:var(--gold)]" />
          <span>{weddingDate}</span>
          <span aria-hidden="true">•</span>
          <span>{invitation.event.time}</span>
        </motion.div>
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.62, duration: 0.75 }}
        >
          {invitation.families.invitationText}
        </motion.p>
        <motion.a
          href="#quran"
          className="ripple-button mt-10 inline-flex items-center justify-center rounded-full border border-[color:var(--gold)] bg-[color:var(--dark-bg)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)] shadow-[var(--shadow-gold)] transition hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_35px_rgba(212,175,55,0.35)]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.82, duration: 0.75 }}
        >
          View Invitation
        </motion.a>
        <motion.a
          href="#quran"
          className="absolute bottom-[-5rem] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/45 md:flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to invitation"
        >
          Scroll
          <ChevronDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  )
}

function Lantern() {
  return (
    <svg width="92" height="140" viewBox="0 0 92 140" fill="none" aria-hidden="true">
      <path d="M46 7v20M30 27h32M24 50c0-13 10-23 22-23s22 10 22 23v43c0 14-10 25-22 25S24 107 24 93V50Z" stroke="currentColor" strokeWidth="2" />
      <path d="M32 52h28M32 90h28M38 32c-10 18-10 57 0 80M54 32c10 18 10 57 0 80" stroke="currentColor" strokeWidth="1.4" />
      <path d="M40 123h12l5 10H35l5-10Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
