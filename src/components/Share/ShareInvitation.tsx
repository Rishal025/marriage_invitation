import { type ReactNode, useMemo, useState } from 'react'
import { Copy, Send, Share2 } from 'lucide-react'
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { invitation } from '../../config/invitation'

export default function ShareInvitation() {
  const [copied, setCopied] = useState(false)
  const shareUrl = useMemo(
    () => (typeof window === 'undefined' ? invitation.seo.url : window.location.href),
    [],
  )
  const message = `${invitation.seo.title} - ${invitation.seo.description}`

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const nativeShare = async () => {
    if (!navigator.share) {
      await copyLink()
      return
    }

    await navigator.share({
      title: invitation.seo.title,
      text: invitation.seo.description,
      url: shareUrl,
    })
  }

  return (
    <section className="section-shell cream-pattern geo-pattern">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Share"
          title="Send The Invitation With Love"
          description="Share this single URL with family and friends on the channels they use most."
        />
        <Reveal className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <WhatsappShareButton url={shareUrl} title={message}>
            <ShareCard label="WhatsApp" icon={<Send size={20} />} />
          </WhatsappShareButton>
          <TelegramShareButton url={shareUrl} title={message}>
            <ShareCard label="Telegram" icon={<Send size={20} />} />
          </TelegramShareButton>
          <FacebookShareButton url={shareUrl} hashtag="#NikahInvitation">
            <ShareCard label="Facebook" icon={<Share2 size={20} />} />
          </FacebookShareButton>
          <button type="button" onClick={nativeShare}>
            <ShareCard label={copied ? 'Copied' : 'Copy / Share'} icon={copied ? <Copy size={20} /> : <Share2 size={20} />} />
          </button>
        </Reveal>
      </div>
    </section>
  )
}

type ShareCardProps = {
  label: string
  icon: ReactNode
}

function ShareCard({ label, icon }: ShareCardProps) {
  return (
    <span className="glass-card flex w-full items-center justify-center gap-3 rounded-[1.5rem] px-5 py-5 text-sm font-semibold text-[color:var(--gold)] transition hover:-translate-y-2 hover:border-[color:var(--gold)] hover:shadow-[var(--shadow-gold)]">
      <span className="text-[color:var(--gold)]">{icon}</span>
      {label}
    </span>
  )
}
