import React, {useState, useEffect} from 'react';
import { useWebshop } from '../../contexts/WebshopContext';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown'


export default function ProductDetailView() {
    const {singleProduct, getSingleProduct, clearSingleProduct} = useWebshop();
    const {productId} = useParams();

    useEffect(() => {
        getSingleProduct(productId);

        return () => {
            clearSingleProduct();
        }
    }, [productId]);

    return(        
        <Container className="pt-4" style={{ maxWidth: "750px" }}>
            <Card className="my-2"style={{ minWidth: "500px", maxWidth: "500px" }}>
                <Card.Img variant="top" src={`/images/${singleProduct.productId}.jpg`}/>
                <Card.Body>
                <Card.Title>{singleProduct.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Pris: {singleProduct.price} kr
                </Card.Subtitle>
                <Card.Text>{singleProduct.description}</Card.Text>
                <Card.Text>Finns i storlek: {singleProduct.minSize}-{singleProduct.maxSize}</Card.Text>
                <Dropdown>
                <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdown-basic">
                    Välj storlek
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Card.Body>
            </Card>
        </Container>
    );
}
