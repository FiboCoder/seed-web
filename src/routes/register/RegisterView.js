import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";
import "./RegisterStyle.css";

const RegisterView = (props) =>{

    return(

        <div className="register-container">
            <div className="register-image-box-container"></div>
            <div className="register-box-container">
                <div className="register-box-subcontainer">

                    <img className="register-box-logo-image" width={"60%"} src="/logo500x150.png"></img>

                    <span className="register-box-title-text">CADASTRAR</span>

                    <div className="register-box-field-container">
                        <AiOutlineUser className="register-box-field-icon"></AiOutlineUser>
                        <input onChange={(val)=>{props.setUsername(val.target.value)}} className="register-box-field-text" placeholder="Nome de usuário" value={props.username}></input>
                    </div>

                    <div className="register-box-field-container">
                        <AiOutlineMail className="register-box-field-icon"></AiOutlineMail>
                        <input type={"email"} onChange={(val)=>{props.setEmail(val.target.value)}} className="register-box-field-text" placeholder="E-mail" value={props.email}></input>
                    </div>

                    <div className="register-box-field-container">
                        <AiOutlineLock className="register-box-field-icon"></AiOutlineLock>
                        <input type={"password"} onChange={(val)=>{props.setPassword(val.target.value)}} className="register-box-field-text" placeholder="Senha" value={props.password}></input>
                    </div>

                    <div className="register-box-field-container">
                        <AiOutlineLock className="register-box-field-icon"></AiOutlineLock>
                        <input type={"password"} onChange={(val)=>{props.setConfirmPassword(val.target.value)}} className="register-box-field-text" placeholder="Senha" value={props.confirmPassword}></input>
                    </div>

                    <div className="register-box-btn-container">

                        {

                            props.errorMessage
                                ?
                                    <span className="register-box-error-message-text">{props.errorMessage}</span>
                                :
                                    null
                        }
                        <button onClick={()=>{props.register()}} className={props.loading ? "register-box-register-btn-active" : "register-box-register-btn"}>{props.loading ? "Cadastrando" : "Cadastrar"}{props.loading ? <Loading/> : null}</button>
                    </div>
                </div>
                <div className="register-box-no-have-account-container">
                    <span className="register-box-no-have-account-text-1">Já tem conta? <button onClick={()=>{<Navigate to={"/login"}/>}} className="register-box-no-have-account-text-2">Acesse</button></span>
                </div>
            </div>
        </div>
    );
}

export default RegisterView;