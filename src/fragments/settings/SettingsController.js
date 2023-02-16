import { useEffect, useState } from "react";
import { User } from "../../utils/User";
import SettingsView from "./SettingsView";

const SettingsController = (props) =>{

    const [editPencilClicked, setEditPencilClicked] = useState("");
    const [imageProfile, setImageProfile] = useState(null);
    const [text, setText] = useState("");

    const [loading, setLoading] = useState(false);

    const pencilClicked = (fieldName) =>{

        switch(fieldName){

            case "username":
                setEditPencilClicked("username");
            break;

            case "email":
                setEditPencilClicked("email");
            break;

            case "password":
                setEditPencilClicked("password");
            break;
        }
    }

    const updateData = (type) =>{

        setLoading(true);

        setEditPencilClicked("");

        User.updateData(props.userData.email, type, text).then(result=>{

            setLoading(false);
        });
    }

    useEffect(()=>{

        if(imageProfile != null){

            setLoading(true);

            User.uploadImage(props.userData.email, imageProfile).then(result=>{

                User.updateData(props.userData.email, "image", result).then(result=>{

                    setLoading(false);
                });
            });
        }
    },[imageProfile]);

    return(

        <SettingsView
        
            setEditPencilClicked={setEditPencilClicked}
            editPencilClicked={editPencilClicked}
            setImageProfile={setImageProfile}
            setText={setText}

            pencilClicked={pencilClicked}
            updateData={updateData}
            userData={props.userData}

            loading={loading}
        ></SettingsView>
    );
}
export default SettingsController;