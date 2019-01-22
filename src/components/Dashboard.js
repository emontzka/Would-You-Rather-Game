import React, { Component } from 'react'
import { connect } from 'react-redux';
import Login from './Login';
import Questions from './Questions';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
  
  render() {
    const { authedUser } = this.props
    console.log('props', authedUser)
    return (
      <div className='container'>
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

export default withRouter(connect(mapStateToProps)(Dashboard))
