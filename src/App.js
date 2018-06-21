import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import LoadingPage from './LoadingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={LoadingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
