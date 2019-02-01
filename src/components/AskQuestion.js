import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { handleAskQuestion } from '../actions/questions';
import { withRouter } from 'react-router-dom';


class AskQuestion extends Component {
  state={
    optionOneText: '',
    optionTwoText: ''
  }
  handleChange = (e) => {
    const option = e.target.name;
    this.setState(({
      [option]: e.target.value
    }));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch, authedUser, history} = this.props
    const author = authedUser;
    const {optionOneText, optionTwoText} = this.state;
    console.log('au: ',author)
    dispatch(handleAskQuestion({optionOneText,optionTwoText,author}))
    .then(() => {history.push('/')})


  }
  render() {
    const IsDisabled = this.state.optionOneText !== '' && this.state.optionTwoText !== '';
    console.log('ask answer props: ',this.props)
    return (
      <div className='ui text container'>
      <Segment>
      <h2>Would You Rather:</h2>
        <Form onSubmit={this.handleSubmit} style={{maxWidth: '450px', margin: '0 auto'}}>
          <Form.Input 
            label='First Option' 
            name='optionOneText'
            placeholder='Do this' 
            onChange={this.handleChange}
            value={this.state.optionOneText}
           />
          <Form.Input 
          label='Second Option'
          name='optionTwoText'
          placeholder='Do that'
          onChange={this.handleChange}
          value={this.state.optionTwoText}
          />
          <Form.Button color='green' disabled={!IsDisabled}>Submit Question</Form.Button>
        </Form>
        </Segment>
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}
export default withRouter(connect(mapStateToProps)(AskQuestion))