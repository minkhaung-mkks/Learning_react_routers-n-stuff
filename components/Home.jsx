
import PropTypes from 'prop-types'
import Feed from './Feed'

const Home = ({ posts, fetchError, loading }) => {
    return (
        <main className="home">
            {loading && <p className='statusMsg'> Fetching Posts...</p>}
            {fetchError && !loading && <p className='statusMsg' style={{ color: "red" }}>{fetchError}</p>}
            {!loading && !fetchError && posts?.length ? (
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
    posts: PropTypes.array,
    fetchError: PropTypes.string,
    loading: PropTypes.bool
}
export default Home
