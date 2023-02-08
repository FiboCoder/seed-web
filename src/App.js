import { useContext } from "react";
import HomeController from "./routes/home/HomeController";
import LoginController from "./routes/login/LoginController";
import RoutesController from "./RoutesController";
import AuthProvider, { AuthContext } from "./utils/AuthProvider";

function App() {

  return (

      <AuthProvider>
        <RoutesController></RoutesController>
      </AuthProvider>
  );
}

export default App;
