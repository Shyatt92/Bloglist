import React from 'react'
import Notifications from './Notifications'

const LoginForm = ({ handleLogin, username, setUsername, password, setPassword, message }) => {
  return (
    <div>
      <h1>Login to Application</h1>
      <Notifications
      message={message}
      />
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
        id="username"
        type="text"
        value={username}
        name="Username"
        onChange={setUsername}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
        id="password"
        type="password"
        value={password}
        name="Password"
        onChange={setPassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm