import React, { Component, PropTypes} from 'react'
import ServerList from '../components/ServerList'
import DevTools from './DevTools'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <ServerList />
        <div className="body">
          {this.props.children}
        </div>
        <DevTools />
      </div>
    )
  }
}

