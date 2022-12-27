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

export default function ORG_DoughnutChart(props) {
    
    const data = {
        label: ['Yes', 'No'],
        datasets: [{
            label: 'Poll',
            data: [100,1],
            backgroundColor: ['blue', 'blue'],
            borderColor: ['blue', 'blue'],    
            width:10,       
        }]
    }
    const options = {
        padding:"0px",
        responsive:true,
        maintainAspectRatio:true,
        cutout: '90%',
    }
    const textCenter = {
        id: 'textCenter',
        afterDatasetsDraw(chart, args, pluginOptions) {
            let {ctx, data} = chart
            // ctx.save()
            ctx.font = 'bold 20px sans-serif'
            ctx.fillStyle = 'black'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(`${props.totalSold} UNITS SOLD`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }
    return (
        
        <div className="doughnut">
            <div className="doughnut--title"><h1>TOTAL</h1></div>
            <div className="doughnut--chart">
            <Doughnut
                data = {data}
                options = {options}
                plugins = {[textCenter]}
                redraw = {true}
            />
            </div>
  

        </div>
    )
}