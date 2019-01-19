import React, { Component } from 'react'
import { connect } from 'react-redux';

class QuestionListItem extends Component {
  
  render() {
    console.log(this.props)
    return (
      <li>
        <p>{this.props.question.author} asks:</p>
        <h2>Would You Rather:</h2>
        <p>{this.props.question.optionOne.text}</p>
        <h3>Or</h3>
        <p>{this.props.question.optionTwo.text}</p>
      </li>
    )
  }
}

//question, 
function mapStateToProps({questions},ownProps){
  return {
    question: questions[ownProps.id]
  }
}



export default connect(mapStateToProps)(QuestionListItem)
