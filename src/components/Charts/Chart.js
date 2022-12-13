import react from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.chartData.map(data => data.value);
    const totalMaximum = Math.max(...dataPointValues) ;

    return (
        <div className="chart">
            {props.chartData.map(dataPoint => (
            <ChartBar 
                value={dataPoint.value}
                label={dataPoint.label}
                maxValue={totalMaximum}
                key={dataPoint.label}
            />
            
            ))}
        </div>
    )
}

export default Chart;