import TransactionItemView from "./TransasctionItemView";

const TransactionItemController = (props) =>{

    const openTransactionDetailsModalF = () =>{


    }

    return(

        <TransactionItemView openTransactionDetailsModal={props.openTransactionDetailsModal} transactionData={props.transactionData}></TransactionItemView>
    );
}

export default TransactionItemController;