import "./SettingsStyle.css";
import { AiOutlineUser, AiFillEdit, AiOutlineMail, AiOutlineLock, AiOutlineCheck } from "react-icons/ai";
import { useRef, useState } from "react";
import Loading from "../../components/loading";
import LoadingFullScreen from "../../components/LoadingFullScreen";

const SettingsView = (props) =>{


    const handleChange = e => {
        props.setImageProfile(e.target.files[0]);
    }

    const inputFile = useRef(null);


    return(
            <>
                <div className="settings-container">

                <div className="personal-settings-info-container">

                    <span className="personal-settings-info-container-title-text">Informações Pessoais</span>
                    <div className="personal-settings-info-main-container">

                        <div className="personal-settings-image-main-container">
                            {

                                props.userData.imageUrl
                                    ?
                                        <img className="personal-settings-image-profile-image" src={props.userData.imageUrl}></img>
                                    :
                                        <div className="personal-settings-image-container">
                                            <AiOutlineUser className="personal-settings-image-container-text"></AiOutlineUser>
                                        </div>
                            }
                            
                            <button onClick={() => inputFile.current.click()} className="personal-settings-change-image-icon-container">
                                <AiFillEdit className="personal-settings-change-image-icon"></AiFillEdit>
                            </button>
                            
                            <input style={{display: "none"}}
                            type="file"
                            onChange={handleChange}
                            ref={inputFile} />
                        </div>

                        <div className="personal-settings-field-box-container">

                            <span className="personal-settings-field-title-text">Nome de usuário</span>

                            <div className="personal-settings-field-container">
                                
                                {

                                    props.editPencilClicked == "username"
                                    ?
                                        <>
                                        <input onChange={(val)=>{props.setText(val.target.value)}} placeholder="Nome de usuário" className="personal-settings-input-field"></input>
                                        <AiOutlineCheck onClick={()=>{props.updateData("username")}} className="personal-settings-field-check-icon"></AiOutlineCheck>
                                        </>
                                    :
                                    <>
                                        <AiOutlineUser className="personal-settings-field-icon"></AiOutlineUser>
                                        <span className="personal-settings-field-text">{props.userData.username}</span>
                                        <AiFillEdit onClick={()=>{props.pencilClicked("username")}} className="personal-settings-field-pencil-icon"></AiFillEdit>
                                    </>
                                }
                            </div>

                            <span className="personal-settings-field-title-text">E-mail</span>

                            <div className="personal-settings-field-container">

                                {

                                    props.editPencilClicked == "email"
                                    ?
                                        <>
                                            <input placeholder="E-mail" className="personal-settings-input-field"></input>
                                            <AiOutlineCheck onClick={()=>{props.updateData()}} className="personal-settings-field-check-icon"></AiOutlineCheck>
                                        </>
                                    :
                                        <>
                                            <AiOutlineMail className="personal-settings-field-icon"></AiOutlineMail>
                                            <span className="personal-settings-field-text">{props.userData.email}</span>
                                        </>
                                }
                                
                            </div>

                            <span className="personal-settings-field-title-text">Senha</span>

                            <div className="personal-settings-field-container">

                                {

                                    props.editPencilClicked == "password"
                                    ?
                                        <>
                                            <input onChange={(val)=>{props.setText(val.target.value)}} placeholder="Senha" className="personal-settings-input-field"></input>
                                            <AiOutlineCheck onClick={()=>{props.updateData("pass")}} className="personal-settings-field-check-icon"></AiOutlineCheck>
                                        </>
                                    :
                                        <>
                                            <AiOutlineLock className="personal-settings-field-icon"></AiOutlineLock>
                                            <span className="personal-settings-field-text">*****</span>
                                            <AiFillEdit onClick={()=>{props.pencilClicked("password")}} className="personal-settings-field-pencil-icon"></AiFillEdit> 
                                        </>
                                }
                                
                            </div>
                        </div>
                        

                    </div>
                </div>
                </div>
                {
                    props.loading
                        ?
                            <div className="settings-loading-container">
                                <LoadingFullScreen/>
                            </div>
                        :
                            null
                }
                
            </>
            
    );
}

export default SettingsView;