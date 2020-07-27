import React, { useState, useEffect } from 'react'

import './App.css'
import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'

let id = 1

// Why fetch ? : just want to use primative fetch from web browser Don't want to use 3rd party lib like axios yet.
// https://blog.logrocket.com/axios-or-fetch-api/#:~:text=To%20send%20data%2C%20fetch(),set%20in%20the%20options%20object
async function getPosts() {
  const posts = []
  const url = 'https://5f1e748457e32900168633e5.mockapi.io/posts'
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }

  return fetch(url, options).then((response) => {
    return response.json() // promise
  })
}

function App() {
  const [posts, setPosts] = useState([])
  // const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getPosts() // Casting from promise to json obj
      // console.log(response)
      setPosts(response)
      // setIsReady(true)
    }

    fetchMyAPI()
  }, [])

  function addPost(newPost) {
    setPosts([{ id, title: newPost }, ...posts])
    id += 1
  }

  function removePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)
  }

  return (
    <>
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          img={post.img}
          removePost={removePost}
        />
      ))}
    </>
  )
}

export default App
