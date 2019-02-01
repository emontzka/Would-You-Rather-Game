import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { initAuthedUser } from '../actions/authedUser';



class Navbar extends Component {
  logOut = (e) => {
    e.preventDefault()
    console.log('logout')
    this.props.dispatch(initAuthedUser(null))
  }
  render() {
    return (
      <div className='container'>
        <Menu pointing secondary>
          <Menu.Item as={NavLink} activeClassName='active'  exact to='/'>
            Home
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            activeClassName='active' 
            to='/leaderboard'
            >
            Leader Board
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            activeClassName='active' 
            to='/new'
            >
            New Question
          </Menu.Item>          
          <Menu.Menu position='right'>
          <Menu.Item as={Link} to='/'>
            {this.props.authedUser === null 
              ? <span>Log in</span>
              : <span onClick={this.logOut}>Log out {this.props.users[this.props.authedUser].name}</span>}
          </Menu.Item>
          </Menu.Menu>

        </Menu>

      </div>
   
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    authedUser,
    users 
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))
