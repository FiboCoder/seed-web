import { addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./Firebase";

export class User{

    static save(username, email){

        return new Promise((resolve, reject)=>{

            setDoc(doc(db, "users", email),{

                username: username,
                email: email
                
            }).then(result=>{

                console.log(result)

                resolve(result);
            }).catch(err=>{

                reject(err);
            });
        });
    }

    static signOut(){

        auth.signOut();
    }
}