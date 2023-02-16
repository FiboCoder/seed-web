import TransactionDetails from "./TransactionsDetails"

const TransactionDetailsController = (props) =>{

    console.log("CLICKED TRANSACTION DATA  -  ")

    return(

        <TransactionDetails 
            setShowTransactionDetails={props.setShowTransactionDetails} 
            showTransactionDetails={props.showTransactionDetails}
            transactionData={props.transactionData}/>
    )
}

export default TransactionDetailsController;