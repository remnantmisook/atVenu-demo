import React from "react";
import Popup from "./Popup";

export default function InventoryTotal(props) {
    const [buttonPopup, setButtonPopup] = React.useState(false)

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
        <div className="form--input-total">

            <button className="button--more" onClick={()=>setButtonPopup(true)}>
                More 
            </button>

            <Popup 
                trigger={buttonPopup} 
                setTrigger={setButtonPopup}
                description={props.inventories[0].description}
                price={props.inventories[0].price}
                handleChange={props.handleChange}
            />  

            <input className="font--blue"
                id="totalTotalIn"
                type="text"
                name="totalIn"
                value={totalTotalIn}
                readOnly={true}
            />
            <input className="font--red"
                id="totalComp"
                type="text"
                name="comp"
                value={totalComp}
                readOnly={true}
            />
            <input
                id="countOut"
                type="text"
                name="countOut"
                value={totalCountOut}
                readOnly={true}
            />
            <input className="font--blue"
                id="totalSold"
                type="text"
                name="totalSold"
                value={totalTotalSold}
                readOnly={true}

            />

            <input className="font--blue"
                id="gross"
                type="text"
                name="gross"
                value={totalGross}
                readOnly={true}
            />
        </div> 
    )
}