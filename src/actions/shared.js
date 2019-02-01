import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, userAnswerQuestion } from './users';
import { receiveQuestions, answerQuestion } from './questions';
import { initAuthedUser } from './authedUser';


const AUTHED = 'sarahedo' // for development only
export function handleInitialData () {
  return(dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(initAuthedUser(null))
      })
  }
}

export function handleAnswerQuestion (info) {
  return(dispatch) => {
    return saveQuestionAnswer(info)
    .then(() => {
      dispatch(userAnswerQuestion(info))
      dispatch(answerQuestion(info))
    })
    .catch((e) => {
      alert('There was an error answering this question. Try again.')
    })
  }
}
