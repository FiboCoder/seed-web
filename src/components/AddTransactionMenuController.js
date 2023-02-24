import { useState } from "react";
import { Format } from "../utils/Format";
import { Transaction } from "../utils/Transaction";
import AddTransactionMenuView from "./AddTransactionMenuView";
import {User} from "../utils/User";

const AddTransactionMenuController = (props) =>{

    const [transactionType, setTransactionType] = useState("");
    const [transferType, setTransferType] = useState("");
    const [transactionName, setTransactionName] = useState("");
    const [transactionDescription, setTransactionDescription] = useState("");
    const [transactionCategory, setTransactionCategory] = useState("");
    const [transactionDate, setTransactionDate] = useState(new Date());
    const [transactionValue, setTransactionValue] = useState("");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const setTransactionValueF = (value) =>{

        setTransactionValue(value);
    }

    const addTransaction = () =>{


        setLoading(true);

        if(transactionType != ""){

            if(transactionType == "Transfer"){

                if(transferType != ""){

                    if(transactionName != ""){

                        if(transactionDescription != ""){
        
                            if(transactionDate != ""){
        
                                if(transactionValue != ""){
        
                                    Transaction.addTransaction(
                                        props.userData.email, 
                                        transactionType, 
                                        transferType,
                                        transactionName, 
                                        transactionDescription, 
                                        transactionDate.getTime(), 
                                        Format.intToCurrency(transactionValue)
                                    ).then(result=>{

                                        let newBalance;
                                        if(transferType == "sent"){

                                            newBalance = parseFloat(props.userData.balance) - Format.intToCurrency(transactionValue);
                                            User.updateData(props.userData.email, "balance", newBalance).then(result=>{

                                                setTransactionType("");
                                                setTransferType("")
                                                setTransactionName("");
                                                setTransactionDescription("");
                                                setTransactionCategory("");
                                                setTransactionDate("");
                                                setTransactionValue("");
                                                setLoading(false);
                                                props.setShowAddTransactionMenu(false);
                                            });

                                        }else{

                                            newBalance = parseFloat(props.userData.balance) + Format.intToCurrency(transactionValue);
                                            User.updateData(props.userData.email, "balance", newBalance).then(result=>{

                                                setTransactionType("");
                                                setTransferType("")
                                                setTransactionName("");
                                                setTransactionDescription("");
                                                setTransactionCategory("");
                                                setTransactionDate("");
                                                setTransactionValue("");
                                                setLoading(false);
                                                props.setShowAddTransactionMenu(false);
                                            });
                                        }
                                    });
                                }else{
                        
                                    setLoading(false);
                                    setErrorMessage("Selecione o valor.");
                                }
                            }else{
                    
                                setLoading(false);
                                setErrorMessage("Selecione a data.");
                            }
                        }else{
                
                            setLoading(false);
                            setErrorMessage("Preencha a descrição.");
                        }
                    }else{
            
                        setLoading(false);
                        setErrorMessage("Preencha o nome.");
                    }
                }else{

                    setLoading(false);
                    setErrorMessage("Selecione o tipo de transferência");
                }
            }else{

                if(transactionCategory != ""){

                    if(transactionName != ""){

                        if(transactionDescription != ""){
        
                            if(transactionDate != ""){
        
                                if(transactionValue != ""){

                                    
        
                                    Transaction.addTransaction(
                                        props.userData.email, 
                                        transactionType, 
                                        transactionName, 
                                        transactionDescription, 
                                        transactionCategory, 
                                        transactionDate.getTime(), 
                                        Format.intToCurrency(transactionValue)).then(result=>{

                                            let newBalance;
                                            if(transactionType == "Earning"){

                                                newBalance = parseFloat(props.userData.balance) + Format.intToCurrency(transactionValue);
                                                User.updateData(props.userData.email, "balance", newBalance).then(result=>{

                                                    setTransactionType("");
                                                    setTransactionName("");
                                                    setTransactionDescription("");
                                                    setTransactionCategory("");
                                                    setTransactionDate("");
                                                    setTransactionValue("");
                                                    setLoading(false);
                                                    props.setShowAddTransactionMenu(false);
                                                });
                                            }else{

                                                newBalance = parseFloat(props.userData.balance) - Format.intToCurrency(transactionValue);
                                                User.updateData(props.userData.email, "balance", newBalance).then(result=>{

                                                    setTransactionType("");
                                                    setTransactionName("");
                                                    setTransactionDescription("");
                                                    setTransactionCategory("");
                                                    setTransactionDate("");
                                                    setTransactionValue("");
                                                    setLoading(false);
                                                    props.setShowAddTransactionMenu(false);
                                                });
                                            }
                                            
                                            
                                    });
                                }else{
                        
                                    setLoading(false);
                                    setErrorMessage("Selecione o valor.");
                                }
                            }else{
                    
                                setLoading(false);
                                setErrorMessage("Selecione a data.");
                            }
                        }else{
                
                            setLoading(false);
                            setErrorMessage("Preencha a descrição.");
                        }
                    }else{
            
                        setLoading(false);
                        setErrorMessage("Preencha o nome.");
                    }
                }else{

                    setLoading(false);
                    setErrorMessage("Selecione a categoria.");
                }
            }
        }else{

            setLoading(false);
            setErrorMessage("Selecione o tipo.");
        }

        
    }

    return(

        <AddTransactionMenuView
        
            setShowAddTransactionMenu={props.setShowAddTransactionMenu}
            showAddTransactionMenu={props.showAddTransactionMenu}
            
            setTransactionType={setTransactionType}
            setTransferType={setTransferType}
            setTransactionName={setTransactionName}
            setTransactionDescription={setTransactionDescription}
            setTransactionCategory={setTransactionCategory}
            setTransactionDate={setTransactionDate}
            setTransactionValue={setTransactionValue}

            transactionType={transactionType}
            transactionDate={transactionDate}
            transactionValue={transactionValue}
            errorMessage={errorMessage}

            setTransactionValueF={setTransactionValueF}

            addTransaction={addTransaction}
            
            loading={loading}/>
    );
}

export default AddTransactionMenuController;