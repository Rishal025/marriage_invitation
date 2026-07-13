export const invitation = {
  bride: {
    name: 'Hasna',
    fullName: 'Hasna',
    parents: '',
    quote: 'A heart made gentle by faith, grace, and family.',
  },
  groom: {
    name: 'Nafih',
    fullName: 'Nafih',
    parents: '',
    quote: 'A promise kept with sincerity, kindness, and sabr.',
  },
  families: {
    hosts: 'The Families of Hasna & Nafih',
    invitationText:
      'With grateful hearts and the blessings of our beloved families, we request the honour of your presence as we begin our sacred journey of Nikkah.',
  },
  event: {
    title: 'Nikkah Ceremony',
    date: '2026-08-22',
    time: '12:00 PM',
    countdownDate: '2026-08-22T12:00:00+05:30',
  },
  venue: {
    name: 'St.Joseph Cottolengo Hall',
    address: 'Near KMP road',
    fullAddress: 'St.Joseph Cottolengo Hall, Near KMP road',
    googleMapsLink: 'https://maps.app.goo.gl/dkuQSkvERw6n3FiG6?g_st=aw',
  },
  contact: {
    rsvpPhone: '',
    whatsapp: '',
    instagram: '',
  },
  audio: {
    enabled: false,
    url: '',
  },
  quote:
    'And We created you in pairs, and placed between you affection and mercy.',
  quran: {
    arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
    translation:
      'And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them, and He placed between you affection and mercy.',
    reference: 'Surah Ar-Rum 30:21',
  },
  dua: {
    arabic: 'بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
    translation:
      'May Allah bless you both, shower His blessings upon you, and unite you both in goodness.',
  },
  theme: {
    primaryBg: '#22060C',
    secondaryBg: '#2D0810',
    darkBg: '#180408',
    gold: '#B8956B',
    goldLight: '#C4A574',
    goldDark: '#8B7049',
    textPrimary: '#FFFFFF',
    textSecondary: '#D4C4B0',
  },
  gallery: [] as { title: string; image: string }[],
  timeline: [
    { time: '11:30 AM', title: 'Guest Arrival', description: 'A warm welcome with refreshments.' },
    { time: '12:00 PM', title: 'Nikkah Ceremony', description: 'The sacred vows and witnesses.' },
    { time: '12:30 PM', title: 'Dua', description: 'Collective prayers for barakah.' },
    {
      time: '12:30 PM',
      title: 'Photo Session',
      description: 'Begins immediately after Dua, while lunch is served.',
    },
    { time: '01:00 PM', title: 'Lunch', description: 'Family meal served alongside the photo session.' },
  ],
  seo: {
    title: 'Hasna & Nafih | Nikkah Invitation',
    description:
      'You are warmly invited to the Nikkah ceremony of Hasna and Nafih.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    url: 'https://example.com/nikkah-invitation',
  },
}

export type InvitationConfig = typeof invitation
