import { Line } from "react-chartjs-2";

const ChartDash = (props) =>{

    console.log(props.dataToChart)

    const renderLabels = () =>{

        switch(props.chartTime){

            case "Semana":
                return ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

            case "Mês":
                return ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5"];

            case "Ano":
                return ["Jan", "Fev", "Mar", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
        }
    }

    const renderColor = () =>{

        switch(props.transactionType){

            case "Earnings":
                return "green";
        
            
            case "Spendings":
                return "red";

                    
            case "Transfers":
                return "gray";
        }
    }

    const renderLabel = () =>{

        switch(props.transactionType){

            case "Earnings":
                return "Ganhos";

            case "Spendings":
                return "Gastos";

            case "Transfers":
                return "Transferências";
        }
    }

    return(

        <Line 
            data={{
                labels: renderLabels(),
                datasets:[{
                    label: renderLabel(),
                    data: props.dataToChart,
                    backgroundColor: renderColor(),
                    borderColor: renderColor(),
                    borderWidth: 2,
                    tension: 0.5,
                    
                }],
            }}
        ></Line>
    );
}

export default ChartDash;