import { useContext, useEffect, useState } from "react";
import { auth } from "../../utils/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginView from "./LoginView";
import { AuthContext } from "../../utils/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const LoginController = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const {signedIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const login = () =>{

        setLoading(true);

        if(email != ""){

            setErrorMessage("");

            if(password != ""){

                setErrorMessage("");

                signInWithEmailAndPassword(auth, email, password).then(result=>{

                    setEmail("");
                    setPassword("");
                    setLoading(false);


                    console.log("LOGGED IN");
                }).catch(err=>{

                    console.log(err);


                    setLoading(false);
                })
            }else{  

                setErrorMessage("Prencha a senha.")
            }
        }else{

            setErrorMessage("Preencha o e-mail.");
        } 
    }

    console.log(signedIn)

    if(!signedIn){

        return(

            <LoginView
    
                setEmail={setEmail}
                setPassword={setPassword}
                
                email={email}
                password={password}
                errorMessage={errorMessage}
    
                loading={loading}
    
                login={login}
            >
    
            </LoginView>
        );
    }else{

        return <Navigate to="/"/>;
    }

    
}

export default LoginController;