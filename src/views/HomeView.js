import SideMenu from "./SideMenuView";
import "../styles/HomeStyle.css";
import TransactionItemController from "../controller/components/TransactionsItemController";
import CryptoItemController from "../controller/components/CryptoItemController";
import TransactionsController from "../controller/TransactionsController";
import CryptocurrenciesController from "../controller/CryptocurrenciesController";
import SettingsController from "../controller/SettingsController";

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

                                <span className="title">Transações</span>

                                <div className="transactions-container">

                                    <TransactionItemController></TransactionItemController>
                                </div>
                            </div>

                            <div className="box-2">

                                <span className="title">Resumo de Movimentações</span>

                                <div className="resume-transactions-container">

                                    <div className="chart-container">

                                        <div className="chart-top-container">

                                            <span className="chart-top-title">Gastos</span>

                                            <div className="chart-top-time-select-container"></div>
                                        </div>
                                    </div>

                                    <div className="chart-container">
                                        <div className="chart-top-container">

                                            <span className="chart-top-title">Ganhos</span>

                                            <div className="chart-top-time-select-container">

                                            </div>

                                        </div>
                                    </div>

                                    <div className="chart-container">
                                        <div className="chart-top-container">

                                            <span className="chart-top-title">Transações</span>

                                            <div className="chart-top-time-select-container">

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="box-3">

                                <div className="composition-transactions-container">

                                    <span className="title">Composição das Transações</span>

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