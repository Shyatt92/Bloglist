import React from 'react'

const CreateBlog = ({ title, setTitle, author, setAuthor, url, setUrl, addBlog }) => {
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
        onChange={setTitle}
        />
        <br />
        <br />
        <label htmlFor="author">Author:</label>
        <input
        id="author"
        type="text"
        name="Author"
        value={author}
        onChange={setAuthor}
        />
        <br />
        <br />
        <label htmlFor="url">URL:</label>
        <input
        id="url"
        type="text"
        name="URL"
        value={url}
        onChange={setUrl}
        />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateBlog