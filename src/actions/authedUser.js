export const INIT_AUTHED_USER = 'INIT_AUTHED_USER'

export function initAuthedUser (id) {
  return {
    type: INIT_AUTHED_USER,
    id
  }
}