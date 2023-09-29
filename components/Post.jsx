import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <article>
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
        </article>
    )
}
Post.propTypes = {
    post: PropTypes.array
}
export default Post
