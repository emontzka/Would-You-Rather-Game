import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { connect } from 'react-redux'
import { handleInitialData, TEMP_ID } from './actions/shared';
import { Container } from 'semantic-ui-react';
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar';
import LeaderBoard from './components/LeaderBoard';
import AskQuestion from './components/AskQuestion';
import ErrorPage from './components/ErrorPage';
import Question from './components/Question';
import Questions from './components/Questions';
import Login from './components/Login';




class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    const { hasTempId, loading } = this.props
    const PrivateRoute = ( {component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        (!hasTempId && !loading)
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )} />
    )
    
    return (
      <Router>
        <Fragment>
        <LoadingBar />
        <Container text className='App'>
        
        {!loading && !hasTempId && <Navbar /> }
        {loading === true
        ? null
      : 
         <Switch>
            <PrivateRoute path='/leaderboard' component={LeaderBoard} />
            <PrivateRoute path='/new' component={AskQuestion} />
            <PrivateRoute path='/questions/:questionId' component={Question} />
            <PrivateRoute path='/' exact component={Questions} />
            <Route path='/login' component={Login} />
            <Route  component={ErrorPage} />
         </Switch>
         }


        </Container>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    hasTempId : authedUser === TEMP_ID,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
