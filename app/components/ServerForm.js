import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { add as addServer } from '../actions/servers'
import styles from './ServerForm.styles'

const submit = (values, dispatch) => {
  return dispatch(addServer({ values }))
}

@reduxForm({
  form: 'server',
  fields: ['name', 'address', 'username', 'password']
})
class ServerForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
  }

  render() {
    const { fields: { name, address, username, password }, handleSubmit } = this.props
    return <form onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder="Name" {...name} />
      <input type="text" placeholder="Server address" {...address} />
      <input type="text" placeholder="Username" {...username} />
      <input type="password" placeholder="Password" {...password} />
      <button onClick={handleSubmit(submit)}>Add Server</button>
    </form>
  }

}

export default ServerForm
