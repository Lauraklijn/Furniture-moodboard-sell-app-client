import React, { Component } from "react";
//import { Image, CloudinaryContext } from "cloudinary-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CreateMoodboard from "../src/components/CreateMoodboard";
import "./App.css";
import TestPage from "./components/DnDgrit/TestPage";
import SignupForm from "../src/components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../src/components/Homepage";
import Login from "../src/components/Login";
import CreateAccount from "./components/CreateAccount";
import UserPage from "./components/UserPage";
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
          <nav>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/signup">
              <li>Sign up!</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/create-moodboard">
              <li>Create Moodboard</li>
            </Link>
            <Link to="/create-account">
              <li>Create User-account</li>
            </Link>
          </nav>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/create-account" component={CreateAccount} />

          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/create-moodboard" component={CreateMoodboard} />

          <Route exact path="/test" component={TestPage} />
          <Route exaxt path="/userprofile/:id" component={UserPage} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
