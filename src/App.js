import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Questions from './components/Questions';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Dashboard />
          {/* <Questions />
          <Login /> */}
          Hello.
        </div>
      </Router>
    );
  }
}

export default connect()(App);
