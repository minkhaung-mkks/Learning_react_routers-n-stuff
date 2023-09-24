import { useState } from 'react'
import { Route, useNavigate, Routes } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import Layout from '../components/Layout'
import Missing from '../components/Missing'
import NewPosts from '../components/NewPosts'
import PostPage from '../components/PostPage'
import './App.css'

function App() {
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState()
  const [search, setSearch] = useState()
  const [posts, setPosts] = useState([{
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }])
  const [postTitle, setPostTitle] = useState()
  const [postBody, setPostBody] = useState()
  const handleSubmit = () => { }
  const handleDelete = () => { }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<Home posts={searchResults} />} />
          <Route path='/post'>
            <Route index element={<NewPosts
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />} />
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
