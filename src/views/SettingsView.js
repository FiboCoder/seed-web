import "../styles/SettingsStyle.css";
import { AiOutlineUser, AiFillEdit, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const SettingsView = () =>{

    return(

        <div className="settings-container">

            <div className="personal-settings-info-container">

                <span className="personal-settings-info-container-title-text">Informações Pessoais</span>
                <div className="personal-settings-info-main-container">

                    <div className="personal-settings-image-main-container">
                        <div className="personal-settings-image-container">
                            <AiOutlineUser className="personal-settings-image-container-text"></AiOutlineUser>
                        </div>
                        <div className="personal-settings-change-image-icon-container">
                            <AiFillEdit className="personal-settings-change-image-icon"></AiFillEdit>
                        </div>
                    </div>

                    <div className="personal-settings-field-box-container">

                        <span className="personal-settings-field-title-text">Nome de usuário</span>

                        <div className="personal-settings-field-container">
                            <AiOutlineUser className="personal-settings-field-icon"></AiOutlineUser>
                            <span className="personal-settings-field-text">Nome de usuário</span>
                            <AiFillEdit className="personal-settings-field-pencil-icon"></AiFillEdit>
                        </div>

                        <span className="personal-settings-field-title-text">E-mail</span>

                        <div className="personal-settings-field-container">
                            <AiOutlineMail className="personal-settings-field-icon"></AiOutlineMail>
                            <span className="personal-settings-field-text">E-mail</span>
                            <AiFillEdit className="personal-settings-field-pencil-icon"></AiFillEdit>
                        </div>

                        <span className="personal-settings-field-title-text">Senha</span>

                        <div className="personal-settings-field-container">
                            <AiOutlineLock className="personal-settings-field-icon"></AiOutlineLock>
                            <span className="personal-settings-field-text">*****</span>
                            <AiFillEdit className="personal-settings-field-pencil-icon"></AiFillEdit>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default SettingsView;