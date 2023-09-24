import Post from "./Post"
import PropTypes from 'prop-types'
Feed.propTypes = {
    posts: PropTypes.array
}
const Feed = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed
