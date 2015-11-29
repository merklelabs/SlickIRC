import Radium from 'radium'
import React, { Component, PropTypes} from 'react'
import ServerList from '../components/ServerList'
import DevTools from './DevTools'

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
        <DevTools />
      </div>
    )
  }
}

export default App
