import PropTypes from 'prop-types'

const NewPosts = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form onSubmit={handleSubmit} className="newPostForm">
                <label htmlFor="postTitle">Title:</label>
                <input type="text" id='postTitle' required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                <label htmlFor="postBody">Post:</label>
                <input type="text" id='postBody' required value={postBody} onChange={(e) => setPostBody(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </main>
    )
}
NewPosts.propTypes = {
    postTitle: PropTypes.string,
    postBody: PropTypes.string,
    setPostTitle: PropTypes.func,
    setPostBody: PropTypes.func,
    handleSubmit: PropTypes.func
}
export default NewPosts
