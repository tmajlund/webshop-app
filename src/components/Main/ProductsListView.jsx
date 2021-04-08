import React, { useEffect } from "react";
import { useWebshop } from '../../contexts/WebshopContext';
import Product from './Product';
import CardDeck from "react-bootstrap/CardDeck";

export default function ProductsListView() {
    const { products, getAllProducts } = useWebshop();

    let productsArray;

    useEffect(() => {
        getAllProducts();
    }, []);

    if(products){
        productsArray = products.map((product) => {
            return <Product product={product} key={product.productId} />
        });
    }

    return(
        <div className="mx-auto my-5" style={{ width: "80%" }}>
            <CardDeck>{productsArray}</CardDeck>
        </div>

    )
}
