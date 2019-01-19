import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Select, Button } from 'semantic-ui-react'
import { LoginAuthedUser } from '../actions/authedUser';


class Login extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.props.dispatch(LoginAuthedUser(value));
    console.log(value);

  }


  render() {
    // console.log(this.props.users)
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Select placeholder='Select User'  onChange={this.handleChange} options={this.props.userArray} />
          </Form.Field>
          <Form.Button type='submit'>Login</Form.Button>
        </Form>
        
        {/* {this.props.authedUser === null && "is null"} */}
      </div>
    )
  }
}

function mapStateToProps({users, authedUser}) {
  // format user data for select box
  const userOptions = Object.keys(users).map(user => {
    return { 
      key: users[user].id,
      text: users[user].name,
      value: users[user].id
    }
  })
  // console.log('options: ',userOptions)
  return {
    userArray: userOptions,
    authedUser
  }
}

export default connect(mapStateToProps)(Login)
