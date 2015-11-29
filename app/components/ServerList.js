import Radium from 'radium'
import { Link } from 'react-router'
import React, { Component, PropTypes } from 'react'
import styles from './ServerList.styles.js'

@Radium
class ServerList extends Component {

  render() {
    return <div style={ styles.base }>
      <AddButton />
    </div>
  }

}

@Radium
class AddButton extends Component {

  render() {
    return <Link to="/servers/new">
      <button style={ styles.addButton }>
        <i className="fa fa-plus fa-2x"></i>
      </button>
    </Link>
  }

}

export default ServerList
