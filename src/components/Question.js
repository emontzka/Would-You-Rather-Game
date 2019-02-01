import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'
import ErrorPage from './ErrorPage';
import AnswerQuestion from './AnswerQuestion';
import ViewQuestion from './ViewQuestion';

class Question extends Component {
  

  render() {
    // console.log('props: ', this.props)
    if (this.props.authedUser === null) {
      // console.log('not logged in, redirect to home')
    } else {
      const {user, questionId, questions, questionAuthor} = this.props
      const isQuestionValid = Object.keys(questions).includes(questionId)
      const notAnswered = Object.keys(user.answers).includes(questionId);
      // console.log(notAnswered)
      if ( isQuestionValid === false) {
      return <ErrorPage />
      }
      return (
        <div>
         {/* {console.log('not answered: ',notAnswered)} */}
         {notAnswered ? (
           <ViewQuestion question={questions[questionId]} authedUser={user} author={questionAuthor} />
         ) : (
           <AnswerQuestion  qid={questionId} />
         )}
        </div>
      )
    }
    


  }
}

function mapStateToProps({authedUser,users,questions}, ownProps) {
  const {questionId} = ownProps.match.params
  const user = users[authedUser]
  const question = questions[questionId]
  const questionAuthor = users[question.author]
  return {
    authedUser,
    user,
    questionId,
    questions,
    questionAuthor
  }
}

export default connect(mapStateToProps)(Question)