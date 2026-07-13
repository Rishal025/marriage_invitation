import { motion } from 'framer-motion'

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: (index % 9) * 0.55,
  duration: 8 + (index % 6),
  size: 3 + (index % 5),
}))

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute bottom-[-10%] rounded-full bg-[#b8956b]/35 blur-[0.5px]"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: ['0vh', '-115vh'],
            x: [0, particle.id % 2 ? 18 : -18, 0],
            opacity: [0, 0.75, 0],
            scale: [0.5, 1, 0.7],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
