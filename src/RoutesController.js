import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeController from "./routes/home/HomeController";
import LoginController from "./routes/login/LoginController";
import RegisterController from "./routes/register/RegisterController";
import { AuthContext } from "./utils/AuthProvider";

const RoutesController = () =>{


    const {signedIn} = useContext(AuthContext);

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={signedIn ? <HomeController/> : <LoginController/>}></Route>
                <Route path="/login" element={<LoginController/>}></Route>
                <Route path="/register" element={<RegisterController/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesController;