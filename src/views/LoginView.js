import "../styles//LoginStyle.css";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const LoginView = () =>{

    return(

        <div className="login-container">
            <div className="login-image-box-container"></div>
            <div className="login-box-container">
                <div className="login-box-subcontainer">

                    <span className="login-box-title-text">ENTRAR</span>

                    <div className="login-box-field-container">
                        <AiOutlineMail className="login-box-field-icon"></AiOutlineMail>
                        <span className="login-box-field-text">E-mail</span>
                    </div>

                    <div className="login-box-field-container">
                        <AiOutlineLock className="login-box-field-icon"></AiOutlineLock>
                        <span className="login-box-field-text">Senha</span>
                    </div>

                    <div className="login-box-btn-container">

                        <span className="login-box-error-message-text">Mensagem de erro</span>
                        <button className="login-box-login-btn">ENTRAR</button>
                    </div>
                </div>
                <div className="login-box-no-have-account-container">
                    <span className="login-box-no-have-account-text-1">Não tem conta? <button className="login-box-no-have-account-text-2">Cadastre-se</button></span>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginView;