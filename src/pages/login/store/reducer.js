import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  isLogin: false
})

export default (state = defaultState, action) => {
  if (action.type === types.CHANGE_LOGIN_STATUS) {
    return state.set('isLogin', action.status)
  }
  return state
}