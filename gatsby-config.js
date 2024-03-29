module.exports = {
  siteMetadata: {
    title: `Ergy POS`,
    description: `Ergy POS - Point Of Sale es nuestro sistema de punto de venta diseñado para que pequeñas y medianas empresas puedan gestionar sus ventas en cualquier lugar y momento.`,
    author: `@TheSleepyDev`,
    contactMail: `ergy.ventas@soccoing.com.co`,
    contactPhone: 573165200692,
    contactMessage: "Quiero conocer más sobre Ergy POS",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
