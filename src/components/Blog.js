import React, { useState } from 'react'
import Togglable from './Togglable'
import blogService from '../services/blogs'

const Blog = ({ blog, user }) => {
  const [render, setRender] = useState(false)
  const [visibleWhenBlank, setVisibleWhenBlank] = useState('')

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    paddingBottom: 10,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    display: visibleWhenBlank
  }

  const forceRender = () => {
    setRender(!render)
  }

  const incrementLikes = async (event) => {
    await blogService.update({
      user: blog.user.id,
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      id: blog.id
    })

    blog.likes += 1
    
    forceRender()
  }

  const deleteBlog = async (event) => {
    const confirm = window.confirm(`Remove blog: ${blog.title}?`)
    if (confirm) {
      await blogService.remove(blog.id)
    }
    setVisibleWhenBlank('none')
  }

  const canDelete = () => {
    return user.username === blog.user.username
      ? <button onClick={deleteBlog}>Delete</button>
      : null
  }

  return (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <Togglable buttonLabel="View" buttonHide="Hide">
        {blog.url}<br />
        likes {blog.likes} <button onClick={incrementLikes}>Like</button><br />
        {blog.user.username}<br />
        {canDelete()}
      </Togglable>
    </div>
  )
}

export default Blog
