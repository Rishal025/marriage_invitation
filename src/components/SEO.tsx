import { Helmet } from 'react-helmet-async'
import { invitation } from '../config/invitation'

export default function SEO() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${invitation.bride.name} & ${invitation.groom.name} Nikkah`,
    description: invitation.seo.description,
    startDate: invitation.event.countdownDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    image: [invitation.seo.image],
    location: {
      '@type': 'Place',
      name: invitation.venue.name,
      address: invitation.venue.fullAddress,
    },
    organizer: {
      '@type': 'Organization',
      name: invitation.families.hosts,
    },
  }

  return (
    <Helmet>
      <title>{invitation.seo.title}</title>
      <meta name="description" content={invitation.seo.description} />
      <meta name="theme-color" content={invitation.theme.darkBg} />
      <meta property="og:title" content={invitation.seo.title} />
      <meta property="og:description" content={invitation.seo.description} />
      <meta property="og:image" content={invitation.seo.image} />
      <meta property="og:url" content={invitation.seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={invitation.seo.title} />
      <meta name="twitter:description" content={invitation.seo.description} />
      <meta name="twitter:image" content={invitation.seo.image} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
