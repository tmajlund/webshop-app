import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const Product = ({ product }) => {

  return (
    <Card className="mx-auto"style={{ minWidth: "300px", maxWidth: "300px"}}>
        <Card.Img variant="top" src={`/images/${product.productId}.jpg`}/>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Pris: {product.price} kr
            </Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>
            <Card.Link as={Link} to={`/product/${product.productId}`}>
              Visa
            </Card.Link>
        </Card.Body>
    </Card>
  );
};

export default Product;

