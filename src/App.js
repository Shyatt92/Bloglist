import React, { useState, useEffect } from 'react'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notifyMessage, setNotifyMessage] = useState({
    message: null,
    status: '',
  });

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      setNotifyMessage({
        message: `${user.name} has been logged in.`,
        status: 'success'
      })
      setTimeout(() => {
        setNotifyMessage({
          message: null,
          status: ''
        })
      }, 5000)
    } catch (error) {
      setNotifyMessage({
        message: error.response.data.error,
        status: 'error'
      })
      setTimeout(() => {
        setNotifyMessage({
          message: null,
          status: ''
        })
      }, 5000)
    }
  }

  const handleLogout = event => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBlogUser')
    setUser(null)
  }

  const addBlog = async (blogObject) => {
    try {
      const result = await blogService.create(blogObject)

      setBlogs(blogs.concat(result))
      setNotifyMessage({
        message: `A new blog: '${blogObject.title}' by ${blogObject.author} was added!`,
        status: 'success'
      })
      setTimeout(() => {
        setNotifyMessage({
          message: null,
          status: ''
        })
      }, 5000)
    } catch (error) {
      setNotifyMessage({
        message: error.response.data.error,
        status: 'error'
      })
      setTimeout(() => {
        setNotifyMessage({
          message: null,
          status: ''
        })
      }, 5000)
    }  
  }

  return (
    <div>
    {user === null
      ? <LoginForm
        handleLogin={handleLogin}
        setUsername={({ target }) => setUsername(target.value)}
        setPassword={({ target }) => setPassword(target.value)}
        username={username}
        password={password}
        message={notifyMessage}
        />
      : <BlogForm
        blogs={blogs}
        user={user}
        handleLogout={handleLogout}
        addBlog={addBlog}
        message={notifyMessage}
        />
    }
    </div>
  )
}

export default App