import { format } from "date-fns";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";

import api from './api/posts'

const DataContext = createContext({})

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')

    const { data, fetchError, loading } = useAxiosFetch('http://localhost:3500/posts')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1
        const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
        const newPost = { id, title: postTitle, body: postBody, dateTime }
        try {
            const res = await api.post('/posts', newPost)
            const allPosts = [...posts, res.data];
            setPosts(allPosts)
            setPostTitle('')
            setPostBody('')
            navigate('/')
        } catch (err) {
            console.error(err)
            if (err?.response) {
                console.error(err.response.data)
                console.error(err.response.status)
                console.error(err.response.headers)
            }
            else {
                console.error(err.message)
            }
        }
    }
    const handleEdit = async (id) => {
        const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
        const updatePost = { id, title: editTitle, body: editBody, dateTime }
        try {
            const res = await api.put(`/posts/${id}`, updatePost)
            setPosts(posts.map(post => post.id === id ? { ...res.data } : post))
            setEditTitle('')
            setEditBody('')
            navigate('/')
        } catch (err) {
            console.error(err)
            if (err?.response) {
                console.error(err.response.data)
                console.error(err.response.status)
                console.error(err.response.headers)
            }
            else {
                console.error(err.message)
            }
        }
    }
    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`)
            const otherPosts = posts.filter(post => post.id !== id)
            setPosts(otherPosts)
            navigate('/')
        } catch (err) {
            console.error(err)
            if (err?.response) {
                console.error(err.response.data)
                console.error(err.response.status)
                console.error(err.response.headers)
            }
            else {
                console.error(err.message)
            }
        }
    }
    // -----------------------------------------
    // ## Old Fetch
    // useEffect(() => {
    //   const fetchPosts = async () => {
    //     try {
    //       const res = await api.get('/posts')
    //       if (res && res.data) setPosts(res.data)
    //     } catch (err) {
    //       console.error(err)
    //       if (err?.response) {
    //         console.error(err.response.data)
    //         console.error(err.response.status)
    //         console.error(err.response.headers)
    //       }
    //       else {
    //         console.error(err.message)
    //       }
    //     }
    //   }
    //   fetchPosts()
    // }, [])
    // ------------------------------------------

    useEffect(() => {
        setPosts(data)
    }, [data])

    useEffect(() => {
        //     search.toLowerCase() will be an empty string, since the search term is empty.
        // ''(empty string) is included in every string, so('some string').includes('') will return true.
        const filteredResults = posts.filter(post => ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()))
        setSearchResults(filteredResults.reverse())
    }, [posts, search])
    return (
        <DataContext.Provider value={{
            posts, searchResults, search, fetchError, data, loading, postTitle, postBody, editBody, editTitle,
            handleDelete, handleEdit, handleSubmit
        }}>
            {children}
        </DataContext.Provider>
    )
}