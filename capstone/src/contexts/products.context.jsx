import { useState, createContext, useEffect } from "react";
import PRODUCTS from '../shop-data.json'
// as the actual/default value
export const ProductContext = createContext({
    products: [],
    // setCurrentProduct: () => [],
})

export const ProductProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUCTS)
    const value = {products, setProducts}

    useEffect(()=>{
        // const unsubscribe = 

        

    },[])

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}