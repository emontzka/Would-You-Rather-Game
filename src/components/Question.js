import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'
import ErrorPage from './ErrorPage';

class Question extends Component {
  

  render() {
    console.log('logging user prop in render: ', this.props.user)
    if (this.props.user !== undefined) {
      const {user, questionId, questions} = this.props
      const isQuestionValid = Object.keys(questions).includes(questionId)
      const notAnswered = Object.keys(user.answers).includes(questionId);
      // if ( isQuestionValid === false) {
      //   return <ErrorPage />
      // }
      
    }
    
    // {this.props.user === undefined ? console.log('undefined') : console.log('user: ', this.props.user.answers)}

    return (
      
      // { !(Object.keys(questions).includes(questionId)) && return <ErrorPage /> }
      <div>
       
        {/* {Object.keys(user).map((us) => {
          return console.log(us)
        })} */}
        {/* {user !== undefined && console.log(user.questions)} */}
        {/* {question === null && <Redirect to='/404-page' />} */}
        {/* const userQuestions = Object.values(user.questions) */}
        {/* { user !== undefined && console.log(Object.values(user.questions))} */}
        Question component

      </div>
    )
  }
}

function mapStateToProps({authedUser,users,questions}, ownProps) {
  const {questionId} = ownProps.match.params
  const user = users[authedUser]
  console.log('logging user in mapStateToProps: ', user)
  
  // const answeredQuestions = Object.keys(users[authedUser]).includes('vthrdm985a262al8qx3do')
  // const isAnswered = Object.keys(user.answers).includes(id)
  // const question = questions[ownProps.match.params.id] === undefined ? null : questions[ownProps.match.params.id]
  return {
    authedUser,
    user,
    questionId,
    questions
  }
}

export default connect(mapStateToProps)(Question)