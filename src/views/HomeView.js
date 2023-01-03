import SideMenu from "./SideMenuView";
import "../styles/HomeStyle.css";
import TransactionItemController from "../controller/components/TransactionsItemController";
import CryptoItemController from "../controller/components/CryptoItemController";
import TransactionsController from "../controller/TransactionsController";
import CryptocurrenciesController from "../controller/CryptocurrenciesController";
import SettingsController from "../controller/SettingsController";
import { IoIosArrowDown } from "react-icons/io";
import { Line } from "react-chartjs-2";
import { IoIosAdd } from "react-icons/io";

const HomeView = (props) =>{

    const RenderMenuOptionView = () =>{

        switch(props.menuOptionClicked){

            case "transactions":
                return <TransactionsController></TransactionsController>;

            case "cryptocoins":
                return <CryptocurrenciesController></CryptocurrenciesController>;

            case "settings":
                return <SettingsController></SettingsController>;

        }
    }

    return(

        <div className="container">

            <button className="container-add-transaction-button">
                <IoIosAdd className="container-add-transaction-button-icon"></IoIosAdd>
            </button>

            <div className="side-menu">
                <SideMenu 
                    setMenuOptionClicked={props.setMenuOptionClicked}>
                </SideMenu>
            </div>
            

            {

                props.menuOptionClicked == "dashboard"
                    ?
                        <div className="dashboard-container">

                            <div className="box-1">

                                <div className="home-chart-box">

                                    <div className="chart-container">

                                        <div className="chart-top-container">

                                            <div className="home-chart-box-transactions-title-container">
                                                <span className="home-chart-box-transactions-title-text-active">Gastos</span>
                                                <span className="home-chart-box-transactions-title-text">Ganhos</span>
                                                <span className="home-chart-box-transactions-title-text">Transferências</span>
                                            </div>

                                            <div className="chart-top-time-select-container">
                                                <span className="chart-top-time-select-title">Mês</span>
                                                <IoIosArrowDown className="chart-top-time-select-icon"></IoIosArrowDown>
                                            </div>
                                        </div>

                                        <Line 
                                            data={{
                                                labels:["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
                                                datasets:[{
                                                    label: 'Ganhos',
                                                    data: [12.63, 78.49, 26.12, 31.67, 1.39, 2.00, 73.99],
                                                    backgroundColor: "red",
                                                    borderColor: "red",
                                                    borderWidth: 2,
                                                    tension: 0.5,
                                                    
                                                }],
                                            }}
                                        ></Line>
                                    </div>
                                </div>

                                <div className="home-transactions-box">
                                    <span className="title">Transações recentes</span>

                                    <div className="transactions-container">

                                        <TransactionItemController></TransactionItemController>
                                    </div>
                                </div>
                                
                                
                            </div>

                            <div className="box-2">

                                <div className="card-container">
                                    <div className="card-top-container">
                                        <span className="card-welcome-text-fixed">Olá, <span className="card-welcome-text-username">Steave</span></span>
                                        <span className="card-logo">SEED</span>
                                    </div>

                                    <div className="card-bottom-container">
                                        <span className="card-bottom-text-fixed">Visão geral da sua carteira</span>
                                        <span className="card-bottom-value">R$16.484.981,00</span>
                                    </div>
                                </div>

                                <div className="dashboard-cryptocoins-list-container">

                                    <div className="dashboard-cryptocoins-list-top-container">

                                        <span className="title">Crtiptomoedas</span>
                                    </div>

                                    <div className="dashboard-cryptocoins-list">

                                        <CryptoItemController></CryptoItemController>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :
                        RenderMenuOptionView()
                        
            }

        </div>
    );
}
export default HomeView;