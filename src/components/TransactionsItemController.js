import TransactionItemView from "./TransasctionItemView";

const TransactionItemController = (props) =>{

    console.log("NAME"+props.transactionData.name)


    return(

        <TransactionItemView openTransactionDetailsModal={props.openTransactionDetailsModal} setClickedTransactionData={props.setClickedTransactionData} transactionData={props.transactionData}></TransactionItemView>
    );
}

export default TransactionItemController;