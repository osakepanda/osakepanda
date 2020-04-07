import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ lang, title, page, description, author, thumbnail, meta }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${page}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: thumbnail,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  title: ``,
  page: ``,
  description: ``,
  author: ``,
  thumbnail: ``,
  meta: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  page: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  thumbnail: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
