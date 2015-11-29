import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AddServer extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Server address" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    )
  }
}
