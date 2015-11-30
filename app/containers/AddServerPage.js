import React, { Component } from 'react'
import ServerForm from '../components/ServerForm'

class AddServerPage extends Component {
  render() {
    return <div>
      <h2>Add Server</h2>
      <p>Add an IRC server to get started.</p>
      <ServerForm />
    </div>
  }
}

export default AddServerPage
