import "./LoginStyle.css";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Loading from "../../components/Loading";
import { Navigate } from "react-router-dom";

const LoginView = (props) =>{

    return(

        <div className="login-container-main">
            
            <div className="login-container">
            
            <div className="login-box-container">
                <div className="login-box-subcontainer">

                    <img className="login-box-logo-image" width={"60%"} src="/logo500x150.png"></img>

                    <span className="login-box-title-text">ENTRAR</span>

                    <div className="login-box-field-container">
                        <AiOutlineMail className="login-box-field-icon"></AiOutlineMail>
                        <input type={"email"} onChange={(val)=>{props.setEmail(val.target.value)}} className="login-box-field-text" placeholder="E-mail" value={props.email}></input>
                    </div>

                    <div className="login-box-field-container">
                        <AiOutlineLock className="login-box-field-icon"></AiOutlineLock>
                        <input type={"password"} onChange={(val)=>{props.setPassword(val.target.value)}} className="login-box-field-text" placeholder="Senha" value={props.password}></input>
                    </div>

                    <div className="login-box-btn-container">

                        {

                            props.errorMessage
                                ?
                                    <span className="login-box-error-message-text">{props.errorMessage}</span>
                                :
                                    null
                        }
                        <button onClick={()=>{props.login()}} className={props.loading ? "login-box-login-btn-active" : "login-box-login-btn"}>{props.loading ? "Entrando" : "Entrar"}{props.loading ? <Loading/> : null}</button>
                    </div>
                </div>
                <div className="login-box-no-have-account-container">
                    <span className="login-box-no-have-account-text-1">Não tem conta? <button onClick={()=>{<Navigate to={"/register"}/>}} className="login-box-no-have-account-text-2">Cadastre-se</button></span>
                </div>
            </div>
            </div>
            <div className="login-image-box-container">
                <img className="image" src={"back2.jpg"}></img>
            </div>
        </div>
        
    )
}

export default LoginView;