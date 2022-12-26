import "../styles/SideMenuStyle.css";
import { MdOutlineDashboard } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const SideMenu = () =>{

    return(

        <div className="side-menu-container">

            <div className="side-menu-option-container">

                <div className="side-menu-image-profile-container">
                    <AiOutlineUser className="side-menu-option-icon-profile"></AiOutlineUser>
                </div>

                <span className="side-menu-username">Nome de usuário</span>

                <div className="side-menu-divider"/>

                <div className="side-menu-option-dashboard-container">

                    <MdOutlineDashboard className="side-menu-option-icon"></MdOutlineDashboard>
                    <span className="side-menu-option-text">Dashboard</span>
                </div>

                <div className="side-menu-divider"/>

                <div className="side-menu-option-transactions-container">

                    <TbArrowsRightLeft className="side-menu-option-icon"></TbArrowsRightLeft>
                    <span className="side-menu-option-text">Transações</span>
                </div>

                <div className="side-menu-divider"/>

                <div className="side-menu-option-cryptocurrencies-container">

                    <BsCurrencyBitcoin className="side-menu-option-icon"></BsCurrencyBitcoin>
                    <span className="side-menu-option-text">Criptomoedas</span>
                </div>

                <div className="side-menu-divider"/>

                <div className="side-menu-option-settings-container">

                    <FiSettings className="side-menu-option-icon"></FiSettings>
                    <span className="side-menu-option-text">Configurações</span>
                </div>

                <div className="side-menu-divider"/>

            </div>

            <div className="side-menu-logout-container">

                <BiLogOut className="side-menu-option-icon"></BiLogOut>
                <span className="side-menu-option-text">Sair</span>
            </div>

        </div>
    )
}
export default SideMenu;