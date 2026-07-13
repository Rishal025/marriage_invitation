import dayjs from 'dayjs'
import { motion, useReducedMotion } from 'framer-motion'
import { CalendarHeart, ChevronDown } from 'lucide-react'
import AnimatedDivider from '../AnimatedDivider'
import Particles from '../Particles/Particles'
import { invitation } from '../../config/invitation'
import { useMouseParallax } from '../../hooks/useMouseParallax'
import { staggerContainer } from '../../utils/motion'

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
        className="absolute left-[8%] top-[14%] hidden text-gold-muted opacity-30 md:block"
        style={shouldReduceMotion ? undefined : { x: parallax.x, y: parallax.y }}
        animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Lantern />
      </motion.div>
      <motion.div
        className="absolute bottom-[16%] right-[9%] hidden text-gold-muted opacity-20 lg:block"
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
          className="hero-bismillah font-arabic mb-4 text-2xl leading-relaxed sm:mb-5 sm:text-3xl md:text-4xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
          }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>
        <motion.p
          className="hero-subtitle mx-auto max-w-xs text-[0.62rem] font-semibold uppercase tracking-[0.28em] sm:max-w-md sm:text-xs sm:tracking-[0.36em]"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          You are invited to our <strong className="text-gold">Nikkah</strong>
        </motion.p>
        <AnimatedDivider light />
        <motion.h1
          className="font-heading mx-auto flex flex-col items-center gap-3 sm:gap-4"
          aria-label={`${invitation.bride.name} and ${invitation.groom.name}`}
        >
          <motion.span
            className="hero-name block text-[2.65rem] font-semibold leading-tight sm:text-[3.25rem] md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.75 }}
          >
            {invitation.bride.name}
          </motion.span>
          <motion.span
            className="hero-ampersand flex items-center gap-2.5 py-0.5 sm:gap-3 sm:py-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.72, duration: 0.65 }}
            aria-hidden="true"
          >
            <span className="h-px w-7 bg-[#b8956b]/35 sm:w-10" />
            <span className="hero-ampersand-mark font-display text-sm italic leading-none sm:text-base">
              &
            </span>
            <span className="h-px w-7 bg-[#b8956b]/35 sm:w-10" />
          </motion.span>
          <motion.span
            className="hero-name block text-[2.65rem] font-semibold leading-tight sm:text-[3.25rem] md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.75 }}
          >
            {invitation.groom.name}
          </motion.span>
        </motion.h1>
        <motion.div
          className="hero-date-box mx-auto mt-6 flex w-full max-w-sm flex-col items-center gap-2 rounded-2xl bg-black/15 px-4 py-3 text-xs backdrop-blur sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center sm:gap-3 sm:rounded-full sm:px-5 sm:text-sm"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.75 }}
        >
          <span className="hero-date inline-flex items-center gap-2">
            <CalendarHeart size={16} className="text-gold" />
            {weddingDate}
          </span>
          <span className="hidden sm:inline text-gold-soft" aria-hidden="true">
            •
          </span>
          <span className="hero-date">{invitation.event.time}</span>
        </motion.div>
        <motion.p
          className="hero-body mx-auto mt-6 max-w-md text-sm leading-7 sm:mt-8 sm:max-w-lg sm:text-base sm:leading-8"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.75 }}
        >
          {invitation.families.invitationText}
        </motion.p>
        <motion.a
          href="#quran"
          className="hero-button ripple-button mt-8 inline-flex items-center justify-center rounded-full border bg-[color:var(--dark-bg)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] shadow-[var(--shadow-gold)] transition hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_35px_rgba(139,112,73,0.35)] sm:mt-10 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.24em]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.75 }}
        >
          View Invitation
        </motion.a>
        <motion.a
          href="#quran"
          className="mt-10 hidden flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-gold-soft md:flex"
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
