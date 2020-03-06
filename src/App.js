import React, { Component } from "react";
//import { Image, CloudinaryContext } from "cloudinary-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { connect } from "react-redux";
import CreateMoodboard from "../src/components/CreateMoodboard";
import "./App.css";
import TestPage from "./components/DnDgrit/TestPage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Router>
          <Route exact path="/" component={CreateMoodboard} />

          <Route exact path="/test" component={TestPage} />
        </Router>
      </div>
    );
  }
}

export default App;
