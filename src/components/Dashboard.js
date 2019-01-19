import React, { Component } from 'react'
import { connect } from 'react-redux';
import Login from './Login';
import Questions from './Questions';

class Dashboard extends Component {
  
  render() {
    const { authedUser } = this.props
    console.log('props', authedUser)
    return (
      <div>
        Dashboard
        {authedUser === null  ? (
          <Login />
        ) : (
          <Questions />
        )}
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
 return  {authedUser} 
}

export default connect(mapStateToProps)(Dashboard)
