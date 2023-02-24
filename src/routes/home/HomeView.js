import SideMenu from "../../components/SideMenuView";
import "./HomeStyle.css";
import TransactionItemController from "../../components/TransactionsItemController";
import CryptoItemController from "../../components/CryptoItemController";
import TransactionsController from "../../fragments/transactions/TransactionsController";
import CryptocurrenciesController from "../../fragments/cryptocurrencies/CryptocurrenciesController";
import SettingsController from "../../fragments/settings/SettingsController";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { AiTwotoneCalendar } from "react-icons/ai";
import ChartDash from "../../components/ChartDash";
import TransactionDetails from "../../components/TransactionsDetails";
import TransactionDetailsController from "../../components/TransactionDetailsController";
import AddTransactionMenuController from "../../components/AddTransactionMenuController";
import { Format } from "../../utils/Format";
import CalendarSelectRangeController from "../../components/CalendarSelectRangeController";

const HomeView = (props) =>{

    const RenderMenuOptionView = () =>{

        switch(props.menuOptionClicked){

            case "transactions":
                return <TransactionsController transactionsList={props.transactionsList} email={props.userData.email}></TransactionsController>;

            case "cryptocoins":
                return <CryptocurrenciesController></CryptocurrenciesController>;

            case "settings":
                return <SettingsController userData={props.userData}></SettingsController>;

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
            {

                props.showAddTransactionMenu
                    ?
                        <AddTransactionMenuController 
                            setShowAddTransactionMenu={props.setShowAddTransactionMenu}
                            showAddTransactionMenu={props.showAddTransactionMenu}
                            userData={props.userData}/>
                    :
                        null
            }
            
            <button onClick={()=>{props.setShowAddTransactionMenu(true)}} className="container-add-transaction-button">
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

                            {

                                props.calendarSelectRangeVisibility
                                    ?
                                        <CalendarSelectRangeController setCalendarSelectRangeVisibility={props.setCalendarSelectRangeVisibility} getCalendarSelectedRange={props.getCalendarSelectedRange}></CalendarSelectRangeController>
                                    :
                                        null
                            }

                            {
                                props.showTransactionDetails
                                    ?
                                        <div className="transaction-details-modal-container">
                                            <TransactionDetailsController transactionData={props.clickedTransactionData} setShowTransactionDetails={props.setShowTransactionDetails} showTransactionDetails={props.showTransactionDetails}></TransactionDetailsController>
                                        </div>
                                    :
                                        null
                            }

                            <div className="box-1">

                                <div className="home-chart-box">

                                    <div className="chart-container">

                                        <div className="chart-top-container">

                                            <div className="home-chart-box-transactions-title-container">
                                                <button onClick={()=>{props.setTransactionType("Spendings")}} className={props.transactionType == "Spendings" ? "home-chart-box-transactions-title-text-active" : "home-chart-box-transactions-title-text"}>Gastos</button>
                                                <button onClick={()=>{props.setTransactionType("Earnings")}} className={props.transactionType == "Earnings" ? "home-chart-box-transactions-title-text-active" : "home-chart-box-transactions-title-text"}>Ganhos</button>
                                                <button onClick={()=>{props.setTransactionType("Transfers")}} className={props.transactionType == "Transfers" ? "home-chart-box-transactions-title-text-active" : "home-chart-box-transactions-title-text"}>Transferências</button>
                                            </div>

                                            <div className="home-chart-box-transactions-chart-time-container">

                                                <button onClick={()=>{props.chartTimeF("1D")}} className={props.chartTime != "1D" ? "home-chart-box-transactions-chart-time-item" : "home-chart-box-transactions-chart-time-item-active"}>1D</button>
                                                <button onClick={()=>{props.chartTimeF("7D")}} className={props.chartTime != "7D" ? "home-chart-box-transactions-chart-time-item" : "home-chart-box-transactions-chart-time-item-active"}>7D</button>
                                                <button onClick={()=>{props.chartTimeF("1M")}} className={props.chartTime != "1M" ? "home-chart-box-transactions-chart-time-item" : "home-chart-box-transactions-chart-time-item-active"}>1M</button>
                                                <button onClick={()=>{props.chartTimeF("3M")}} className={props.chartTime != "3M" ? "home-chart-box-transactions-chart-time-item" : "home-chart-box-transactions-chart-time-item-active"}>3M</button>
                                                <button onClick={()=>{props.chartTimeF("6M")}} className={props.chartTime != "6M" ? "home-chart-box-transactions-chart-time-item" : "home-chart-box-transactions-chart-time-item-active"}>6M</button>
                                                <button onClick={()=>{props.chartTimeF("1Y")}} className={props.chartTime != "1Y" ? "home-chart-box-transactions-chart-time-item" : "home-chart-box-transactions-chart-time-item-active"}>1A</button>
                                                <button onClick={()=>{props.chartTimeF("C")}} className={props.chartTime != "C" ? "home-chart-box-transactions-chart-time-item" : "home-chart-box-transactions-chart-time-item-active"}>
                                                    <AiTwotoneCalendar></AiTwotoneCalendar>
                                                </button>
                                            </div>

                                            {/*<button onClick={()=>{props.setChartTimeListVisible(!props.chartTimeListVisible)}} className="chart-top-time-select-container">
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
                                                
                                            </button>*/}
                                        </div>

                                        <ChartDash dataToChart={props.dataToChart} chartTime={props.chartTime} transactionType={props.transactionType}></ChartDash>
                                    </div>
                                </div>

                                <div className="home-transactions-box">
                                    <span className="title">Transações recentes</span>

                                    <div className="transactions-container">

                                        {

                                            props.transactionsLimitedList.map((transaction, index)=>{

                                                return <TransactionItemController openTransactionDetailsModal={props.openTransactionDetailsModal} transactionData={transaction} key={index}></TransactionItemController>
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
                                        <span className="card-bottom-value">R$ {props.userData ? Format.intToReal(parseFloat(props.userData.balance).toFixed(2)) : "0,00"}</span>
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