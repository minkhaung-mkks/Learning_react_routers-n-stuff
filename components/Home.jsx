
import PropTypes from 'prop-types'
import Feed from './Feed'

const Home = ({ posts }) => {
    return (
        <main className="home">
            {posts?.length ? (
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
Home.propTypes = {
    posts: PropTypes.array
}
export default Home
