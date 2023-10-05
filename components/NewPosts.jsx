import { useContext } from 'react'
import DataContext from '../src/context/DataContext'
const NewPosts = () => {
    const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useContext(DataContext)
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
export default NewPosts
