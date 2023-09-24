
import PropTypes from 'prop-types'
import Feed from './Feed'
Home.propTypes = {
    posts: PropTypes.array
}
const Home = ({ posts }) => {
    return (
        <main className="home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts found.
                </p>
            )
            }
        </main >
    )
}

export default Home
