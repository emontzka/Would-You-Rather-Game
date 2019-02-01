import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Select, Radio, Grid, Header, Divider, Image } from 'semantic-ui-react'
import { answerQuestion } from '../actions/questions'
import { userAnswerQuestion } from '../actions/users'
import { handleAnswerQuestion } from '../actions/shared';


class AnswerQuestion extends Component {
  state = {value: null}
  

  handleChange = (e, { value }) => this.setState({ value })
  handleSubmit = (e) => {
    e.preventDefault()
    // need authedUser, qid, option
    const { dispatch, qid, authedUser } = this.props
    const question  = this.state.value
    dispatch(handleAnswerQuestion({
      authedUser, 
      qid,
      answer: question
    }))
  }

  render() {
    // const btnColor = 'grey'
    const {value} = this.state
    const { question, users, questionAuthor } = this.props
    console.log('props: ',this.props)
    // const questionAuthor = users[question.author]
    // console.log('state length ', this.state.question !== null)
    return (
      <div className="ui text container">
        <Grid celled>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as='h3'>{questionAuthor.name} asks</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={4} verticalAlign='middle'>
              <Image src={questionAuthor.avatarURL} style={{borderRadius: '50%'}} />
            </Grid.Column>
            <Grid.Column width={12} verticalAlign='middle'>
              <Form style={{ textAlign: 'left' }} onSubmit={this.handleSubmit}>
                <Form.Field>
                  <Radio
                    label={question.optionOne.text}
                    name='radioGroup'
                    value='optionOne'
                    checked={this.state.value === 'optionOne'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label={question.optionTwo.text}
                    name='radioGroup'
                    value='optionTwo'
                    checked={this.state.value === 'optionTwo'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Button fluid color='green' disabled={value === null} content='Submit' />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({users, questions, authedUser },ownProps) {
  const {qid} = ownProps
  const question = questions[qid]
  const questionAuthor = users[question.author]
  return {
    question,
    authedUser,
    users,
    questionAuthor
  }
}

export default connect(mapStateToProps)(AnswerQuestion)