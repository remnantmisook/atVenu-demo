import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function DoughnutChart(props) {
    console.log("maxVal:" + props.maxVal + " minVal:" + props.minVal)
    const data = {
        label: ['Yes', 'No'],
        datasets: [{
            label: '',
            data: [`${props.maxVal}`,`${props.minVal}`],
            backgroundColor: ['blue', 'white'],
            borderColor: ['blue', 'blue'],    
            width:10,       
        }]
    }
    const options = {
        padding:"0px",
        responsive: false,
        maintainAspectRatio:false,
        cutout: '90%',
    }
    const textCenter = {
        id: 'textCenter',
        afterDatasetsDraw(chart, args, pluginOptions) {
            let {ctx, data} = chart
            // ctx.save()
            ctx.font = 'bold 15px Poppins'
            ctx.fillStyle = 'black'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(`${props.text}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)

        }
    }
    return (
            <Doughnut
                data = {data}
                options = {options}
                plugins = {[textCenter]}
                redraw = {true}
            />
    )
}