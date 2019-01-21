import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Header} from 'semantic-ui-react'
import Questions from './components/Questions';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import LeaderBoard from './components/LeaderBoard';



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
        
          <Route path='/' exact component={Dashboard} />
          <Route path='/leaderboard'  component={LeaderBoard} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
