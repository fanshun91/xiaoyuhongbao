import * as types from './actionCreators'

export const changeLoginStatus = status => ({
  type: types.CHANGE_LOGIN_STATUS,
  status
})