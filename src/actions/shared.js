import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, userAnswerQuestion } from './users';
import { receiveQuestions, answerQuestion } from './questions';
import { initAuthedUser } from './authedUser';
import {showLoading, hideLoading } from 'react-redux-loading-bar'
export const TEMP_ID = 'tempId'

export function handleInitialData () {
  return(dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(initAuthedUser(TEMP_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleAnswerQuestion (info) {
  return(dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(info)
    .then(() => {
      dispatch(userAnswerQuestion(info))
      dispatch(answerQuestion(info))
    })
    .then(()=> dispatch(hideLoading()))
    .catch((e) => {
      alert('There was an error answering this question. Try again.')
    })
  }
}
