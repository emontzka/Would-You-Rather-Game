import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Button } from 'semantic-ui-react';
import QuestionListItem from './QuestionListItem';

class Questions extends Component {
  state = {
    showUnanswered: true
  }
  toggleDisplay = () => {
    this.setState((prevState) => ({
      showUnanswered: !prevState.showUnanswered
    }))
  }
  render() {
    
    const {questionIds, authedUser } = this.props
    const { showUnanswered } = this.state
    const btnText = showUnanswered ? 'Answered' : 'Unanswered';
    const questionList = showUnanswered
    ? questionIds.filter(id => authedUser.answers[id] === undefined)
    : questionIds.filter(id => authedUser.answers[id] !== undefined);
    return (
      <div className='container'>
        <Button onClick={this.toggleDisplay}>Show {btnText} Questions</Button>
        <ul>
        {questionList.map( question => {
          return <QuestionListItem key={question} id={question} />
        })}
        
        
        </ul>
      </div>
    )
  }
}

function mapStateToProps({questions, authedUser, users }) {
  return {
    authedUser: users[authedUser],
    questionIds: Object.keys(questions),
    
  }
}


export default connect(mapStateToProps)(Questions)
