export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function receiveUsers ( users ) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
export function userAnswerQuestion ( {authedUser, qid, answer } ) {
  return {
    type: USER_ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function addQuestionToUser ( question ) {
  return {
    type: ADD_QUESTION_TO_USER,
    question
  }
}