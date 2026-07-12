import { Heart } from 'lucide-react'
import AnimatedDivider from '../AnimatedDivider'
import { invitation } from '../../config/invitation'

export default function Footer() {
  return (
    <footer className="bg-[color:var(--dark-bg)] px-5 py-12 text-center text-white">
      <p className="font-arabic text-4xl text-[color:var(--gold)]">۞</p>
      <AnimatedDivider light />
      <p className="font-heading text-3xl">
        {invitation.bride.name} & {invitation.groom.name}
      </p>
      <p className="mt-4 inline-flex items-center justify-center gap-1.5 text-[0.65rem] text-[color:var(--gold)]/55 sm:text-xs">
        Made with <Heart size={12} className="fill-[color:var(--gold)] text-[color:var(--gold)]" /> for a blessed beginning
      </p>
    </footer>
  )
}
