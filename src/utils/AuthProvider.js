import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { redirect } from "react-router-dom";
import { auth } from "./Firebase";

export const AuthContext = createContext({});

const AuthProvider = ({children}) =>{

    const [signedIn, setSignedIn] = useState();
    const [user, setUser] = useState();


    useEffect(()=>{

        onAuthStateChanged(auth, (user)=>{

            if(user){

                setUser(user);
                setSignedIn(true);
            }else{

                setSignedIn(false);

            }
        })
    },[]);
    return(

        <AuthContext.Provider
            value={{user, signedIn}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;