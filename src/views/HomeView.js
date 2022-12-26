import SideMenu from "./SideMenuView";
import "../styles/HomeStyle.css";

const HomeView = () =>{

    return(

        <div className="container">

            <div className="side-menu">
                <SideMenu ></SideMenu>
            </div>
            

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

                    <span>Transaction</span>
                    <span>Transaction</span>
                    <span>Transaction</span>
                    <span>Transaction</span>
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

                <span className="title">Composição das Transações</span>

                <div className="composition-transactions-container">

                </div>

                <div className="cryptocurrencies-list-container">

                    <div className="cryptocurrencies-list-top-container">

                        <span className="title">Crtiptomoedas</span>
                    </div>

                    <div className="cryptocurrencies-list">

                        <span>Criptomoeda</span>
                        <span>Criptomoeda</span>
                        <span>Criptomoeda</span>
                        <span>Criptomoeda</span>
                        <span>Criptomoeda</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default HomeView;