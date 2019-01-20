import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom'
import { Menu, Divider } from 'semantic-ui-react'



class Navbar extends Component {
  render() {
    return (
      <Fragment>
      <div className='container'>
        <Menu pointing secondary>
          <Menu.Item as={NavLink} exact to='/'>
            Home
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            
            to='/leaderboard'
            >
            Leader Board
          </Menu.Item>
        </Menu>
        <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
        <NavLink  to='/leaderboard' activeClassName='selected'>Leader Board</NavLink>
      </div>
      <Divider />
      </Fragment>
    )
  }
}

function mapStateToProps({match}) {
  return {
    match
  }
}

export default connect()(Navbar)
