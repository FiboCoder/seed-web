import { Line} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../styles/Cryptocoins.css";
import { IoIosArrowDown } from "react-icons/io";
import CryptoItemController from "../controller/components/CryptoItemController";


const CryptocurrenciesView = () =>{

    return(

        <div className="cryptocoins-view-container">
            <div className="cryptocoins-list-container">

                <span className="cryptocoins-list-container-title-text">Criptomoedas</span>

                <div className="cryptocoins-list">

                    <CryptoItemController></CryptoItemController>
                </div>

            </div>

            <div className="crypto-details-container">

                <span className="crypto-details-container-title-text">Detalhes da Criptomoeda</span>

                <div className="crypto-details-main-container">

                    <span className="crypto-details-crypto-name-text">Bitcoin</span>
                    <span className="crypto-details-crypto-symbol-text">BTC</span>
                    <div className="crypto-details-crypto-price-container">
                        <span className="crypto-details-crypto-price-text">$14.645,32</span>
                        <div className="crypto-details-crypto-price-change-percent-container">
                            <IoIosArrowDown className="crypto-details-crypto-price-change-percent-icon"></IoIosArrowDown>
                            <span className="crypto-details-crypto-price-change-percent-text">6,16%</span>
                        </div>
                    </div>

                    <div className="crypto-details-chart">
                        <Line 
                            data={{
                                labels:["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
                                datasets:[{
                                    label: 'Ganhos',
                                    data: [12.63, 78.49, 26.12, 31.67, 1.39, 2.00, 73.99],
                                    backgroundColor: "green",
                                    borderColor: "green",
                                    borderWidth: 2,
                                    
                                    
                                }]
                            }}
                        ></Line>
                    </div>

                    <span className="crypto-details-about-crypto-title-text">Conheça mais sobre a criptomoeda</span>
                    <span className="crypto-details-about-crypto-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </span>

                </div>
            </div>
        </div>
    );
}

export default CryptocurrenciesView;