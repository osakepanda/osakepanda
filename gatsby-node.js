const path = require(`path`)
const getposts = require('instagram-posts')

const routes = {
  '/'  : 'ja-jp',
  '/jp': 'ja-jp',
  '/en': 'en-us',
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const component = path.resolve(`./src/index.js`)

  Object.entries(routes).forEach(([path, lang]) => {
    createPage({
      path, component, context: { lang },
    })
  })
}
