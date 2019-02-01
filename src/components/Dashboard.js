import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Login from './Login';
import Questions from './Questions';

class Dashboard extends Component {
  
  render() {
    const { authedUser } = this.props
    return (
      <Fragment>

      
      {/* // <div className='ui text container'> */}
        {authedUser === null  ? (
          <Login />
        ) : (
          <Questions />
        )}
      {/* </div> */}
      </Fragment>
    )
  }
}

function mapStateToProps({authedUser}) {
 return  {authedUser} 
}

export default connect(mapStateToProps)(Dashboard)
