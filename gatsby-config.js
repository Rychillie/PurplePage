module.exports = {
  siteMetadata: {
    title: 'PurplePage',
    description: `Lading Page OpenSource feito pela comunidade`,
    author: `@rychillie`,
    siteUrl: `https://purplepage.rychillie.net`,
    titleTemplate: "%s · PurplePage",
    url: "https://purplepage.rychillie.net",
    image: "/images/logo.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rychillie`,
        description: 'Brazilian Front-End Developer',
        short_name: `Rychillie`,
        start_url: `/`,
        background_color: `#FF5757`,
        theme_color: `#1A1A1A`,
        display: `standalone`,
        icon: `${__dirname}/static/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`,
          `source sans-serif\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sass`,
  ],
}
