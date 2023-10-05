import { Route, Routes } from 'react-router-dom'

// Components
import About from '../components/About'
import Home from '../components/Home'
import Layout from '../components/Layout'
import Missing from '../components/Missing'
import NewPosts from '../components/NewPosts'
import PostPage from '../components/PostPage'
import EditPost from '../components/EditPost'

import { DataProvider } from './context/DataContext'

// CSS
import './index.css'

function App() {


  return (
    <>
      <DataProvider>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Home />
            } />
            <Route path='/post'>
              <Route index element={
                <NewPosts />}
              />
              <Route path="/post/edit/:id" element={
                <EditPost />}
              />
              <Route path="/post/:id" element={
                <PostPage />
              } />
            </Route>
            <Route path='about' element={<About />} />
            <Route path='*' element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  )
}

export default App
