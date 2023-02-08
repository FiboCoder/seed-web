import TransactionItemController from "../../components/TransactionsItemController";
import "./Transactions.css";
import { IoIosArrowDown } from "react-icons/io";
import ChartTransactions from "../../components/ChartTransactions";

const TransactionsView = (props) =>{

    const renderButtonTitle = () =>{

        switch(props.chartTimeTransactions){

            case "week":
                return "Semana";

            case "month":
                return "Mês";

            case "year":
                return "Ano";
        }
    }

    return(

        <div className="transactions-view-container">
            <div className="transactions-list-container">

                <span className="transactions-list-container-title-text">Transações</span>

                <div className="transactions-list">
                    {

                        props.transactionsList.map((transaction, index)=>{

                            return <TransactionItemController transactionData={transaction} key={index}></TransactionItemController>
                        })
                    }
                </div>

            </div>

            <div className="resume-of-movimentations-container">

                <span className="resume-of-movimentations-container-title-text">Resumo das Movimentações</span>

                <div className="resume-of-movimentations-main-container">

                    <div className="resume-of-movimentations-chart-container">
                        <button onClick={()=>{props.setChartTimeListVisibleTransactions(!props.chartTimeListVisibleTransactions)}} className="resume-of-movimentations-chart-time-button-container">
                            <div className="resume-of-movimentations-chart-time-select-subcontainer">
                                <span className="resume-of-movimentations-chart-time-text">{renderButtonTitle()}</span>
                                <IoIosArrowDown className="resume-of-movimentations-chart-time-icon-arrow-down"></IoIosArrowDown>
                            </div>

                            {

                                props.chartTimeListVisibleTransactions
                                    ?
                                        <div className="resume-of-movimentations-chart-time-list-container-transactions">
                                            <button onClick={()=>{props.chartTimeTransactionsF("week")}} className="resume-of-movimentations-chart-time-list-item-transactions">Semana</button>
                                            <button onClick={()=>{props.chartTimeTransactionsF("month")}} className="resume-of-movimentations-chart-time-list-item-transactions">Mês</button>
                                            <button onClick={()=>{props.chartTimeTransactionsF("year")}} className="resume-of-movimentations-chart-time-list-item-transactions">Ano</button>
                                        </div>
                                    :
                                        null
                            }
                        </button>

                        <div className="chart">
                            <ChartTransactions dataToChart={props.dataToChart}></ChartTransactions>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        
    );
}
export default TransactionsView;