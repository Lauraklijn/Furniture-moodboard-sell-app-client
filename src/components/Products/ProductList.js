import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardColumns } from "react-bootstrap";

function ProductList(props) {
  return (
    <div>
      <CardColumns className="mt-5">
        {props.products &&
          props.products.length > 0 &&
          props.products.map(product => {
            return (
              <Card border="dark" style={{ width: "18rem" }} key={product.id}>
                <Card.Body>
                  <Card.Img variant="top" src={product.description} />
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <li>{product.image}</li> <li>€{product.price}</li>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </CardColumns>
    </div>
  );
}

export default ProductList;
