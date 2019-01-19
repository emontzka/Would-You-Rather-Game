import { INIT_AUTHED_USER, LOGIN_AUTHED_USER } from "../actions/authedUser";


export default (state = null, action) => {
  switch (action.type) {
  case INIT_AUTHED_USER :
    return action.id
  case LOGIN_AUTHED_USER :
    return action.id
  default:
    return state
  }
}
