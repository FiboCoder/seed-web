import "./SideMenuStyle.css";
import { MdOutlineDashboard } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const SideMenu = (props) =>{

    console.log("User DATA"+props.userData)

    return(

        <div className="side-menu-container">

            <div className="side-menu-option-container">

                <div className="side-menu-image-profile-container">
                    {

                        props.userData
                            ?
                                <img className="side-menu-image-profile-image" src={props.userData.imageUrl}></img>
                            :
                                <AiOutlineUser className="side-menu-option-icon-profile"></AiOutlineUser>

                    }
                </div>

                <span className="side-menu-username">{props.userData ? props.userData.username : "Nome de usuário"}</span>

                <div className="side-menu-divider"/>

                <button onClick={()=>{props.setMenuOptionClicked("dashboard")}} className="side-menu-option-dashboard-container">

                    <MdOutlineDashboard className="side-menu-option-icon"></MdOutlineDashboard>
                    <span className="side-menu-option-text">Dashboard</span>
                </button>

                <div className="side-menu-divider"/>

                <button onClick={()=>{props.setMenuOptionClicked("transactions")}}  className="side-menu-option-transactions-container">

                    <TbArrowsRightLeft className="side-menu-option-icon"></TbArrowsRightLeft>
                    <span className="side-menu-option-text">Transações</span>
                </button>

                <div className="side-menu-divider"/>

                <button onClick={()=>{props.setMenuOptionClicked("cryptocoins")}}  className="side-menu-option-cryptocoins-container">

                    <BsCurrencyBitcoin className="side-menu-option-icon"></BsCurrencyBitcoin>
                    <span className="side-menu-option-text">Criptomoedas</span>
                </button>

                <div className="side-menu-divider"/>

                <button onClick={()=>{props.setMenuOptionClicked("settings")}} className="side-menu-option-settings-container">

                    <FiSettings className="side-menu-option-icon"></FiSettings>
                    <span className="side-menu-option-text">Configurações</span>
                </button>

                <div className="side-menu-divider"/>

            </div>

            <button onClick={()=>{props.setMenuOptionClicked("logout")}} className="side-menu-logout-container">

                <BiLogOut className="side-menu-option-icon"></BiLogOut>
                <span className="side-menu-option-text">Sair</span>
            </button>

        </div>
    )
}
export default SideMenu;