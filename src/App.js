import React, { Component } from "react";
//import { Image, CloudinaryContext } from "cloudinary-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import CreateMoodboard from "../src/components/CreateMoodboard";
import "./App.css";
import TestPage from "./components/DnDgrit/TestPage";
import SignupForm from "../src/components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../src/components/HomePage";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Router>
          <Route exact path="/" component={CreateMoodboard} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/signup" component={SignupForm} />

          <Route exact path="/test" component={TestPage} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
