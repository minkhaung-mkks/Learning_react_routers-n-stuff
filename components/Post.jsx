import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
Post.propTypes = {
    post: PropTypes.array
}
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

export default Post
