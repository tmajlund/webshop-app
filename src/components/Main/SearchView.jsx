import React, { useEffect } from "react";
import { useWebshop } from '../../contexts/WebshopContext';
import Product from './Product';
import CardDeck from "react-bootstrap/CardDeck";

export default function SearchView() {

    const { products } = useWebshop();

    let productsArray;

    if(products)
    {
        productsArray = products.map((product) => {
            return <Product product={product} key={product.productId} />
        })
    }

    useEffect(() => {}, [products]);

    return(
        <div className="mx-auto my-5" style={{ width: "70%" }}>
            <CardDeck>{productsArray}</CardDeck>
        </div>
    )
}