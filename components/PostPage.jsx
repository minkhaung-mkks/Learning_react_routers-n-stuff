import PropTypes from 'prop-types'
import { Link, useParams } from "react-router-dom"

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className='PostPage'>
            <article className="post">
                {post ?
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                    :
                    <>
                        <h2>Post Not Found!</h2>
                        <p>
                            <Link to={'/'}>
                                Go back to Home
                            </Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}
PostPage.propTypes = {
    posts: PropTypes.array,
    handleDelete: PropTypes.func
}
export default PostPage
