import axios from "axios";
import { collection, doc, getDoc, onSnapshot, orderBy, } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionItemController from "../../components/TransactionsItemController";
import { AuthContext } from "../../utils/AuthProvider";
import { db } from "../../utils/Firebase";
import { Format } from "../../utils/Format";
import { Transaction } from "../../utils/Transaction";
import { User } from "../../utils/User";
import HomeView from "./HomeView";

const HomeController = () =>{

    const [menuOptionClicked, setMenuOptionClicked] = useState("dashboard");
    const [userData, setUserData] = useState();

    const [transactionType, setTransactionType] = useState("Spendings");
    const [chartTime, setChartTime] = useState("Semana");
    const [selectedDate, setSelectedDate] = useState([]);
    const [calendarSelectRangeVisibility, setCalendarSelectRangeVisibility] = useState(false);

    const [eSum, setESum] = useState();
    const [sSum, setSSum] = useState();
    const [tSum, setTSum] = useState();
    const [transactionsList, setTransactionsList] = useState([]);
    const [transactionsLimitedList, setTransactionsLimitedList] = useState([]);

    const [dataToChart, setDataToChart] = useState([]);

    const { user } = useContext(AuthContext);

    const [showTransactionDetails, setShowTransactionDetails] = useState(false);
    const [clickedTransactionData, setClickedTransactionData] = useState([]);

    const [showAddTransactionMenu, setShowAddTransactionMenu] = useState(false);


    const navigate = useNavigate();

    const chartTimeF = (chartTime) =>{

        switch(chartTime){

            case "1D":
                setChartTime("1D");
                break;

            case "7D":
                setChartTime("7D");
                break;

            case "1M":
                setChartTime("1M");
                break;

            case "3M":
                setChartTime("3M");
                break;

            case "6M":
                setChartTime("6M");
                break;

            case "1Y":
                setChartTime("1Y");
                break;

            case "C":
                setChartTime("C");
                setCalendarSelectRangeVisibility(true);
                break;
        }
    }

    const getCalendarSelectedRange = (startDate, endDate) =>{

        setSelectedDate([startDate.getTime(), endDate.getTime()]);
        setCalendarSelectRangeVisibility(false);
    }

    const openTransactionDetailsModal = (clickedTransactionData) =>{

        setClickedTransactionData(clickedTransactionData);
        setShowTransactionDetails(!showTransactionDetails);
    }

    const fetchData = () =>{

        switch(chartTime){

            case "Semana":
                if(transactionType == "Earnings"){

                    let dataToChart = [0, 0, 0, 0, 0, 0, 0];

                    Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                        if(!transactions.empty){

                            let transactionListArray = [];

                            let sumSu = 0;
                            let sumM = 0;
                            let sumTu = 0;
                            let sumW = 0;
                            let sumTh = 0;
                            let sumF = 0;
                            let sumSa = 0;

                            transactions.forEach(transaction=>{

                                if(transaction.data().type == "Earning"){

                                    if(Format.getDayOfTimestamp(transaction.data().date) == 0){

                                        sumSu = sumSu + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, sumSu);

                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 1){

                                        sumM = sumM + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, sumM);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 2){

                                        sumTu = sumTu + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, sumTu);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 3){

                                        sumW = sumW + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(sumW));
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 4){

                                        sumTh = sumTh + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(4, 1);
                                        dataToChart.splice(4, 0, sumTh);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 5){

                                        sumF = sumF + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(5, 1);
                                        dataToChart.splice(5, 0, sumF);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 6){

                                        sumSa = sumSa + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(6, 1);
                                        dataToChart.splice(6, 0, sumSa);
                                    }
                                }

                                transactionListArray.push(transaction.data());
                            });

                            setDataToChart(dataToChart);
                            setTransactionsList(transactionListArray);
                        }
                    });
                }else if(transactionType == "Spendings"){

                    let dataToChart = [0, 0, 0, 0, 0, 0, 0];

                    Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                        if(!transactions.empty){

                            let transactionListArray = [];

                            let sumSu = 0;
                            let sumM = 0;
                            let sumTu = 0;
                            let sumW = 0;
                            let sumTh = 0;
                            let sumF = 0;
                            let sumSa = 0;

                            transactions.forEach(transaction=>{

                                if(transaction.data().type == "Spending"){

                                    if(Format.getDayOfTimestamp(transaction.data().date) == 0){

                                        sumSu = sumSu + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, sumSu);

                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 1){

                                        sumM = sumM + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, sumM);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 2){

                                        sumTu = sumTu + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, sumTu);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 3){

                                        sumW = sumW + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(sumW));
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 4){

                                        sumTh = sumTh + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(4, 1);
                                        dataToChart.splice(4, 0, sumTh);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 5){

                                        sumF = sumF + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(5, 1);
                                        dataToChart.splice(5, 0, sumF);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 6){

                                        sumSa = sumSa + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(6, 1);
                                        dataToChart.splice(6, 0, sumSa);
                                    }
                                }

                                transactionListArray.push(transaction.data());
                            });

                            setDataToChart(dataToChart);
                            setTransactionsList(transactionListArray);
                        }
                    });
                }else{

                    let dataToChart = [0, 0, 0, 0, 0, 0, 0];

                    Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                        if(!transactions.empty){

                            let transactionListArray = [];

                            let sumSu = 0;
                            let sumM = 0;
                            let sumTu = 0;
                            let sumW = 0;
                            let sumTh = 0;
                            let sumF = 0;
                            let sumSa = 0;

                            transactions.forEach(transaction=>{

                                if(transaction.data().type == "Transfer"){

                                    if(Format.getDayOfTimestamp(transaction.data().date) == 0){

                                        sumSu = sumSu + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, sumSu);

                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 1){

                                        sumM = sumM + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, sumM);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 2){

                                        sumTu = sumTu + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, sumTu);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 3){

                                        sumW = sumW + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(sumW));
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 4){

                                        sumTh = sumTh + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(4, 1);
                                        dataToChart.splice(4, 0, sumTh);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 5){

                                        sumF = sumF + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(5, 1);
                                        dataToChart.splice(5, 0, sumF);
                                    }else if(Format.getDayOfTimestamp(transaction.data().date) == 6){

                                        sumSa = sumSa + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(6, 1);
                                        dataToChart.splice(6, 0, sumSa);
                                    }
                                }

                                transactionListArray.push(transaction.data());
                            });

                            setDataToChart(dataToChart);
                            setTransactionsList(transactionListArray);
                        }
                    });
                }
            break;
            
            case "Mês":
                if(transactionType == "Earnings"){

                    let dataToChart = [0, 0, 0, 0, 0];

                    Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                        if(!transactions.empty){

                            let transactionListArray = [];

                            let week1 = 0;
                            let week2 = 0;
                            let week3 = 0;
                            let week4 = 0;
                            let week5 = 0;

                            transactions.forEach(transaction=>{

                                if(transaction.data().type == "Earning"){

                                    if(Format.findWeek(transaction.data().date) == 1){

                                        week1 = week1 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, week1);

                                    }else if(Format.findWeek(transaction.data().date) == 2){

                                        week2 = week2 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, week2);
                                    }else if(Format.findWeek(transaction.data().date) == 3){

                                        week3 = week3 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, week3);
                                    }else if(Format.findWeek(transaction.data().date) == 4){

                                        week4 = week4 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(week4));
                                    }else if(Format.findWeek(transaction.data().date) == 5){

                                        week5 = week5 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(week5));
                                    }
                                }

                                transactionListArray.push(transaction.data());
                            });

                            setDataToChart(dataToChart);
                            setTransactionsList(transactionListArray);
                        }
                    });
                }else if(transactionType == "Spendings"){

                    let dataToChart = [0, 0, 0, 0, 0];

                    Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                        if(!transactions.empty){

                            let transactionListArray = [];

                            let week1 = 0;
                            let week2 = 0;
                            let week3 = 0;
                            let week4 = 0;
                            let week5 = 0;

                            transactions.forEach(transaction=>{

                                if(transaction.data().type == "Spending"){

                                    if(Format.findWeek(transaction.data().date) == 1){

                                        week1 = week1 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, week1);

                                    }else if(Format.findWeek(transaction.data().date) == 2){

                                        week2 = week2 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, week2);
                                    }else if(Format.findWeek(transaction.data().date) == 3){

                                        week3 = week3 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, week3);
                                    }else if(Format.findWeek(transaction.data().date) == 4){

                                        week4 = week4 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(week4));
                                    }else if(Format.findWeek(transaction.data().date) == 5){

                                        week5 = week5 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(week5));
                                    }
                                }

                                transactionListArray.push(transaction.data());
                            });

                            setDataToChart(dataToChart);
                            setTransactionsList(transactionListArray);
                        }
                    });
                }else{

                    let dataToChart = [0, 0, 0, 0, 0];

                    Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                        if(!transactions.empty){

                            let transactionListArray = [];

                            let week1 = 0;
                            let week2 = 0;
                            let week3 = 0;
                            let week4 = 0;
                            let week5 = 0;

                            transactions.forEach(transaction=>{

                                if(transaction.data().type == "Transfer"){

                                    if(Format.findWeek(transaction.data().date) == 1){

                                        week1 = week1 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, week1);

                                    }else if(Format.findWeek(transaction.data().date) == 2){

                                        week2 = week2 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, week2);
                                    }else if(Format.findWeek(transaction.data().date) == 3){

                                        week3 = week3 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, week3);
                                    }else if(Format.findWeek(transaction.data().date) == 4){

                                        week4 = week4 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(week4));
                                    }else if(Format.findWeek(transaction.data().date) == 5){

                                        week5 = week5 + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(week5));
                                    }
                                }

                                transactionListArray.push(transaction.data());
                            });

                            setDataToChart(dataToChart);
                            setTransactionsList(transactionListArray);
                        }
                    });
                }
            break;
            
            case "Ano":

            if(transactionType == "Earnings"){

                let dataToChart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                    if(!transactions.empty){

                        let transactionListArray = [];

                        let Ja = 0;
                        let Fe = 0;
                        let Mc = 0;
                        let Ap = 0;
                        let My = 0;
                        let Jn = 0;
                        let Jl = 0;
                        let Au = 0;
                        let St = 0;
                        let Oc = 0;
                        let Nv = 0;
                        let Dc = 0;

                        transactions.forEach(transaction=>{

                            if(transaction.data().type == "Earning"){

                                let convertedDate = new Date(transaction.data().date);
                                switch(convertedDate.getMonth() + 1){

                                    case 1:
                                        Ja = Ja + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, Ja);
                                    break;

                                    case 2:
                                        Fe = Fe + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, Fe);
                                    break;

                                    case 3:
                                        Mc = Mc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, Mc);
                                    break;

                                    case 4:
                                        Ap = Ap + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(Ap));
                                    break;

                                    case 5:
                                        My = My + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(4, 1);
                                        dataToChart.splice(4, 0, parseInt(My));
                                    break;

                                    case 6:
                                        Jn = Jn + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(5, 1);
                                        dataToChart.splice(5, 0, parseInt(Jn));
                                    break;

                                    case 7:
                                        Jl = Jl + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(6, 1);
                                        dataToChart.splice(6, 0, parseInt(Jl));
                                    break;

                                    case 8:
                                        Au = Au + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(7, 1);
                                        dataToChart.splice(7, 0, parseInt(Au));
                                    break;

                                    case 9:
                                        St = St + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(8, 1);
                                        dataToChart.splice(8, 0, parseInt(St));
                                    break;

                                    case 10:
                                        Oc = Oc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(9, 1);
                                        dataToChart.splice(9, 0, parseInt(Oc));
                                    break;

                                    case 11:
                                        Nv = Nv + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(10, 1);
                                        dataToChart.splice(10, 0, parseInt(Nv));
                                    break;

                                    case 12:
                                        Dc = Dc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(11, 1);
                                        dataToChart.splice(11, 0, parseInt(Dc));
                                    break;
                                }
                            
                                transactionListArray.push(transaction.data());
                            }
                        });

                        setDataToChart(dataToChart);
                        setTransactionsList(transactionListArray);
                    }
                });
            }else if(transactionType == "Spendings"){

                let dataToChart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                    if(!transactions.empty){

                        let transactionListArray = [];

                        let Ja = 0;
                        let Fe = 0;
                        let Mc = 0;
                        let Ap = 0;
                        let My = 0;
                        let Jn = 0;
                        let Jl = 0;
                        let Au = 0;
                        let St = 0;
                        let Oc = 0;
                        let Nv = 0;
                        let Dc = 0;

                        transactions.forEach(transaction=>{

                            if(transaction.data().type == "Spending"){

                                let convertedDate = new Date(transaction.data().date);
                                switch(convertedDate.getMonth() + 1){

                                    case 1:
                                        Ja = Ja + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, Ja);
                                    break;

                                    case 2:
                                        Fe = Fe + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, Fe);
                                    break;

                                    case 3:
                                        Mc = Mc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, Mc);
                                    break;

                                    case 4:
                                        Ap = Ap + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(Ap));
                                    break;

                                    case 5:
                                        My = My + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(4, 1);
                                        dataToChart.splice(4, 0, parseInt(My));
                                    break;

                                    case 6:
                                        Jn = Jn + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(5, 1);
                                        dataToChart.splice(5, 0, parseInt(Jn));
                                    break;

                                    case 7:
                                        Jl = Jl + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(6, 1);
                                        dataToChart.splice(6, 0, parseInt(Jl));
                                    break;

                                    case 8:
                                        Au = Au + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(7, 1);
                                        dataToChart.splice(7, 0, parseInt(Au));
                                    break;

                                    case 9:
                                        St = St + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(8, 1);
                                        dataToChart.splice(8, 0, parseInt(St));
                                    break;

                                    case 10:
                                        Oc = Oc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(9, 1);
                                        dataToChart.splice(9, 0, parseInt(Oc));
                                    break;

                                    case 11:
                                        Nv = Nv + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(10, 1);
                                        dataToChart.splice(10, 0, parseInt(Nv));
                                    break;

                                    case 12:
                                        Dc = Dc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(11, 1);
                                        dataToChart.splice(11, 0, parseInt(Dc));
                                    break;
                                }
                            
                                transactionListArray.push(transaction.data());
                            }
                        });

                        setDataToChart(dataToChart);
                        setTransactionsList(transactionListArray);
                    }
                });
            }else{

                let dataToChart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                Transaction.fetchDataToChartDash(user.email, chartTime).then(transactions=>{

                    if(!transactions.empty){

                        let transactionListArray = [];

                        let Ja = 0;
                        let Fe = 0;
                        let Mc = 0;
                        let Ap = 0;
                        let My = 0;
                        let Jn = 0;
                        let Jl = 0;
                        let Au = 0;
                        let St = 0;
                        let Oc = 0;
                        let Nv = 0;
                        let Dc = 0;

                        transactions.forEach(transaction=>{

                            if(transaction.data().type == "Transfer"){

                                let convertedDate = new Date(transaction.data().date);
                                switch(convertedDate.getMonth() + 1){

                                    case 1:
                                        Ja = Ja + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(0, 1);
                                        dataToChart.splice(0, 0, Ja);
                                    break;

                                    case 2:
                                        Fe = Fe + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(1, 1);
                                        dataToChart.splice(1, 0, Fe);
                                    break;

                                    case 3:
                                        Mc = Mc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(2, 1);
                                        dataToChart.splice(2, 0, Mc);
                                    break;

                                    case 4:
                                        Ap = Ap + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(3, 1);
                                        dataToChart.splice(3, 0, parseInt(Ap));
                                    break;

                                    case 5:
                                        My = My + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(4, 1);
                                        dataToChart.splice(4, 0, parseInt(My));
                                    break;

                                    case 6:
                                        Jn = Jn + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(5, 1);
                                        dataToChart.splice(5, 0, parseInt(Jn));
                                    break;

                                    case 7:
                                        Jl = Jl + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(6, 1);
                                        dataToChart.splice(6, 0, parseInt(Jl));
                                    break;

                                    case 8:
                                        Au = Au + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(7, 1);
                                        dataToChart.splice(7, 0, parseInt(Au));
                                    break;

                                    case 9:
                                        St = St + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(8, 1);
                                        dataToChart.splice(8, 0, parseInt(St));
                                    break;

                                    case 10:
                                        Oc = Oc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(9, 1);
                                        dataToChart.splice(9, 0, parseInt(Oc));
                                    break;

                                    case 11:
                                        Nv = Nv + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(10, 1);
                                        dataToChart.splice(10, 0, parseInt(Nv));
                                    break;

                                    case 12:
                                        Dc = Dc + parseFloat(transaction.data().value).toFixed(2);
                                        dataToChart.splice(11, 1);
                                        dataToChart.splice(11, 0, parseInt(Dc));
                                    break;
                                }
                            
                                transactionListArray.push(transaction.data());
                            }
                        });

                        setDataToChart(dataToChart);
                        setTransactionsList(transactionListArray);
                    }
                });
            }
                break;

        }
    }

    useEffect(()=>{

        switch(menuOptionClicked){

            case "logout":
                User.signOut();
                navigate("/login");
                break;
        }
    },[menuOptionClicked]);

    useEffect(()=>{


        getDoc(doc(db, "users", user.email)).then(userData=>{

            setUserData(userData.data());
        });

        const transactionsSnapshot = onSnapshot(
            collection(db, "users", user.email, "transactions"),
            orderBy("date", "desc"), (transactions)=>{

                if(!transactions.empty){

                    let transactionsArray = [];

                    transactions.forEach(transaction=>{

                        transactionsArray.push(transaction.data());
                        console.log(transaction.data().name)
                    });

                    setTransactionsList(transactionsArray);
                    setTransactionsLimitedList(transactionsArray);
                }
            });

        return(()=>{

            transactionsSnapshot()
        });
    },[]);

    useEffect(()=>{

        fetchData();
    },[chartTime, selectedDate, transactionType]);

    return(

        <HomeView

            userData={userData}

            setMenuOptionClicked={setMenuOptionClicked}

            menuOptionClicked={menuOptionClicked}

            setTransactionType={setTransactionType}
            setCalendarSelectRangeVisibility={setCalendarSelectRangeVisibility}

            setClickedTransactionData={setClickedTransactionData}
            setShowTransactionDetails={setShowTransactionDetails}

            setShowAddTransactionMenu={setShowAddTransactionMenu}

            transactionType={transactionType}
            chartTime={chartTime}
            chartTimeF={chartTimeF}
            calendarSelectRangeVisibility={calendarSelectRangeVisibility}

            clickedTransactionData={clickedTransactionData}
            showTransactionDetails={showTransactionDetails}

            openTransactionDetailsModal={openTransactionDetailsModal}

            dataToChart={dataToChart}
            transactionsList={transactionsList}
            transactionsLimitedList={transactionsLimitedList}

            showAddTransactionMenu={showAddTransactionMenu}

            getCalendarSelectedRange={getCalendarSelectedRange}
        ></HomeView>
    )
}

export default HomeController;