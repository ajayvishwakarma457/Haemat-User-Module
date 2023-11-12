import React, { createContext } from 'react';

const ProductContext = createContext({
    addProduct: (obj) => { },
    clearProduct: () => { },
    productData: {}
});

export default ProductContext;