export const ADD_SERVER = 'ADD_SERVER'
export const UPDATE_SERVER = 'UPDATE_SERVER'

export function add({ values }) {
  return {
    type: ADD_SERVER,
    values
  }
}
