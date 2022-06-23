const siteMetadata = {
  title: 'On Your Mental',
  author: 'Reuben Hardern',
  developer: 'cwarcup',
  developerGithub: 'https://github.com/Cwarcup',
  headerTitle: 'On Your Mental',
  description:
    'More often than not, men keep things bottled up. We tend not to talk about things that worry us, or things that weigh on our minds, or things we simply care about. Mens mental health can suffer from that. This is where On Your Mental comes in. On this podcast we are changing the way men look at being open with one another. Hosted by Reuben Hardern and Kabir Sandhu. The way we see it, everyone deserves to feel comfortable sharing what is on their minds, and setting an example will help. On Your Mental is ending the stigma around men being vulnerable, one conversation at a time. Learn more about men and what is on their minds with a new episode every week. Video versions also available on YouTube',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://www.onyourmental.com',
  siteRepo: 'https://github.com/Cwarcup/on-your-mental',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/instagram-card.jpg',
  email: 'onyourmentalpod@gmail.com',
  youtube: 'https://www.youtube.com/c/onyourmental',
  instagram: 'https://www.instagram.com/onyourmentalpod',
  tiktok: 'https://vm.tiktok.com/ZMd3SD8E1',
  spotifyLink: 'https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm',
  applePodcastLink: 'https://podcasts.apple.com/ca/podcast/on-your-mental/id1551290550',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: 'https://www.onyourmental.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'en',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
