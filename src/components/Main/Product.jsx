import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const Product = ({ product }) => {

  return (
    <Card className="my-2"style={{ minWidth: "400px", maxWidth: "400px" }}>
        <Card.Img variant="top" src={`/images/${product.productId}.jpg`}/>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            Pris: {product.price} kr
            </Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>
        </Card.Body>
    </Card>
  );
};

export default Product;

