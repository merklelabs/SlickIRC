import { ADD_SERVER, UPDATE_SERVER } from '../actions/servers'

const defaultState = []

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_SERVER:
      return [...state, action.values]
      break;
  }
  return state
}
