import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "./Firebase";

export class Transaction{

    static fetchDataToChartDash(email, chartTime){

        return new Promise((resolve, reject)=>{

            if(chartTime == "week"){

                let d = new Date();
                d.setDate(d.getDate() - 7);
                d.setHours(0, 0, 0, 0);

                const q = query(collection(db, "users", email, "transactions"), where("date", ">=", d.getTime()));
                getDocs(q).then(transactions=>{

                    resolve(transactions);
                }).catch(err=>{

                    reject(err);
                });

            }else if(chartTime == "month"){

                let d = new Date();
                d.setDate(d.getDate() - 30);
                d.setHours(0, 0, 0, 0);

                const q = query(collection(db, "users", email, "transactions"), where("date", ">=", d.getTime()));
                getDocs(q).then(transactions=>{

                    resolve(transactions);
                }).catch(err=>{

                    reject(err);
                });

            }else{

                let d = new Date();
                d.setDate(d.getDate() - 365);
                d.setHours(0, 0, 0, 0);
                
                const q = query(collection(db, "users", email, "transactions"), where("date", ">=", d.getTime()));
                const querySnapshot = getDocs(q);
                querySnapshot.then(transactions=>{

                    resolve(transactions);
                }).catch(err=>{

                    reject(err);
                });
            }
        });
    }

    static addTransaction(
        email, 
        type,
        name, 
        description, 
        category, 
        date, 
        value,
        transferType){

            return new Promise((resolve, reject)=>{

                if(type == "Transfer"){

                    addDoc(collection(db, "users", email, "transactions"),{

                        type,
                        name,
                        description,
                        date,
                        value,
                        transferType
                    }).then(result=>{
    
                        resolve(result);
                    }).catch(err=>{
    
                        reject(err);
                    });
                }else{

                    addDoc(collection(db, "users", email, "transactions"),{

                        type,
                        name,
                        description,
                        category,
                        date,
                        value
                    }).then(result=>{
    
                        resolve(result);
                    }).catch(err=>{
    
                        reject(err);
                    });
                }

                
            });
    }
}