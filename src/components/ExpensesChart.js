import react from "react";
import Chart from "./Charts/Chart";

const ExpensesChart = (props) => {
    const chartData = [
        {value: 0, label: 'jan'},
        {value: 0, label: 'feb'},
        {value: 0, label: 'mar'},
        {value: 0, label: 'apr'},
        {value: 0, label: 'jun'},
        {value: 0, label: 'jul'},
        {value: 0, label: 'aug'},
        {value: 0, label: 'sep'},
        {value: 0, label: 'oct'},
        {value: 0, label: 'nov'},
        {value: 0, label: 'dec'},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartData[expenseMonth].value += expense.amount;
    }

    return <Chart chartData={chartData}/>
}

export default ExpensesChart;