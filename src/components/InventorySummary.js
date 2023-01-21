import React from "react";
import DoughnutChart from "./DoughnutChart";

export default function InventorySummary(props) {
    const inventories = props.inventories
    let totalTotalIn=0, totalComp=0, totalCountOut=0, totalTotalSold=0, totalGross = 0
    for (let i=0; i < inventories.length; i++) {
        totalTotalIn = totalTotalIn + Number.parseInt(inventories[i].totalIn)
        totalComp = totalComp + Number.parseInt(inventories[i].comp)
        totalCountOut = totalCountOut + Number.parseInt(inventories[i].countOut)
        totalTotalSold = totalTotalSold + Number.parseInt(inventories[i].totalSold)
        totalGross = totalGross + Number.parseInt(inventories[i].gross)
    }
    return (
        <div id="summary-grid">

     
            <div className="summary">
                <div className="button--settlement-div">
                    <button 
                        className={`button--settlement ${
                                props.isReadOnly  ? "dispute" : ""
                                    }`}
                        onClick={props.handleSettlement}>{props.isReadOnly ? "DISPUTE" : "SETTLE"}
                    </button>
                </div>
                <div className="summary--total">
                    <div className="doughnut--title"><h2>TOTAL QUAN. SOLD</h2></div>
                    <div><DoughnutChart 
                        text={`${totalTotalSold} UNITS SOLD`}
                        maxVal={100}
                        minVal={0}
                    />
                    </div>
                    <div>
                        <h1 className="font--blue">{`$${totalGross}`}</h1>
                    </div>


                </div>
                <div className="summary--total">
                    <div className="doughnut--title">
                        <h2>TOTAL PERC. SOLD</h2>
                    </div>
                    <div>
                        <DoughnutChart 
                            text={`${totalTotalSold} OUT OF ${totalTotalIn}`}
                            maxVal={Math.ceil(totalTotalSold/totalTotalIn * 100)}
                            minVal={100 - Math.ceil(totalTotalSold/totalTotalIn * 100)}
                        />
                    </div>
                    <div>
                        <h1 className="font--blue">{
                            totalTotalIn > 0 ?
                        `${Math.ceil(totalTotalSold/totalTotalIn * 100)}%`
                        : "0%"
                        }</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}