import Radium from 'radium'
import React, { Component, PropTypes } from 'react'
import ServerList from '../components/ServerList'

import styles from './App.styles.js'

@Radium
class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <ServerList />
        <div style={[ styles.body ]}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
