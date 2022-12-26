import "../styles/CryptoItemStyle.css";

const CryptoItemView = () =>{

    return(

        <div className="crypto-item-container">

            <div className="crypto-item-category-icon-container">ICON</div>
            <div className="crypto-item-name-symbol-container">
                <span className="crypto-item-price-text">Nome</span>
                <span className="crypto-item-price-text">Símbolo</span>
            </div>
            <span className="crypto-item-price-text">Preço</span>


        </div>
    );
}
export default CryptoItemView;