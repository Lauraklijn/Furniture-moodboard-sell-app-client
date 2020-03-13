import React, { Component } from "react";
import { connect } from "react-redux";
import { createAccount } from "../user/user-action";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddPhoto from "../components/AddPhoto";

class CreateAccountForm extends Component {
  state = {
    name: "",
    image: "",
    discription: ""
  };

  handleImageState = imageUrl => {
    console.log("WHAT IS ImgURL?", imageUrl);
    console.log("WHAT IS THIS", this.handleImageState);
    this.setState({ image: imageUrl });
    console.log("CHeck state", this.state);
  };

  handleSubmit = account => {
    account.preventDefault();
    console.log("Im Creating a account", this.state);
    if (!this.state.name || !this.state.image) {
      alert("Please fill in the form");
      return;
    }

    this.props.dispatch(
      createAccount(
        this.state.name,
        this.state.image,
        this.state.discription,

        this.props.history
      )
    );

    this.setState({ value: account.target.value });
  };

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {" "}
        <h1>Create your user-account</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleInputs}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>discription</Form.Label>
            <Form.Control
              type="text"
              name="discription"
              placeholder="Give an discription of your account"
              value={this.state.discription}
              onChange={this.handleInputs}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <AddPhoto
              type="text"
              name="image"
              placeholder="Add image"
              value={this.state.image}
              onChange={this.handleInputs}
              handleImageState={this.handleImageState}
            />

            {/* <Form.Control
              type="text"
              name="image"
              placeholder="Add image"
              value={this.state.image}
              onChange={this.handleInputs}
            /> */}
            <Button type="submit" value="Submit" variant="dark">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default connect()(CreateAccountForm);
