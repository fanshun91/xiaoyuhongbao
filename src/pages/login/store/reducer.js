import { fromJS } from 'immutable'

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  return state
}