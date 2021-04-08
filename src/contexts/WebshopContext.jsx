import React, { createContext, useContext, useState } from "react";
import GETProductById from '../apicalls/GETProductById';
import GETProducts from '../apicalls/GETProducts';
import GETUserByLoginCredentials from '../apicalls/GETUserByLoginCredentials';
import POSTOrder from '../apicalls/POSTOrder';
import POSTOrderDetails from '../apicalls/POSTOrderDetails';
import POSTUser from '../apicalls/POSTUser';

const WebshopContext = createContext();

export function useWebshop() {
    return useContext(WebshopContext);
}

export function WebshopProvider({children}) {
    const [products, setProducts] = useState("");
    const [singleProduct, setSingleProduct] = useState("");
    const [user, setUser] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const getAllProducts = async () => {
        let productArray = await GETProducts();
        setProducts(await productArray);
    }

    const getUser = async (email, password) => {
        let userObj = await GETUserByLoginCredentials(email, password);
        setUser(await userObj);
        if(userObj !== null)
        {
            setLoggedIn(true);
        }
    }

    const logOut = () => {
        setLoggedIn(false);
    }

    const value = {
        products,
        user,
        loggedIn,
        getAllProducts,
        getUser,
        logOut
    };

    return(
        <WebshopContext.Provider value={value}>{children}</WebshopContext.Provider>
    );
}