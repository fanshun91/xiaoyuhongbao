import { fromJS } from 'immutable'

const defaultState = fromJS({
  info: null
})

export default (state = defaultState, action) => {
  return state
}