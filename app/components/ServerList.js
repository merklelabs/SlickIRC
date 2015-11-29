import Radium from 'radium'
import { Link } from 'react-router'
import React, { Component, PropTypes } from 'react'
import styles from './ServerList.styles.js'
import { connect } from 'react-redux'

@Radium
class ServerList extends Component {

  render() {
    return <div style={ styles.base }>
      <AddButton />
    </div>
  }

}

@connect()
@Radium
class AddButton extends Component {

  render() {
    const { dispatch } = this.props

    return <Link to="/servers/new">
      <button style={ styles.addButton }>
        <i className="fa fa-plus fa-2x"></i>
      </button>
    </Link>
  }

}

export default ServerList
