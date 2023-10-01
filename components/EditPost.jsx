import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const EditPost = ({ posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }

    }, [post, setEditBody, setEditTitle])
    return (
        <main className="NewPost">
            <h2>Edit Post</h2>
            <form onSubmit={(e) => e.preventDefault()} className="newPostForm">
                <label htmlFor="postTitle">Title:</label>
                <input type="text" id='postTitle' required value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                <label htmlFor="postBody">Post:</label>
                <input type="text" id='postBody' required value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                <button type="submit" onClick={() => handleEdit(post.id)}>Update</button>
            </form>
        </main>
    )
}
EditPost.propTypes = {
    posts: PropTypes.array,
    editTitle: PropTypes.string,
    editBody: PropTypes.string,
    setEditTitle: PropTypes.func,
    setEditBody: PropTypes.func,
    handleEdit: PropTypes.func
}
export default EditPost