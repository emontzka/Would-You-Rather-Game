export const LOGIN_AUTHED_USER = 'LOGIN_AUTHED_USER'
export const INIT_AUTHED_USER = 'INIT_AUTHED_USER'

export function LoginAuthedUser (id) {
  return {
    type: LOGIN_AUTHED_USER,
    id
  }
}

export function initAuthedUser (id) {
  return {
    type: INIT_AUTHED_USER,
    id
  }
}