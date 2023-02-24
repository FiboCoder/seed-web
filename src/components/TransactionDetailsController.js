import TransactionDetails from "./TransactionsDetails"

const TransactionDetailsController = (props) =>{

    return(

        <TransactionDetails 
            setShowTransactionDetails={props.setShowTransactionDetails} 
            showTransactionDetails={props.showTransactionDetails}
            transactionData={props.transactionData}/>
    )
}

export default TransactionDetailsController;