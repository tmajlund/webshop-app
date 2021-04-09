import React from 'react';
import { useWebshop } from '../../contexts/WebshopContext';

export default function ShoppingCartHeader(){
    const { shoppingCart } = useWebshop();
    return(
        <>
            Varukorg({shoppingCart.length})
        </>
    )
}