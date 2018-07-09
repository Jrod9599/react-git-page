import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import LoadingPage from './LoadingPage';
import HomePage from './components/HomePage';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={LoadingPage} />
          <Route exact path="/HomePage" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
