import "./AddTransactionMenuStyle.css";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { TbFileDescription } from "react-icons/tb";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";
import Select, {StylesConfig} from 'react-select';
import ReactDatePicker, { getDefaultLocale, registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';
import chroma from 'chroma-js';
import Loading from "./Loading";
import { Format } from "../utils/Format";

const AddTransactionMenuView = (props) =>{

    registerLocale("ptBR", ptBR);
    setDefaultLocale("ptBR");

    const transactionTypeOptions = [

        {value: "Earning", label: "Ganho"},
        {value: "Spending", label: "Gasto"},
        {value: "Transfer", label: "Transferência"},
    ];

    const earningCategoryOptions = [

        {value: "Salário", label: "Salário"},
        {value: "Rendimentos", label: "Rendimentos"},
        {value: "Renda Extra", label: "Renda Extra"}
    ];

    const spendingCategoryOptions = [

        {value: "Contas Básicas", label: "Contas Básicas"},
        {value: "Aluguel", label: "Aluguel"},
        {value: "Lazer", label: "Lazer"},
        {value: "Academia", label: "Academia"},
        {value: "Saúde", label: "Saúde"},
        {value: "Emergência", label: "Emergência"},
    ];

    const transferTypeOptions = [

        {value: "Sent", label: "Enviada"},
        {value: "Received", label: "Recebida"}
    ];

    const dot = (color = 'transparent') => ({
        alignItems: 'center',
        display: 'flex',
      
        ':before': {
          backgroundColor: color,
          borderRadius: 10,
          content: '" "',
          display: 'block',
          marginRight: 8,
          height: 10,
          width: 10,
        },
      });


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
                <Select onChange={(e)=>{props.setTransactionType(e.value)}} options={transactionTypeOptions}/>
            </div>

            {

                props.transactionType != "Transfer"
                    ?
                        <>
                            <span className="add-transaction-menu-field-title-text">Categoria da transação</span>

                            <div className="add-transaction-menu-field-container">
                                <Select onChange={(e)=>{props.setTransactionCategory(e.value)}} className="react-select-container" options={props.transactionType == "Earning" ? earningCategoryOptions : spendingCategoryOptions}/>
                            </div>
                        </>
                    :
                    null
            }

            {

                props.transactionType == "Transfer"
                    ?
                        <>
                            <span className="add-transaction-menu-field-title-text">Tipo de transferência</span>

                            <div className="add-transaction-menu-field-container">
                                <Select onChange={(e)=>{props.setTransferType(e.value)}}  options={transferTypeOptions}/>
                            </div>
                        </>
                    :
                        null
            }

            <span className="add-transaction-menu-field-title-text">Nome da transação</span>

            <div className="add-transaction-menu-field-container">
                <HiOutlinePencilAlt className="add-transaction-menu-icon"/>
                <input onChange={(e)=>{props.setTransactionName(e.target.value)}} className="add-transaction-menu-input" placeholder="Nome da transação"></input>
            </div>

            <span className="add-transaction-menu-field-title-text">Descrição da transação</span>

            <div className="add-transaction-menu-field-container">
                <TbFileDescription className="add-transaction-menu-icon"/>
                <input onChange={(e)=>{props.setTransactionDescription(e.target.value)}} className="add-transaction-menu-input" placeholder="Descrição da transação"></input>
            </div>

            <span className="add-transaction-menu-field-title-text">Data da transação</span>
            <div className="add-transaction-menu-field-container">
                <AiOutlineCalendar className="add-transaction-menu-icon"/>
                <ReactDatePicker className="add-transaction-menu-input" locale="ptBR" selected={props.transactionDate} onSelect={(date)=>{props.setTransactionDate(date)}}/>
            </div>

            <span className="add-transaction-menu-field-title-text">Valor da transação</span>

            <div className="add-transaction-menu-field-container">
                <HiOutlinePencilAlt className="add-transaction-menu-icon"/>
                <input onChange={(e)=>{props.setTransactionValueF(e.target.value)}} className="add-transaction-menu-input" placeholder="R$0,00" value={"R$"+Format.intToReal(props.transactionValue)}></input>
            </div>

            {

                props.errorMessage ? <span className="add-transaction-menu-error-message-text">{props.errorMessage}</span> : null
            }

            <button onClick={()=>{props.addTransaction()}} className={props.loading ? "add-transaction-menu-button-active" : "add-transaction-menu-button"}>{props.loading ? "Adicionando" : "Adicionar Transação"}{props.loading ? <Loading/> : null}</button>
            </div>
        </div>
    )
}

export default AddTransactionMenuView;