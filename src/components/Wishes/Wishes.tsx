import AnimatedDivider from '../AnimatedDivider'
import Reveal from '../Reveal'
import { invitation } from '../../config/invitation'

export default function Wishes() {
  return (
    <section className="section-shell emerald-pattern geo-pattern">
      <div className="section-inner">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[color:var(--gold)]">
            A Dua For The Couple
          </p>
          <h2 className="font-arabic text-4xl leading-[1.9] text-white md:text-6xl">
            {invitation.dua.arabic}
          </h2>
          <AnimatedDivider light />
          <p className="mx-auto max-w-2xl text-lg leading-9 text-white/72">
            {invitation.dua.translation}
          </p>
          <p className="font-heading mt-8 text-4xl text-[color:var(--gold)]">Ameen</p>
        </Reveal>
      </div>
    </section>
  )
}
