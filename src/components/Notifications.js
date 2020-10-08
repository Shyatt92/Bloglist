import React from 'react'

const Notifications = ({ message }) => {
  const notificationStyle = {
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (message.status === 'success') {
      notificationStyle.color = 'green';
  } else if (message.status === 'error') {
      notificationStyle.color = 'red';
  }

  if (message.message === null) {
      return null;
  }

  return (
      <div style={notificationStyle}>
          {message.message}
      </div>
  )
}

export default Notifications