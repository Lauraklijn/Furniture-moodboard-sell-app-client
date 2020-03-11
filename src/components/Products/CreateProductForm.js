import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../../product/product-action";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import AddPhoto from "../components/AddPhoto";

class CreateProductForm extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    price: ""
  };

  // handleImageState = imageUrl => {
  //   console.log("WHAT IS ImgURL?", imageUrl);
  //   console.log("WHAT IS THIS", this.handleImageState);
  //   this.setState({ image: imageUrl });
  //   console.log("CHeck state", this.state);
  // };

  handleSubmit = event => {
    event.preventDefault();
    // console.log("Im Creating a product", this.state);
    // console.log("WHAT IS PROPS", this.props);
    // if (!this.state.name || !this.state.image) {
    //   alert("Please fill in the form");
    //   return;
    // }
    const userId = this.props.props.match.params.id;

    this.props.createProduct(
      this.state.title,
      this.state.description,
      this.state.image,
      this.state.price,
      userId
    );

    this.setState({
      title: "",
      description: "",
      image: "",
      price: ""
    });
  };

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("PROPSSSSSSS", this.props);

    return (
      <div>
        {" "}
        <h1>Create a product to sell</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleInputs}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Give an discription of your product"
              value={this.state.description}
              onChange={this.handleInputs}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="€"
              value={this.state.price}
              onChange={this.handleInputs}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            {/* <Form.Control
              type="text"
              name="image"
              placeholder="Add image"
              value={this.state.image}
              onChange={this.handleInputs}
              //handleImageState={this.handleImageState}
            /> */}

            <Form.Control
              type="text"
              name="image"
              placeholder="Add image"
              value={this.state.image}
              onChange={this.handleInputs}
            />
            <Button type="submit" value="Submit" variant="dark">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default connect(null, { createProduct })(CreateProductForm);
