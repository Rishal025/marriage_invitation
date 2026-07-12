import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 22 })
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 22 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
    }

    const setHover = (event: Event) => {
      const target = event.target as HTMLElement | null
      setIsHovering(Boolean(target?.closest('a, button, input, textarea, select')))
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', setHover)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', setHover)
    }
  }, [cursorX, cursorY])

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[100] hidden mix-blend-difference md:block">
      <motion.span
        className="fixed left-0 top-0 size-2 rounded-full bg-[color:var(--gold)] shadow-[0_0_18px_rgba(201,169,97,0.85)]"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.span
        className="fixed left-0 top-0 size-9 rounded-full border border-[color:var(--gold)]/70"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 1.8 : 1 }}
      />
    </div>
  )
}
