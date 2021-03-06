const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://res.cloudinary.com/adelcloud/image/upload/v1592223702/white-emerite-logo_ikqttw.png',
    logoLink: 'https://js-gatsby-course.netlify.app/',
    title:
      "Javascript kursus",
    githubUrl: 'https://github.com/adelmuursepp/coursewebsite',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/setup',
      '/tund1',
      '/tund2',
      '/tund3',
      '/tund4',
      '/tund5',
      '/tund6'
    ],
    collapsedNav: [
 // add trailing slash if enabled above
    ],
    links: [{ text: 'Emerite coding', link: 'https://emerite.co' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "Gatsby<div class='greenCircle'></div>Javascript kursus",
  },
  siteMetadata: {
    title: 'Gatsby Javascript kursus',
    description: 'Gatsby Javascript kursus',
    ogImage: null,
    docsLocation: 'https://github.com/adelmuursepp/coursewebsite/tree/master/content',
    favicon: 'https://res.cloudinary.com/adelcloud/image/upload/v1592224040/white-emerite-logo-circle_b8o7u4.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Javascript kursus',
      short_name: 'Javascript kursus',
      start_url: '/',
      background_color: '#D1AC00',
      theme_color: '#D1AC00',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
