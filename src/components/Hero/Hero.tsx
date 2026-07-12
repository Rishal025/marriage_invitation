import dayjs from 'dayjs'
import { motion, useReducedMotion } from 'framer-motion'
import { CalendarHeart, ChevronDown } from 'lucide-react'
import AnimatedDivider from '../AnimatedDivider'
import Particles from '../Particles/Particles'
import { invitation } from '../../config/invitation'
import { useMouseParallax } from '../../hooks/useMouseParallax'
import { staggerContainer } from '../../utils/motion'

const names = [invitation.bride.name, invitation.groom.name]

export default function Hero() {
  const parallax = useMouseParallax(18)
  const shouldReduceMotion = useReducedMotion()
  const weddingDate = dayjs(invitation.event.date).format('dddd, MMMM D, YYYY')

  return (
    <section
      id="hero"
      className="section-shell emerald-pattern geo-pattern flex min-h-screen items-center px-4 py-16 sm:px-6 md:py-24"
      aria-label="Wedding invitation hero"
    >
      <Particles />
      <motion.div
        className="absolute left-[8%] top-[14%] hidden text-[color:var(--gold)]/30 md:block"
        style={shouldReduceMotion ? undefined : { x: parallax.x, y: parallax.y }}
        animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Lantern />
      </motion.div>
      <motion.div
        className="absolute bottom-[16%] right-[9%] hidden text-[color:var(--gold)]/20 lg:block"
        style={shouldReduceMotion ? undefined : { x: -parallax.x, y: -parallax.y }}
        animate={{ y: [0, 22, 0], rotate: [4, -2, 4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Lantern />
      </motion.div>

      <motion.div
        className="section-inner relative z-10 mx-auto w-full max-w-lg text-center sm:max-w-xl md:max-w-2xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-arabic mb-4 text-2xl leading-relaxed text-[color:var(--gold)] sm:mb-5 sm:text-3xl md:text-4xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
          }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>
        <motion.p
          className="mx-auto max-w-xs text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]/75 sm:max-w-md sm:text-xs sm:tracking-[0.36em]"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          You are invited to our <strong className="font-semibold text-[color:var(--gold)]">Nikkah</strong>
        </motion.p>
        <AnimatedDivider light />
        <motion.h1
          className="font-heading mx-auto flex flex-col items-center gap-1 sm:gap-2"
          aria-label={`${invitation.bride.name} and ${invitation.groom.name}`}
        >
          {names.map((name, nameIndex) => (
            <motion.span
              key={name}
              className="gold-gradient-text block text-[2.35rem] font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.45 + nameIndex * 0.22, duration: 0.75 }}
            >
              {name}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="mx-auto mt-6 flex w-full max-w-sm flex-col items-center gap-2 rounded-2xl border border-[color:var(--gold)]/25 bg-black/15 px-4 py-3 text-xs text-[color:var(--gold)]/85 backdrop-blur sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center sm:gap-3 sm:rounded-full sm:px-5 sm:text-sm"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.75 }}
        >
          <span className="inline-flex items-center gap-2">
            <CalendarHeart size={16} className="text-[color:var(--gold)]" />
            {weddingDate}
          </span>
          <span className="hidden sm:inline" aria-hidden="true">
            •
          </span>
          <span>{invitation.event.time}</span>
        </motion.div>
        <motion.p
          className="mx-auto mt-6 max-w-md text-sm leading-7 text-[color:var(--gold)]/70 sm:mt-8 sm:max-w-lg sm:text-base sm:leading-8"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.75 }}
        >
          {invitation.families.invitationText}
        </motion.p>
        <motion.a
          href="#quran"
          className="ripple-button mt-8 inline-flex items-center justify-center rounded-full border border-[color:var(--gold)] bg-[color:var(--dark-bg)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)] shadow-[var(--shadow-gold)] transition hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_35px_rgba(154,123,63,0.35)] sm:mt-10 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.24em]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.75 }}
        >
          View Invitation
        </motion.a>
        <motion.a
          href="#quran"
          className="mt-10 hidden flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-[color:var(--gold)]/45 md:flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to invitation"
        >
          Scroll
          <ChevronDown size={16} />
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
