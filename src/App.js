import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import CreateMoodboard from "../src/components/CreateMoodboard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Router>
          <Route exact path="/" component={CreateMoodboard} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
