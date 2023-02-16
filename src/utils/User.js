import { updatePassword } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "./Firebase";

export class User{

    static save(username, email){

        return new Promise((resolve, reject)=>{

            setDoc(doc(db, "users", email),{

                username: username,
                email: email
                
            }).then(result=>{

                resolve(result);
            }).catch(err=>{

                reject(err);
            });
        });
    }

    static updateData(email, type, data){

        return new Promise((resolve, reject)=>{

            if(type == "username"){

                updateDoc(doc(db, "users", email),{
    
                    username: data
                }).then(result=>{

                    resolve(result);
                }).catch(err=>{
    
                    reject(err);
                });
            }else if(type == "pass"){
    
                const user = auth.currentUser;
                updatePassword(user, data).then(result=>{

                    resolve(result);
                }).catch(err=>{

                    reject(err);
                });
            }else if(type == "image"){

                updateDoc(doc(db, "users", email),{
    
                    imageUrl: data
                }).then(result=>{

                    resolve(result);
                }).catch(err=>{
    
                    reject(err);
                });
            }
        });
    }

    static uploadImage(email, imageProfile){

        return new Promise((resolve, reject)=>{

            let path = "images/users/" + email + "/profile/" + email;

            const  imageRef = ref(storage, path);
            uploadBytes(imageRef, imageProfile).then(snapshot=>{

                console.log(snapshot)

                getDownloadURL(imageRef).then(url=>{

                    resolve(url);
                }).catch(err=>{
                    console.log(err)

                    reject(err);
                }).catch(err=>{
                    console.log(err)
                    reject(err);
                })
            })
        });
    }

    static signOut(){

        auth.signOut();
    }
}