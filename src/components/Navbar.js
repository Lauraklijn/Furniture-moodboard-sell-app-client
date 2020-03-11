import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class NavbarContainer extends Component {
  render() {
    console.log("WHAT IS STATE???", this.state);
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/userprofile/:id">My Profile</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/create-moodboard">moodboard</Nav.Link>
            <Nav.Link href="/create-account">Create page</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

// <Route exact path="/login" component={Login} />
// <Route exact path="/" component={Homepage} />
// <Route exact path="/create-account" component={CreateAccount} />

// <Route exact path="/signup" component={SignupForm} />
// <Route exact path="/create-moodboard" component={CreateMoodboard} />

// <Route exact path="/test" component={TestPage} />
// <Route exaxt path="/userprofile/:id" component={UserPage} />
