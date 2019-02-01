import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import LeaderBoard from './components/LeaderBoard';
import AskQuestion from './components/AskQuestion';
import ErrorPage from './components/ErrorPage';
import Question from './components/Question';



class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    const { authedUser } = this.props
    const PrivateRoute = ( {component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        authedUser !== null 
        ? <Component {...props} />
        : <Redirect to='/' />
      )} />
    )
    
    return (
      <Router>
        <Fragment>
        <div className="App ui text container">
        {authedUser !== null && <Navbar /> }
        <Container text>
         <Switch>
            <Route path='/' exact component={Dashboard} />
            <PrivateRoute path='/leaderboard' component={LeaderBoard} />
            <PrivateRoute path='/new' component={AskQuestion} />
            <PrivateRoute path='/questions/:questionId' component={Question} />
            <Route  component={ErrorPage} />
         </Switch>
         </Container>


        </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
