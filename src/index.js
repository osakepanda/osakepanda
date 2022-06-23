import "./styles/index.css"
import "./styles/slideshow.css"

import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"
import getPosts from "./instagram"

import SEO from "./components/seo"
import Post from "./components/post"
import SlideShow from "./components/SlideShow"

export const query = graphql`
  query Index($lang: String) {
    prismicIndex(lang: {eq: $lang}) {
      data {
        seo_title
        seo_description
        seo_author
        seo_instagram
        seo_icon {
          dimensions {
            width
            height
          }
          url
        }
        logo {
          url
        }
        cover {
          url
        }
        baseline {
          text
        }
        opening {
          text
        }
        address {
          text
        }
        phone
        content {
          html
        }
        body {
          ... on PrismicIndexBodyImagesSlider {
            slice_type
            slice_label
            primary {
              eyebrow_headline {
                text
              }
              title {
                text
              }
              description {
                text
              }
            }
            items {
              image {
                dimensions {
                  width
                  height
                }
                alt
                copyright
                url
              }
              description {
                text
              }
            }
          }  
        }
      }
    }
  }`

class Index extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    getPosts(this.props.data.prismicIndex.data.seo_instagram)
      .then(posts => this.setState({ posts }))
  }

  render() {
    const { lang, data } = this.props
    const { posts } = this.state 
    const { prismicIndex } = data

    const {
      seo_title,
      seo_description,
      seo_author,
      seo_icon,
      logo,
      cover,
      baseline,
      opening,
      address,
      phone,
      content,
    } = prismicIndex.data

    const meta = [{
      property: 'og:image:width',
      content: seo_icon.dimensions.width,
    }, {
      property: 'og:image:height',
      content: seo_icon.dimensions.height,
    }]

    return (
      <>
        <SEO
          lang={lang}
          title={seo_title}
          page={baseline.text}
          description={seo_description}
          author={seo_author}
          thumbnail={seo_icon.url}
          meta={meta} />

        <header>
          <picture style={{ backgroundImage: `url(${cover.url})` }}></picture>
          <hgroup>
            <h1 style={{ backgroundImage: `url(${logo.url})` }}>{ seo_title }</h1>
            <h2>{ baseline.text }</h2>
            <h3><span role="img" aria-label="time">🕖</span>{ opening.text }</h3>
            <address><span role="img" aria-label="location">📍</span>{ address.text }</address>
            <phone><span role="img" aria-label="phone">📞</span><a href={`tel:${phone}`}>{ phone }</a></phone>
          </hgroup>
        </header>

        <SlideShow items={prismicIndex.data.body[0].items} />

        <section dangerouslySetInnerHTML={{ __html: content.html }}></section>

        {/*<aside>*/}
        {/*  { posts.map((post, index) => <Post key={index} {...post}  />) }*/}
        {/*</aside>*/}

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.8034042382686!2d135.76695870852805!3d35.004774988353766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109f851b5a251%3A0x65d5934b94fa18a1!2z6YWS44OR44Oz44OA!5e0!3m2!1sja!2sjp!4v1655968885040!5m2!1sja!2sjp" title="maps"></iframe>
      
        <footer>&copy;2018 – made with <span role="img" aria-label="fuel">🍙</span> by <a href="https://instagram.com/y_nk">@y_nk</a></footer>
      </>
    )
  }
}

Index.propTypes = {
  lang: PropTypes.oneOf(['en-us', 'ja-jp']).isRequired,
}

Index.defaultProps = {
  lang: 'ja-jp'
}

export default Index
