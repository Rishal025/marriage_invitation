import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

type AnimatedDividerProps = {
  light?: boolean
}

export default function AnimatedDivider({ light = false }: AnimatedDividerProps) {
  return (
    <div className="my-8 flex items-center justify-center gap-4" aria-hidden="true">
      <motion.span
        className={`h-px w-20 ${light ? 'bg-[color:var(--gold)]/25' : 'bg-[color:var(--gold)]/45'}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      />
      <motion.span
        className="grid size-10 place-items-center rounded-full border border-[color:var(--gold)]/45 text-[color:var(--gold)]"
        animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={16} />
      </motion.span>
      <motion.span
        className={`h-px w-20 ${light ? 'bg-[color:var(--gold)]/25' : 'bg-[color:var(--gold)]/45'}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      />
    </div>
  )
}
