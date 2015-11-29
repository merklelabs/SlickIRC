import Radium from 'radium'
import React, { Component, PropTypes } from 'react'
import styles from './ServerList.styles.js'
import { updatePath } from 'redux-simple-router'
import { connect } from 'react-redux'

@Radium
class ServerList extends Component {

  render() {
    return <div style={[ styles.base ]}>
      <AddButton />
    </div>
  }

}

@connect()
@Radium
class AddButton extends Component {

  render() {
    const { dispatch } = this.props

    return <button style={ styles.addButton } onClick={() => dispatch(updatePath('/servers/new'))}>
      <i className="fa fa-plus fa-2x"></i>
    </button>
  }

}

export default ServerList
