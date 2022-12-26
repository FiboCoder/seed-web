import axios from "axios";
import { useEffect, useState } from "react";
import HomeView from "../views/HomeView"

const HomeController = () =>{

    const [cryptoData, setCryptoData] = useState([]);

    useEffect(async ()=>{

        const response = await axios.get(  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true');
        setCryptoData(response.data());
    },[]);

    return(

        <HomeView></HomeView>
    )
}

export default HomeController;