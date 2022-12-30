import "../../styles/TransactionItemStyle.css";
import { BsHandbag } from "react-icons/bs";

const TransactionItemView = () =>{

    return(

        <div className="transaction-item-container">
            <div className="transaction-item-subcontainer">
                <div className="transaction-item-category-icon-container">
                    <BsHandbag className="transaction-item-category-icon"></BsHandbag>
                </div>

                <div className="transaction-item-title-description-container">
                    <span className="transaction-item-title-text">Transação</span>
                    <span className="transaction-item-title-description">Descrição da transação</span>
                </div>
                    
                <span className="transaction-item-value-text">R$16.168,23</span>
            </div>

            <div className="divider"></div>
        </div>
    )
}

export default TransactionItemView;