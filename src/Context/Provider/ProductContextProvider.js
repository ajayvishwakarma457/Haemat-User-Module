import React, { useEffect, useState } from 'react';
import ProductContext from '../Product/ProductContext';

const getProductData = () => {
    if (localStorage.getItem("productData") === null) {
        return {};
    } else {
        return JSON.parse(localStorage.getItem('productData'));
    }
};

const ProductContextProvider = (props) => {

    const [data, setData] = useState({});

    useEffect(() => {

        if (localStorage.getItem("productData") !== null) {
            setData(getProductData());
        }

    }, []);

    const addProductHandler = (obj) => {
        localStorage.setItem("productData", JSON.stringify(obj));
        setData(obj);
    };

    const clearProductHandler = (obj) => {

    };



    return (
        <ProductContext.Provider value={{
            addProduct: addProductHandler,
            clearProduct: clearProductHandler,
            productData: data
        }}>{props.children}</ProductContext.Provider>
    );
};

export default ProductContextProvider;