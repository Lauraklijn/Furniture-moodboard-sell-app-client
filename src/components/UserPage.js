import React from "react";
import { connect } from "react-redux";
//import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import { UserProfile } from "../user/user-action";
import CreateProductForm from "../components/Products/CreateProductForm";
import Navbar from "react-bootstrap/Navbar";
import ProductList from "./Products/ProductList";

class UserPage extends React.Component {
  componentDidMount() {
    console.log("What is UserProfile", this.props.UserProfile());
    this.props.UserProfile(this.props.match.params.id);
  }

  render() {
    console.log("profile??????????", this.props.profile);

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="profile">
            <img
              src={this.props.profile.image}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Userpage"
            />{" "}
            <a>{this.props.profile.discription}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a>{this.props.profile.name}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <CreateProductForm props={this.props} />
        <ProductList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("what is state in userPage??", state.userData.profile);
  return {
    profile: state.userData.profile
  };
};

export default connect(mapStateToProps, { UserProfile })(UserPage);
