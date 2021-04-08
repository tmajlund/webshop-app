import React, { useEffect } from "react";
import { useWebshop } from '../../contexts/WebshopContext';
import Product from './Product';
import CardDeck from "react-bootstrap/CardDeck";

export default function Shoes(){
    
    const {products, getAllProducts} = useWebshop();

    let shoesArray;

    useEffect(() => {
        getAllProducts();
    }, [])

    if(products)
    {
        shoesArray = products.map((product) => {
            if(product.category === 'Skor')
            {
                return <Product product={product} key={product.productId} />
            }
        });
    }

    return(
        <div className="mx-auto my-5" style={{ width: "80%" }}>
            <CardDeck>{shoesArray}</CardDeck>
        </div>
    )
}