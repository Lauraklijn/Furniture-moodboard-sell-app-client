import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../../product/product-action";
import ProductList from "../Products/ProductList";
import { loadProducts } from "../../product/product-action";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import AddPhoto from "../components/AddPhoto";
import Card from "react-bootstrap/Card";

class CreateProductForm extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    price: ""
  };

  componentDidMount() {
    console.log("What is loadProducts?", loadProducts);
    if (this.props.match) {
      this.props.loadProducts(this.props.match.params.id);
    }
  }

  //------Feature to add photo's from browser (have to finish this one)
  // handleImageState = imageUrl => {
  //   console.log("WHAT IS ImgURL?", imageUrl);
  //   console.log("WHAT IS THIS", this.handleImageState);
  //   this.setState({ image: imageUrl });
  //   console.log("CHeck state", this.state);
  // };

  handleSubmit = event => {
    event.preventDefault();

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
        <Card style={{ color: "coral", width: "15rem" }}>
          <Card.Body>
            {" "}
            <p>Create a product to sell</p>
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
          </Card.Body>
        </Card>
        <ProductList products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("what is state (productList)", state);
  return {
    products: state.productData
  };
};

export default connect(mapStateToProps, { loadProducts, createProduct })(
  CreateProductForm
);
