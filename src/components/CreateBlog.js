import React, { useState } from 'react'

const CreateBlog = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const addBlog = async (event) => {
    event.preventDefault()

    await createBlog({
      title,
      author,
      url
    })

    setTitle('')
    setAuthor('')
    setUrl('')
  }
  
  return (
    <div>
      <h2>Create New Blog</h2>
      <form onSubmit={addBlog}>
        <label htmlFor="title">Title:</label>
        <input
        id="title"
        type="text"
        name="Title"
        value={title}
        onChange={handleTitleChange}
        />
        <br />
        <br />
        <label htmlFor="author">Author:</label>
        <input
        id="author"
        type="text"
        name="Author"
        value={author}
        onChange={handleAuthorChange}
        />
        <br />
        <br />
        <label htmlFor="url">URL:</label>
        <input
        id="url"
        type="text"
        name="URL"
        value={url}
        onChange={handleUrlChange}
        />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateBlog