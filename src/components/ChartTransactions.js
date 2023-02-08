import { Pie } from "react-chartjs-2";

const ChartTransactions = (props) =>{

    return(

        <Pie data={{
            labels: ["Green", "Red", "Gray"],
            datasets:[{
                label: "",
                data: props.dataToChart,
                backgroundColor: ["green", "red", "gray"],
                borderColor: ["green", "red", "gray"],
                borderWidth: 2,
                tension: 0.5,
                
            }],
        }} />
    )
}

export default ChartTransactions;