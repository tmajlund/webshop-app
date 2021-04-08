import React, { useEffect } from "react";
import { useWebshop } from '../../contexts/WebshopContext';
import Product from './Product';
import CardDeck from "react-bootstrap/CardDeck";

export default function Clothes(){

    const {products, getAllProducts} = useWebshop();

    let clothesArray;

    useEffect(() => {
        getAllProducts();
    }, [])

    if(products)
    {
        clothesArray = products.map((product) => {
            if(product.category === 'Tröjor')
            {
                return <Product product={product} key={product.productId} />
            }
        });
    }

    return(
        <div className="mx-auto my-5" style={{ width: "80%" }}>
            <CardDeck>{clothesArray}</CardDeck>
        </div>
    )
}