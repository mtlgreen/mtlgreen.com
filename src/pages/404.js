import React, { Component } from 'react'

class NotFoundPage extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h3>404 Error</h3>
        <h5>It looks like this page does not exist</h5>
      </div>
    )
  }
}

export default NotFoundPage
