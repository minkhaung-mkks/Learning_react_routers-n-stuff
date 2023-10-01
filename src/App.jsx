import { useEffect, useState } from 'react'
import { Route, useNavigate, Routes } from 'react-router-dom'
import { format } from 'date-fns'

// Components
import About from '../components/About'
import Home from '../components/Home'
import Layout from '../components/Layout'
import Missing from '../components/Missing'
import NewPosts from '../components/NewPosts'
import PostPage from '../components/PostPage'

// CSS
import './index.css'

function App() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, body: postBody, dateTime }
    const allPosts = [...posts, newPost];
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate.push('/')
  }
  const handleDelete = (id) => {
    const otherPosts = posts.filter(post => post.id !== id)
    setPosts(otherPosts)
    navigate.push('/')
  }
  useEffect(() => {
    //     search.toLowerCase() will be an empty string, since the search term is empty.
    // ''(empty string) is included in every string, so('some string').includes('') will return true.
    const filteredResults = posts.filter(post => ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()))
    console.log(filteredResults)
    setSearchResults(filteredResults.reverse())
  }, [posts, search])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<Home posts={searchResults} />} />
          <Route path='/post'>
            <Route index element={
              <NewPosts
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />}
            />
            <Route path="/post/:id" element={
              <PostPage
                posts={posts}
                handleDelete={handleDelete}
              />
            } />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
