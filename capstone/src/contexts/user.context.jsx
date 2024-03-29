import { useState, createContext, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils"; 
// as the actual/default value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user){
               createUserDocumentFromAuth(user); // passing it to firebase utils
            }
            setCurrentUser(user)
        })
        
        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}