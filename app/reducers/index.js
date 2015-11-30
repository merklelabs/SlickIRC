import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import serversReducer from './servers'

const rootReducer = combineReducers({
  form: formReducer,
  servers: serversReducer
})

export default rootReducer
