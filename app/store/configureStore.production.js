import { createStore, applyMiddleware, compose } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  persistState({ paths: 'servers' }),
  applyMiddleware(thunk)
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
