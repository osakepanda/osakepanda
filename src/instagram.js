import axios from 'axios'

export default async (username) => {
  const { data } = await axios.get(`https://www.instagram.com/${username}/?__a=1`)
  const posts = data?.graphql?.user?.edge_owner_to_timeline_media?.edges?.slice(0, 10)
  
  return posts.map(({ node }) => ({
    url: `https://instagram.com/p/${node.shortcode}`,
    img: node?.thumbnail_src,
    txt: node?.edge_media_to_caption?.edges?.[0].node?.text,
    likes: node?.edge_liked_by?.count,
    comms: node?.edge_media_to_comment?.count
  }))
}