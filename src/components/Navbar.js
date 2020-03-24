import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavbarContainer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          {" "}
          <img
            src="https://cdn.dribbble.com/users/17577/screenshots/1478281/furniture.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Userpage"
          />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/userprofile/:id">My Profile</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/create-moodboard">moodboard</Nav.Link>
          <Nav.Link href="/create-account">Create page</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

// <Route exact path="/login" component={Login} />
// <Route exact path="/" component={Homepage} />
// <Route exact path="/create-account" component={CreateAccount} />

// <Route exact path="/signup" component={SignupForm} />
// <Route exact path="/create-moodboard" component={CreateMoodboard} />

// <Route exact path="/test" component={TestPage} />
// <Route exaxt path="/userprofile/:id" component={UserPage} />
