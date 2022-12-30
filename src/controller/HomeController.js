import axios from "axios";
import { useEffect, useState } from "react";
import HomeView from "../views/HomeView";

const HomeController = () =>{

    const [menuOptionClicked, setMenuOptionClicked] = useState("dashboard");

    return(

        <HomeView

            setMenuOptionClicked={setMenuOptionClicked}

            menuOptionClicked={menuOptionClicked}
        ></HomeView>
    )
}

export default HomeController;