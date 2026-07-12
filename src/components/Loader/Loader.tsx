import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-[color:var(--dark-bg)] text-center text-[color:var(--cream)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(14px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          role="status"
          aria-live="polite"
        >
          <div className="relative px-8">
            <motion.div
              className="mx-auto mb-8 grid size-28 place-items-center rounded-full border border-[color:var(--gold)]/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            >
              <span className="font-arabic text-5xl text-[color:var(--gold)]">۞</span>
            </motion.div>
            <motion.div
              className="mx-auto mb-6 h-px w-56 bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            />
            <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--cream)]">
              Preparing Your Invitation...
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
