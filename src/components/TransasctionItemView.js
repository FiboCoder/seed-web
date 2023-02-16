import "./TransactionItemStyle.css";
import { BsHandbag } from "react-icons/bs";
import { Format } from "../utils/Format";

const TransactionItemView = (props) =>{

    const renderIconColorStyle = () =>{

        switch(props.transactionData.type){

            case "Earning":
                return "transaction-item-category-icon-container-green";

            case "Spending":
                return "transaction-item-category-icon-container-red"

            case "Transfer":
                return "transaction-item-category-icon-container-gray"
        }
    }

    return(

        <button onClick={()=>{props.openTransactionDetailsModal(props.transactionData)}} className="transaction-item-container">
            <div className="transaction-item-subcontainer">
                <div className={renderIconColorStyle()}>
                    <BsHandbag className="transaction-item-category-icon"></BsHandbag>
                </div>

                <div className="transaction-item-title-description-container">
                    <span className="transaction-item-title-text">{props.transactionData.name}</span>
                    <span className="transaction-item-title-description">{props.transactionData.description}</span>
                </div>
                    
                <span className="transaction-item-value-text">{"R$" + props.transactionData.value}</span>
            </div>

            <div className="divider"></div>
        </button>
    )
}

export default TransactionItemView;