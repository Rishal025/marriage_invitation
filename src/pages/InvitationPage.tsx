import { lazy, Suspense } from 'react'
import BrideGroom from '../components/BrideGroom/BrideGroom'
import Countdown from '../components/Countdown/Countdown'
import CustomCursor from '../components/Cursor/CustomCursor'
import EventCards from '../components/EventCards/EventCards'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Loader from '../components/Loader/Loader'
import MusicControl from '../components/MusicControl'
import QuranVerse from '../components/QuranVerse/QuranVerse'
import ScrollProgress from '../components/ScrollProgress'
import SEO from '../components/SEO'
import Timeline from '../components/Timeline/Timeline'
import Wishes from '../components/Wishes/Wishes'

const Venue = lazy(() => import('../components/Venue/Venue'))

export default function InvitationPage() {
  return (
    <>
      <SEO />
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <MusicControl />
      <main>
        <Hero />
        <QuranVerse />
        <Countdown />
        <EventCards />
        <Timeline />
        <BrideGroom />
        <Suspense fallback={<SectionSkeleton label="Loading venue" />}>
          <Venue />
        </Suspense>
        <Wishes />
      </main>
      <Footer />
    </>
  )
}

function SectionSkeleton({ label }: { label: string }) {
  return (
    <section className="section-shell bg-[color:var(--dark-bg)]" aria-label={label}>
      <div className="section-inner">
        <div className="mx-auto h-52 max-w-4xl animate-pulse rounded-[2rem] bg-[color:var(--gold)]/15" />
      </div>
    </section>
  )
}
