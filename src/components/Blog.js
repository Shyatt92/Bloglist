import React, { useState, useEffect } from 'react'
import Togglable from './Togglable'
import blogService from '../services/blogs'

const Blog = ({ blog }) => {
  const [liked, setLiked] = useState(false)
  const [visible, setVisible] = useState(true)
  const [effectTrigger, setEffectTrigger] = useState('')

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    paddingBottom: 10,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  useEffect(() => {
    const likedBlog = window.localStorage.getItem(`liked${effectTrigger}`)
    if (likedBlog) {
      setVisible(false)
    }
  }, [effectTrigger])

  const likeButtonStyle = { display: visible? '': 'none' }

  const toggleLiked = () => {
    setLiked(!liked)
  }

  const toggleEffectTrigger = () => {
    setEffectTrigger(blog.id)
  }

  const incrementLikes = async (event) => {
    await blogService.update({
      user: blog.user,
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      id: blog.id
    })

    window.localStorage.setItem(
      `liked${blog.id}`, true
    )

    blog.likes += 1
    
    toggleEffectTrigger()
    toggleLiked()
  }

  return (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <Togglable buttonLabel="View" buttonHide="Hide">
        {blog.url}<br />
        likes {blog.likes} <button onClick={incrementLikes} style={likeButtonStyle}>Like</button><br />
        {blog.user.name}<br />
      </Togglable>
    </div>
  )
}

export default Blog
