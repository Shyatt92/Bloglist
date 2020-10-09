import React from 'react'
import Blog from './Blog'
import CreateBlog from './CreateBlog'
import Notifications from './Notifications'
import Togglable from './Togglable'

const BlogForm = ({ blogs, user, handleLogout, addBlog, message }) => {
  return (
    <div>
      <h1>Blogs</h1>
      <Notifications
      message={message}
      />
      <span>{user.name} logged in</span>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <Togglable buttonLabel="Create Blog" buttonHide="Cancel">
        <CreateBlog
        createBlog={addBlog}
        />
      </Togglable>
      <br />
      {blogs.sort((a, b) => {
        return b.likes - a.likes
      }).map(blog =>
        <Blog key={blog.id} blog={blog} user={user} />
      )}
    </div>
  )
}

export default BlogForm