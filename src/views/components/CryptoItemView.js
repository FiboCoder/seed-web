import "../../styles/CryptoItemStyle.css";

const CryptoItemView = () =>{

    return(

        <div className="crypto-item-container">

            <div className="crypto-item-subcontainer">

            <div className="crypto-item-category-icon-container">ICON</div>
            <div className="crypto-item-name-symbol-container">
                <span className="crypto-item-name-text">Bitcoin</span>
                <span className="crypto-item-symbol-text">BTC</span>
            </div>
            <span className="crypto-item-price-text">$20.649,23</span>

            </div>

            <div className="divider"></div>
        </div>

        
    );
}
export default CryptoItemView;