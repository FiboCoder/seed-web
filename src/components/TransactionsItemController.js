import TransactionItemView from "./TransasctionItemView";

const TransactionItemController = (props) =>{

    return(

        <TransactionItemView transactionData={props.transactionData}></TransactionItemView>
    );
}

export default TransactionItemController;