import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/servers/new">to Server</Link>
      </div>
    )
  }
}
