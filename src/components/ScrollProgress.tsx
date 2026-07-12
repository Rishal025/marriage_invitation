import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26 })

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[79] h-1 w-full bg-[color:var(--dark-bg)]"
        aria-hidden="true"
      />
      <motion.div
        className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-[color:var(--gold-dark)] via-[color:var(--gold)] to-[color:var(--gold-light)]"
        style={{ scaleX }}
        aria-hidden="true"
      />
    </>
  )
}
