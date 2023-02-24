import "./TransactionDetails.css";

import { AiOutlineClose } from "react-icons/ai";
import { Format } from "../utils/Format";

const TransactionDetails = (props) =>{

    const renderTransactionTypeText = () =>{

        switch(props.transactionData.type){

            case "Earning":
            return "Ganho";

            case "Spending":
            return "Gasto";

            case "Transfer":
            return "Transferência";
        }
    }

    return(

        <div className="transaction-details-container-main">
            <button onClick={()=>{props.setShowTransactionDetails(!props.showTransactionDetails)}} className="transaction-details-container">
            </button>
            <div className="transaction-details-subcontainer">

                <div className="transaction-details-top-container">
                    <button onClick={()=>{props.setShowTransactionDetails(!props.showTransactionDetails)}} className="transaction-details-close-icon-container">
                        <AiOutlineClose className="transaction-details-close-icon"></AiOutlineClose>
                    </button>
                    <span className="transaction-details-title">Detalhes da Transação</span>
                </div>

                <div className="transaction-details-main-container">
                    <div className="transaction-details-category-icon-container"></div>

                    <span className="transaction-details-title-text">Categoria da Transação</span>
                    <span className="transactions-details-category-text">{props.transactionData.category}</span>
                    <div className="divider"></div>

                    <span className="transaction-details-title-text">Nome da Transação</span>
                    <span className="transactions-details-name-text">{props.transactionData.name}</span>
                    <div className="divider"></div>

                    <span className="transaction-details-title-text">Descrição da Transação</span>
                    <span className="transactions-details-description-text">{props.transactionData.description}</span>
                    <div className="divider"></div>

                    <span className="transaction-details-title-text">Tipo da Transação</span>
                    <span className="transactions-details-transfer-type-text">{renderTransactionTypeText()}</span>
                    <div className="divider"></div>

                    <span className="transaction-details-title-text">Valor da Transação</span>
                    <span className="transactions-details-value-text">{"R$" + Format.intToReal(props.transactionData.value)}</span>
                    <div className="divider"></div>
                </div>
            </div>
        </div>
    );
}
export default TransactionDetails;