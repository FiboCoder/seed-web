import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../utils/Firebase";
import { User } from "../../utils/User";
import RegisterView from "./RegisterView";

const RegisterController = () =>{

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const Register = () =>{

        if(username != ""){

            if(email.toLowerCase() != ""){

                if(password != ""){
    
                    if(confirmPassword != "" && password == confirmPassword){

                        setLoading(true);
    
                        setErrorMessage("");
    
                        createUserWithEmailAndPassword(auth, email, password).then(result=>{

                            User.save(username, email).then(result=>{

                                setEmail("");
                                setPassword("");
                                setConfirmPassword("");
                                setErrorMessage("");
                                setLoading(false);
                            });
    
                            

                        }).catch(err=>{
    
                            setPassword("");
                            setConfirmPassword("");
                            setErrorMessage("");
                            setLoading(false);

                        });
                    }else{
        
                        setErrorMessage("Preencha o campo Confirmar senha.");
                    }
                }else{
    
                    setErrorMessage("Preencha o campo Senha.");
                }
            }else{
    
                setErrorMessage("Preencha o campo E-mail.");
            }
        }else{

            setErrorMessage("Preencha o campo Nome de usuário.");
        }
    }

    return(

        <RegisterView
        
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}

            username={username}
            email={email}
            password={password}
            confirmPassword={confirmPassword}

            errorMessage={errorMessage}

            register={Register}
        ></RegisterView>
    );
}

export default RegisterController;