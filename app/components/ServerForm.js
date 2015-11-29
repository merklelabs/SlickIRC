import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './ServerForm.styles'

export default class ServerForm extends Component {
  render() {
    return (
      <div>
        <h2 style={ styles.heading }>Add Server</h2>
        <p>Add an IRC server to get started.</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Server address" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Add Server" />
        </form>
      </div>
    )
  }
}
