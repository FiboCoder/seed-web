import SideMenu from "../../components/SideMenuView";
import "./HomeStyle.css";
import TransactionItemController from "../../components/TransactionsItemController";
import CryptoItemController from "../../components/CryptoItemController";
import TransactionsController from "../../fragments/transactions/TransactionsController";
import CryptocurrenciesController from "../../fragments/cryptocurrencies/CryptocurrenciesController";
import SettingsController from "../../fragments/settings/SettingsController";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import ChartDash from "../../components/ChartDash";

const HomeView = (props) =>{

    const RenderMenuOptionView = () =>{

        switch(props.menuOptionClicked){

            case "transactions":
                return <TransactionsController transactionsList={props.transactionsList} email={props.userData.email}></TransactionsController>;

            case "cryptocoins":
                return <CryptocurrenciesController></CryptocurrenciesController>;

            case "settings":
                return <SettingsController></SettingsController>;

        }
    }

    const transactionTypeButtonStyle = () =>{

        switch(props.transactionType){

            case "Earnings":
                return "home-chart-box-transactions-title-text-active";

            case "Spendings":
                return "home-chart-box-transactions-title-text-active";

            case "Transfers":
                return "home-chart-box-transactions-title-text-active";

            default:
                return "home-chart-box-transactions-title-text";
        }
    }

    return(

        <div className="container">

            <button className="container-add-transaction-button">
                <IoIosAdd className="container-add-transaction-button-icon"></IoIosAdd>
            </button>

            <div className="side-menu">
                <SideMenu 

                    userData={props.userData}
                    setMenuOptionClicked={props.setMenuOptionClicked}
                    transactionsList={props.transactionsList}>
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
                                                <button onClick={()=>{props.setTransactionType("Spendings")}} className={props.transactionType == "Spendings" ? "home-chart-box-transactions-title-text-active" : "home-chart-box-transactions-title-text"}>Gastos</button>
                                                <button onClick={()=>{props.setTransactionType("Earnings")}} className={props.transactionType == "Earnings" ? "home-chart-box-transactions-title-text-active" : "home-chart-box-transactions-title-text"}>Ganhos</button>
                                                <button onClick={()=>{props.setTransactionType("Transfers")}} className={props.transactionType == "Transfers" ? "home-chart-box-transactions-title-text-active" : "home-chart-box-transactions-title-text"}>Transferências</button>
                                            </div>

                                            <button onClick={()=>{props.setChartTimeListVisible(!props.chartTimeListVisible)}} className="chart-top-time-select-container">
                                                <div className="chart-top-time-select-subcontainer">
                                                    <span className="chart-top-time-select-title">{props.chartTime}</span>
                                                    <IoIosArrowDown className="chart-top-time-select-icon"></IoIosArrowDown>
                                                </div>

                                                {

                                                    props.chartTimeListVisible
                                                        ?
                                                            <div className="chart-top-time-select-list-container">
                                                                <button onClick={()=>{props.chartTimeF("week")}} className="chart-top-time-select-list-item">Semana</button>
                                                                <button onClick={()=>{props.chartTimeF("month")}} className="chart-top-time-select-list-item">Mês</button>
                                                                <button onClick={()=>{props.chartTimeF("year")}} className="chart-top-time-select-list-item">Ano</button>
                                                            </div>
                                                        :
                                                            null
                                                }
                                                
                                            </button>
                                        </div>

                                        <ChartDash dataToChart={props.dataToChart} chartTime={props.chartTime} transactionType={props.transactionType}></ChartDash>
                                    </div>
                                </div>

                                <div className="home-transactions-box">
                                    <span className="title">Transações recentes</span>

                                    <div className="transactions-container">

                                        {

                                            props.transactionsLimitedList.map((transaction, index)=>{

                                                return <TransactionItemController transactionData={transaction} key={index}></TransactionItemController>
                                            })
                                        }
                                    </div>
                                </div>
                                
                                
                            </div>

                            <div className="box-2">

                                <div className="card-container">
                                    <div className="card-top-container">
                                        <span className="card-welcome-text-fixed">Olá, <span className="card-welcome-text-username">{props.userData ? props.userData.username : "Nome de usuário"}</span></span>
                                        <span className="card-logo">SEED</span>
                                    </div>

                                    <div className="card-bottom-container">
                                        <span className="card-bottom-text-fixed">Visão geral da sua carteira</span>
                                        <span className="card-bottom-value">R$ {props.userData ? props.userData.balance : "R$0,00"}</span>
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