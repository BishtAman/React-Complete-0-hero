import { useState, createContext, useEffect } from "react";

// import SHOP_DATA from '../shop-data.js' // data is already stored so I'll comment this

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// as the actual/default value

export const CategoriesContext = createContext({
    categoriesMap: {},
    // setCurrentProduct: () => [],
})

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({})
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])


    // whenever we take any asynchronous callback inside of the useEffect then we have to create an new async function instead of using async with useEffect
    useEffect(() =>{
        const getCategoriesMap = async () =>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }

        getCategoriesMap();
    }, [])

    const value = {categoriesMap}


    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}