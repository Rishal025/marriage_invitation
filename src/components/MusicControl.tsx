import { useRef, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'
import { invitation } from '../config/invitation'

export default function MusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  if (!invitation.audio.enabled || !invitation.audio.url) {
    return null
  }

  const toggleAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.volume = 0.35
      await audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={invitation.audio.url} loop preload="none" />
      <button
        type="button"
        className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--dark-bg)] text-[color:var(--gold)] shadow-[var(--shadow-gold)] transition hover:shadow-[0_10px_35px_rgba(212,175,55,0.35)]"
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? <Music size={19} /> : <VolumeX size={19} />}
      </button>
    </>
  )
}
