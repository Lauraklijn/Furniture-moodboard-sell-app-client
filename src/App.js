import React, { Component } from "react";
//import { Image, CloudinaryContext } from "cloudinary-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import NavbarContainer from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavbarContainer />

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

const mapStateToProps = state => {
  console.log("STATE (mapSTATETOTPROPS", state.userData);
  return {
    userLoggedIn: state.userData
  };
};

export default connect(mapStateToProps)(App);
