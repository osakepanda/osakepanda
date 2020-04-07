import React from "react"
import PropTypes from "prop-types"

import Like from "./like"
import Comment from "./comment"

const Post = ({ url, img, txt, likes, comms }) => {

  return <a className="post" href={url} title={txt}>
    <img src={img} alt={txt} />

    <ul>
      <li>{ likes } <Like /></li>
      <li>{ comms } <Comment /></li>
    </ul>
  </a>
}

Post.propTypes = {
  url: PropTypes.string,
  img: PropTypes.string,
  txt: PropTypes.string,

  likes: PropTypes.number,
  comms: PropTypes.number,
}

export default Post