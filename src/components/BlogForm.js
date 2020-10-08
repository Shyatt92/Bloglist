import React from 'react'
import Blog from './Blog'
import CreateBlog from './CreateBlog'
import Notifications from './Notifications'

const BlogForm = ({ blogs, user, handleLogout, title, setTitle, author, setAuthor, url, setUrl, addBlog, message }) => {
  return (
    <div>
      <h1>Blogs</h1>
      <Notifications
      message={message}
      />
      <span>{user.name} logged in</span>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <CreateBlog
      title={title}
      setTitle={setTitle}
      author={author}
      setAuthor={setAuthor}
      url={url}
      setUrl={setUrl}
      addBlog={addBlog}
      />
      <br />
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default BlogForm