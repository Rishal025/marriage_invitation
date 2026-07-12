import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeLeft, fadeRight, fadeUp, scaleIn } from '../utils/motion'

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

type RevealProps = PropsWithChildren<{
  direction?: RevealDirection
  className?: string
  delay?: number
}>

const variants = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
}

export default function Reveal({
  children,
  direction = 'up',
  className = '',
  delay = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.16 })

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
