module.exports = {
  siteMetadata: {
    title: `Handy Reparatur in DongXuan Center - Berlin`,
    description: `Repair your phone and tablet with our love !`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#532849`,
        theme_color: `#532849`,
        display: `minimal-ui`,
        icon: `src/images/phonerepair.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-fontawesome-css`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
