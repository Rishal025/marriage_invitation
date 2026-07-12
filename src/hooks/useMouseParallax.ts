import { useEffect, useState } from 'react'

type MousePosition = {
  x: number
  y: number
}

export function useMouseParallax(strength = 16) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * strength
      const y = (event.clientY / window.innerHeight - 0.5) * strength
      setPosition({ x, y })
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [strength])

  return position
}
