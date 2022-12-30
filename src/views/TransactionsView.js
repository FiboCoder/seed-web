import { Bar, Line} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import TransactionItemController from "../controller/components/TransactionsItemController";
import "../styles/Transactions.css";
import { IoIosArrowDown } from "react-icons/io";

const TransactionsView = () =>{

    return(

        <div className="transactions-view-container">
            <div className="transactions-list-container">

                <span className="transactions-list-container-title-text">Transações</span>

                <div className="transactions-list">

                    <TransactionItemController></TransactionItemController>
                </div>

            </div>

            <div className="resume-of-movimentations-container">

                <span className="resume-of-movimentations-container-title-text">Resumo das Movimentações</span>

                <div className="resume-of-movimentations-main-container">

                    <div className="resume-of-movimentations-chart-container">
                        <div className="resume-of-movimentations-chart-top-container">
                            <span className="resume-of-movimentations-chart-title">Ganhos</span>
                            <div className="resume-of-movimentations-chart-time-container">
                                <span className="resume-of-movimentations-chart-time-text">Semana</span>
                                <IoIosArrowDown className="resume-of-movimentations-chart-time-icon-arrow-down"></IoIosArrowDown>
                            </div>
                        </div>

                        <div className="chart">
                            <Line 
                                data={{
                                    labels:["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
                                    datasets:[{
                                        label: 'Ganhos',
                                        data: [12.63, 78.49, 26.12, 31.67, 1.39, 2.00, 73.99],
                                        backgroundColor: "green",
                                        borderColor: "green",
                                        borderWidth: 2,
                                        
                                        
                                    }]
                                }}
                            ></Line>
                        </div>

                        
                    </div>
                    <div className="resume-of-movimentations-chart-container">
                        <div className="resume-of-movimentations-chart-top-container">
                            <span className="resume-of-movimentations-chart-title">Gastos</span>
                            <div className="resume-of-movimentations-chart-time-container">
                                <span className="resume-of-movimentations-chart-time-text">Semana</span>
                                <IoIosArrowDown className="resume-of-movimentations-chart-time-icon-arrow-down"></IoIosArrowDown>
                            </div>
                        </div>

                        <div className="chart">
                            <Line 
                                data={{
                                    labels:["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
                                    datasets:[{
                                        label: 'Gastos',
                                        data: [12.63, 78.49, 26.12, 31.67, 1.39, 2.00, 73.99],
                                        backgroundColor: "red",
                                        borderColor: "red",
                                        borderWidth: 2,

                                    }]
                                }}
                            ></Line>
                        </div>
                    </div>
                    <div className="resume-of-movimentations-chart-container">
                        <div className="resume-of-movimentations-chart-top-container">
                            <span className="resume-of-movimentations-chart-title">Transferências</span>
                            <div className="resume-of-movimentations-chart-time-container">
                                <span className="resume-of-movimentations-chart-time-text">Semana</span>
                                <IoIosArrowDown className="resume-of-movimentations-chart-time-icon-arrow-down"></IoIosArrowDown>
                            </div>
                        </div>

                        <div className="chart">
                            <Line 
                                data={{
                                    labels:["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
                                    datasets:[{
                                        label: 'Transferências',
                                        data: [12.63, 78.49, 26.12, 31.67, 1.39, 2.00, 73.99],
                                        backgroundColor: "gray",
                                        borderColor: "gray",
                                        borderWidth: 2

                                    }]
                                }}
                            ></Line>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}
export default TransactionsView;