import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useWebshop } from '../../contexts/WebshopContext';
import ShoppingCartItem from './ShoppingCartItem';

export default function ShoppingCart() {
    const {shoppingCart, loggedIn, user, postOrder} = useWebshop();
    let history = useHistory();
    const[error, setError] = useState("");

    let cartProducts;
    let totalPrice;

    if(shoppingCart)
    {
        cartProducts = shoppingCart.map((item) => {
            return <ShoppingCartItem item={item} key={item.productId} />
        });

        totalPrice = shoppingCart.reduce((prev, cur) => prev + cur.totalPrice, 0);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if(!loggedIn)
        {
            history.push("/login")
            return;
        }
        let date = new Date();

        let newOrder = {
            userId:  `${user.userId}`,
            orderDate: `${date.toLocaleDateString()}`,
            sumTotal: `${totalPrice}`
        }

        let response = await postOrder(newOrder);
        console.log(response);
    }

    return(
        <>
        <div className="card" id="outer-div-cart">
            <div className="row" id="outer-row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col">
                                <h4><b>Varukorg</b></h4>
                            </div>
                            <div className="col align-self-center text-right text-muted">{shoppingCart.length} varor</div>
                        </div>
                    </div>
                    {cartProducts}
                </div>
                <div className="col-md-4 summary">
                    <div>
                        <h5><b>Summering</b></h5>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">Antal varor: {shoppingCart.length}</div>
                        <div className="col text-right">SEK {totalPrice}</div>
                    </div>
                    <hr />
                    <div className="row" style={{ padding: "2vh 0"}}>
                        
                        <div className="col">Totalpris</div>
                        <div className="col text-right">SEK {totalPrice}</div>
                    </div> 
                    <div className="col text-center">
                        <Button variant="btn btn-outline-secondary" onClick={handleClick}>Beställ</Button>
                    </div>

                    
                </div>
            </div>
        </div> 
        </>
    );
}