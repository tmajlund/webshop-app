import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import GETProductById from '../apicalls/GETProductById';
import GETProducts from '../apicalls/GETProducts';
import GETUserByLoginCredentials from '../apicalls/GETUserByLoginCredentials';
import POSTOrder from '../apicalls/POSTOrder';
import POSTOrderDetails from '../apicalls/POSTOrderDetails';
import POSTUser from '../apicalls/POSTUser';
import ProductSizes from '../functions/ProductSizes';

const WebshopContext = createContext();

export function useWebshop() {
    return useContext(WebshopContext);
}

export function WebshopProvider({children}) {
    const [products, setProducts] = useState("");
    const [singleProduct, setSingleProduct] = useState("");
    const [productSizes, setProductSizes] = useState("");
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [orderMade, setOrderMade] = useState("");
    let history = useHistory();

    const getAllProducts = async () => {
        let productArray = await GETProducts();
        await productArray.sort((a,b) => (b.category > a.category) ? 1 : -1)
        setProducts(await productArray);
    }

    const searchProducts = async (searchString) => {
        if(searchString === "")
        {
            getAllProducts();
            return;
        }

        let productArray = await GETProducts();

/*         let filteredProducts = productArray.filter((item) => {
            return (item.name || item.description || item.category)
                    .toLowerCase().includes(searchString.toLowerCase())

        }); */
        let filteredProducts = productArray.filter((item) => {
            return item.name.toLowerCase().includes(searchString.toLowerCase()) || 
                    item.description.toLowerCase().includes(searchString.toLowerCase()) || 
                    item.category.toLowerCase().includes(searchString.toLowerCase())
        });
            
        history.push("/search-result")
        setProducts(filteredProducts);        
    }

    const getUser = async (email, password) => {
        let userObj = await GETUserByLoginCredentials(email, password);
        setUser(await userObj);
        if(userObj !== null)
        {
            setLoggedIn(true);
        }
        return await userObj;
    }

    const postUser = async (jsonData) => {
        let createdUser = await POSTUser(jsonData);
        setUser(await createdUser)
        if(createdUser !== null)
        {
            setLoggedIn(true);
        }
        return await createdUser;
    }

    const getSingleProduct= async (productId) => {
        let product = await GETProductById(productId);
        setSingleProduct(await product);
        setProductSizes(ProductSizes(product));
    }

    const addProductToCart = (obj) => {
        
        if((shoppingCart.find(item => item.productId === obj.productId)) === undefined)
        {
            setShoppingCart([...shoppingCart, obj]);
        }
        else
        {
            //let existingObj = shoppingCart.find(item => item.productId === obj.productId);
            let updatedArray = shoppingCart.map(item => {
                if(item.productId === obj.productId && item.size === obj.size)
                {
                    item.quantity = parseInt(item.quantity) + parseInt(obj.quantity)
                    item.totalPrice = parseInt(item.totalPrice) + parseInt(obj.totalPrice);
                    return item;
                }
            });

            setShoppingCart(updatedArray);
        }
               
    }

    const removeProductFromCart = (obj => {
        let filteredArray = shoppingCart.filter(item => {
            return(item !== obj);
        })

        setShoppingCart(filteredArray);
    })

    const postOrder = async (order) => {
        let createdOrder = await POSTOrder(order);
        if(createdOrder !== null)
        {
            setOrderMade(await createdOrder);
            postOrderDetails(shoppingCart, createdOrder.orderId);
            history.push("/order-details");
        }
    }

    const postOrderDetails = async (shoppingCart, orderId) => {
        let orderDetailArray = [];
        shoppingCart.forEach(item => {
            orderDetailArray.push({
                orderId: `${orderId}`,
                productId: `${item.productId}`,
                quantity: `${item.quantity}`,
                size: `${item.size}`
            })
        });

        for(const item of orderDetailArray)
        {
            let createdDetails = await POSTOrderDetails(item);
            console.log(createdDetails)
        }

        setShoppingCart([]);
    }

    const clearSingleProduct = () => {
        setSingleProduct("");
    }

    const logOut = () => {
        history.push("/")
        setLoggedIn(false);
        setShoppingCart([]);
    }

    const value = {
        products,
        singleProduct,
        productSizes,
        user,
        loggedIn,
        shoppingCart,
        orderMade,
        getAllProducts,
        getSingleProduct,
        searchProducts,
        clearSingleProduct,
        addProductToCart,
        removeProductFromCart,
        getUser,
        postUser,
        postOrder,
        logOut
    };

    return(
        <WebshopContext.Provider value={value}>{children}</WebshopContext.Provider>
    );
}