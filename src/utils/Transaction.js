import { collection, doc, getDocs, query, where } from "firebase/firestore";
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
}