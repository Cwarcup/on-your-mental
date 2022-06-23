const headerNavLinks = [
  { href: '/hosts', title: 'The Hosts' },
  { href: '/watch', title: 'Watch' },
  { href: '/listen', title: 'Listen' },
  { href: '/contact', title: 'Contact' },
  {
    type: 'dropdown',
    title: 'Socials',
    links: [
      {
        href: 'https://www.youtube.com/channel/UCYZNw4kprBNpxBrTcnNl_Kw',
        title: 'Youtube',
        kind: 'youtube',
      },
      { href: 'https://www.instagram.com/onyourmentalpod', title: 'Instagram', kind: 'instagram' },
      { href: 'https://vm.tiktok.com/ZMd3SD8E1', title: 'TikTok', kind: 'tiktok' },
      {
        href: 'https://podcasts.apple.com/ca/podcast/on-your-mental/id1551290550',
        title: 'Apple',
        kind: 'applePodcasts',
      },
      {
        href: 'https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm',
        title: 'Spotify',
        kind: 'spotify',
      },
    ],
  },
]

export default headerNavLinks
