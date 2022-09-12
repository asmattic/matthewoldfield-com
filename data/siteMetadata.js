const siteMetadata = {
  title: "Matt Oldfield's Site",
  author: 'Matt Oldfield',
  headerTitle: 'Matthew Oldfield',
  description: 'My blog and portfolio created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://matthewoldfield.com',
  siteRepo: 'https://github.com/asmattic/matthewoldfield-com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'matthewoldfieldweb@gmail.com',
  github: 'https://github.com/asmattic',
  twitter: 'https://twitter.com/MattOldfield2',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/matthew-oldfield/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
