import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Segment, Grid, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class QuestionListItem extends Component {
 
  render() {
    console.log(this.props)
    const {author, optionOne, optionTwo} = this.props.question;
    return (
      <li>
        <p>{author} asks:</p>
        <h2>Would You Rather</h2>

        <Link to={`/questions/${this.props.id}`}>
          <Segment>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <p >{optionOne.text}</p>
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <p>{optionTwo.text}</p>
              </Grid.Column>            
            </Grid>
            <Divider vertical>Or</Divider>
          </Segment>
        </Link>

      </li>
    )
  }
}

//question, 
function mapStateToProps({users,questions, authedUser },ownProps){
  const question = questions[ownProps.id]

  return {
    question,
    authedUser
  }
}



export default connect(mapStateToProps)(QuestionListItem)
