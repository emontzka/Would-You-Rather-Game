import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Select, Grid, Header, Segment } from 'semantic-ui-react'
import { LoginAuthedUser } from '../actions/authedUser';


class Login extends Component {
  state = {value : ''}
  handleChange = (e, { value }) => this.setState({ value })
  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.props.dispatch(LoginAuthedUser(value));

  }


  render() {
    const {userArray} = this.props;
    const {value} = this.state;
    return (
      <Grid verticalAlign='middle' style={{ height: '100vh', justifyContent: 'center' }}>
        <Grid.Column style={{ maxWidth: 500 }}>
        <Form size='large' onSubmit={this.handleSubmit}>
        <Segment>
          <Header as='h2'>
          Would You Rather App
          </Header>
          <p>Please Sign In</p>
          <Form.Field>
            <Select placeholder='Select User'  onChange={this.handleChange} options={this.props.userArray} />
          </Form.Field>
          <Form.Button color='green' disabled={value === ''} type='submit'>Login</Form.Button>
          </Segment>
        </Form>
        </Grid.Column>
      </Grid>
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
  return {
    userArray: userOptions,
    authedUser
  }
}

export default connect(mapStateToProps)(Login)
