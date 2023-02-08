import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { Transaction } from "../../utils/Transaction";
import TransactionsView from "./TransactionsView";

const TransactionsController = (props) =>{

    const [chartTimeListVisibleTransactions, setChartTimeListVisibleTransactions] = useState(false);

    const [chartTimeTransactions, setChartTimeTransactions] = useState("week");

    const [eSum, setESum] = useState();
    const [sSum, setSSum] = useState();
    const [tSum, setTSum] = useState();
    const [dataToChart, setDataToChart] = useState([]);


    const chartTimeTransactionsF = (chartTime) =>{

        switch(chartTime){

            case "week":
                setChartTimeTransactions("week");
                setChartTimeListVisibleTransactions(false);
                break;

            case "month":
                setChartTimeTransactions("month");
                setChartTimeListVisibleTransactions(false);
                break;

            case "year":
                setChartTimeTransactions("year");
                setChartTimeListVisibleTransactions(false);
                break;
        }
    }

    const fetchData = () =>{

        switch(chartTimeTransactions){

            case "week":
                Transaction.fetchDataToChartDash(props.email, chartTimeTransactions).then(transactions=>{

                    if(!transactions.empty){

                        let eSum = 0;
                        let sSum = 0;
                        let tSum = 0;
                        let totalSum = 0;

                        transactions.forEach(transaction=>{

                            if(transaction.data().type == "Earning"){

                                console.log("SEMANA, GANHO");

                                eSum = eSum + parseFloat(transaction.data().value);
                            
                            }else if(transaction.data().type == "Spending"){

                                sSum = sSum + parseFloat(transaction.data().value);
    
                            }else{
    
                                tSum = tSum + parseFloat(transaction.data().value);
                            }
                        });


                        totalSum = eSum + sSum + tSum;

                        let eSumPercent = parseFloat((eSum*100/totalSum).toFixed(2));
                        let sSumPercent = parseFloat((sSum*100/totalSum).toFixed(2));
                        let tSumPercent = parseFloat((tSum*100/totalSum).toFixed(2));

                        let dataToChart = [eSumPercent, sSumPercent, tSumPercent];

                        setDataToChart(dataToChart);

                        console.log(eSumPercent+" --- "+sSumPercent+" --- "+tSumPercent)

                        setESum(eSum);
                        setSSum(sSum);
                        setTSum(tSum);
                    }
                });
            break;

            case "month":
                Transaction.fetchDataToChartDash(props.email, chartTimeTransactions).then(transactions=>{

                    if(!transactions.empty){

                        let eSum = 0;
                        let sSum = 0;
                        let tSum = 0;
                        let totalSum = 0;

                        transactions.forEach(transaction=>{

                            if(transaction.data().type == "Earning"){

                                eSum = eSum + parseFloat(transaction.data().value);
                            
                            }else if(transaction.data().type == "Spending"){

                                sSum = sSum + parseFloat(transaction.data().value);
    
                            }else{
    
                                tSum = tSum + parseFloat(transaction.data().value);
                            }
                        });


                        totalSum = eSum + sSum + tSum;

                        let eSumPercent = parseFloat((eSum*100/totalSum).toFixed(2));
                        let sSumPercent = parseFloat((sSum*100/totalSum).toFixed(2));
                        let tSumPercent = parseFloat((tSum*100/totalSum).toFixed(2));

                        let dataToChart = [eSumPercent, sSumPercent, tSumPercent];

                        console.log(eSumPercent+" --- "+sSumPercent+" --- "+tSumPercent)

                        setDataToChart(dataToChart);

                        setESum(eSum);
                        setSSum(sSum);
                        setTSum(tSum);
                    }
                });
            break;

            case "year":
                Transaction.fetchDataToChartDash(props.email, chartTimeTransactions).then(transactions=>{

                    if(!transactions.empty){

                        let eSum = 0;
                        let sSum = 0;
                        let tSum = 0;
                        let totalSum = 0;

                        transactions.forEach(transaction=>{

                            if(transaction.data().type == "Earning"){

                                eSum = eSum + parseFloat(transaction.data().value);
                            
                            }else if(transaction.data().type == "Spending"){

                                sSum = sSum + parseFloat(transaction.data().value);
    
                            }else{
    
                                tSum = tSum + parseFloat(transaction.data().value);
                            }
                        });


                        totalSum = eSum + sSum + tSum;

                        let eSumPercent = parseFloat((eSum*100/totalSum).toFixed(2));
                        let sSumPercent = parseFloat((sSum*100/totalSum).toFixed(2));
                        let tSumPercent = parseFloat((tSum*100/totalSum).toFixed(2));

                        let dataToChart = [eSumPercent, sSumPercent, tSumPercent];

                        console.log(eSumPercent+" --- "+sSumPercent+" --- "+tSumPercent)

                        setDataToChart(dataToChart);

                        setESum(eSum);
                        setSSum(sSum);
                        setTSum(tSum);
                    }
                });
            break;
        }
    }

    useEffect(()=>{

        fetchData();
    },[chartTimeTransactions])


    return(

        <TransactionsView
        
            transactionsList={props.transactionsList}
            setChartTimeListVisibleTransactions={setChartTimeListVisibleTransactions}
            setChartTime={setChartTimeTransactions}
            
            chartTimeTransactions={chartTimeTransactions}
            chartTimeListVisibleTransactions={chartTimeListVisibleTransactions}
            
            chartTimeTransactionsF={chartTimeTransactionsF}

            dataToChart={dataToChart}
            >
                

        </TransactionsView>
    );
}
export default TransactionsController;