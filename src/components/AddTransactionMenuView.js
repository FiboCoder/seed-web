import "./AddTransactionMenuStyle.css";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { TbFileDescription } from "react-icons/tb";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";
import Select from 'react-select';
const AddTransactionMenuView = (props) =>{

    const transactionTypeOptions = [

        {value: "Ganho", label: "Ganho"},
        {value: "Gasto", label: "Gasto"},
        {value: "Transferência", label: "Transferência"},
    ];

    const categoryOption = [
    ]

    return(
        <div className="add-transaction-menu-container-main">
            <button onClick={()=>{props.setShowAddTransactionMenu(false)}} className="add-transaction-menu-out-container">
            </button>
            <div className="add-transaction-menu-container">
                <div className="add-transaction-menu-top-container">
                    <AiOutlineClose onClick={()=>{props.setShowAddTransactionMenu(false)}} className="add-transaction-close-icon"/>
                    <span className="add-transaction-menu-title-text">Adicionar Transação</span>
                </div>

            <span className="add-transaction-menu-field-title-text">Tipo da transação</span>

            <div className="add-transaction-menu-field-container">
                <Select  options={transactionTypeOptions}/>
            </div>

            <span className="add-transaction-menu-field-title-text">Nome da transação</span>

            <div className="add-transaction-menu-field-container">
                <HiOutlinePencilAlt className="add-transaction-menu-icon"/>
                <input className="add-transaction-menu-input" placeholder="Nome da transação"></input>
            </div>

            <span className="add-transaction-menu-field-title-text">Descrição da transação</span>

            <div className="add-transaction-menu-field-container">
                <TbFileDescription className="add-transaction-menu-icon"/>
                <input className="add-transaction-menu-input" placeholder="Descrição da transação"></input>
            </div>

            <span className="add-transaction-menu-field-title-text">Categoria da transação</span>

            <div className="add-transaction-menu-field-container">
            <Select className="react-select-container" options={transactionTypeOptions}/>
            </div>
            <span className="add-transaction-menu-field-title-text">Data da transação</span>
            <div className="add-transaction-menu-field-container">
                <AiOutlineCalendar className="add-transaction-menu-icon"/>
                <span className="add-transaction-menu-input">Data</span>
            </div>

            <button className="add-transaction-menu-button">Adicionar Transação</button>
            </div>
        </div>
    )
}

export default AddTransactionMenuView;