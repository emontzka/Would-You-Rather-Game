import { saveQuestion } from '../utils/api';
import  {addQuestionToUser} from './users';
// import { browserHistory } from 'react-router-dom';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION_TO_QUESTIONS = 'ADD_QUESTION_TO_QUESTIONS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'




export function receiveQuestions ( questions ) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function answerQuestion ( { authedUser, qid, answer} ) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAskQuestion (question) {
  return (dispatch) => {
    return saveQuestion( question )
    .then((res) => {
      console.log(res)
      dispatch(addQuestionToQuestions(res))
      dispatch(addQuestionToUser(res))
      // console.log(browserHistory)

    })
    // .then(() => {
    //   dispatch(push('/'))
    // })
  }
}

export function addQuestionToQuestions (question) {
  return {
    type: ADD_QUESTION_TO_QUESTIONS,
    question
  }
}