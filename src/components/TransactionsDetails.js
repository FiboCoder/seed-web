import "./TransactionDetails.css";

import { AiOutlineClose } from "react-icons/ai";

const TransactionDetails = (props) =>{

    console.log("TRANSACTION DETAILS" + props.transactionData)

    return(

        <button onClick={()=>{props.setShowTransactionDetails(!props.showTransactionDetails)}} className="transaction-details-container">
            <div className="transaction-details-subcontainer">
                <div className="transaction-details-left-container">
                    <button className="transaction-details-close-icon-container">
                        <AiOutlineClose className="transaction-details-close-icon"></AiOutlineClose>
                    </button>
                    
                </div>
                <div className="transaction-details-right-container">
                    <span className="transaction-details-title">Detalhes da Transação</span>

                    <div className="transaction-details-main-container">
                        <div className="transaction-details-category-icon-container"></div>
                        <span className="transactions-details-category-text">{}</span>
                        <span className="transactions-details-name-text">Nome da transação</span>
                        <span className="transactions-details-description-text">Descrição da transação</span>
                        <span className="transactions-details-transfer-type-text">Tipo de transferência</span>
                        <span className="transactions-details-value-text">R$00,00</span>
                    </div>
                    
                </div>
            </div>
        </button>
    );
}
export default TransactionDetails;