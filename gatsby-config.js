require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/osakepanda",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `@bumped-inc/gatsby-plugin-optional-chaining`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `osake-panda`,
        accessToken: `${process.env.PRISMIC_KEY}`,
        schemas: {
          index: require('./prismic/index.json')
        }
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
