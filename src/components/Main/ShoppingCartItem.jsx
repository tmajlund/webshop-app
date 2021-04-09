import React from 'react';
import { useWebshop } from '../../contexts/WebshopContext';

export default function ShoppingCartItem({item}) {
    
    const { removeProductFromCart } = useWebshop();

    const handleClick = (e) => {
        e.preventDefault();
        removeProductFromCart(item);
    }
    
    return(
        <div className="row border-top">
            <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src={`/images/${item.productId}.jpg`} /></div>
                <div className="col">
                    <div className="row text-muted">{item.product.name}</div>
                    <div className="row">{item.size}</div>
                </div>
                <div className="col"><a href="#" className="border">{item.quantity}</a></div>
                <div className="col">SEK {item.totalPrice}<span className="close" onClick={handleClick}>&#10005;</span></div>
            </div>
        </div>
    );
}