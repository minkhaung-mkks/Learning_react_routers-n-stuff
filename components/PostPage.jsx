
import { Link, useParams } from "react-router-dom"
import { useContext } from 'react'
import DataContext from '../src/context/DataContext'
const PostPage = () => {
    const { posts, handleDelete } = useContext(DataContext)
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
                        <Link to={`/post/edit/${post.id}`}><button className='editButton'>
                            Edit Post
                        </button></Link>
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
export default PostPage
