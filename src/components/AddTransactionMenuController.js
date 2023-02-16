import AddTransactionMenuView from "./AddTransactionMenuView";

const AddTransactionMenuController = (props) =>{

    return(

        <AddTransactionMenuView
        
            setShowAddTransactionMenu={props.setShowAddTransactionMenu}
            showAddTransactionMenu={props.showAddTransactionMenu}/>
    );
}

export default AddTransactionMenuController;