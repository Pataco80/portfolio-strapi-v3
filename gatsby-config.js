module.exports = {
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    siteUrl: `https://temp-portfolio-strapi.netlify.app`,
    twitterUsername: `@Pataco80`,
    image: `/social-web-dev.png`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`job`, `projects`],
        singleTypes: [`about`],
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `gatsby-strapi-portfolio-project`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2caeba`,
        display: `standalone`,
        icon: './src/images/favicons/android-chrome-512x512.png',
        icons: [
          {
            src: './src/images/favicons/apple-touch-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/images/favicons/favicon-16x16.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/images/favicons/favicon-32x32.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/images/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/images/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ],
}
