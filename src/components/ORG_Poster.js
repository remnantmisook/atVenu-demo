import React from "react";
import postersData from "../postersData";
import Popup from "./Popup";
import FloatingIcon from "./FloatingIcon";
import DoughnutChart from "./DoughnutChart";


export default function Poster() {
    const [countFormData, setCountFormData] = React.useState({
        posterUrl:"",
        description:"",
        price:10,
        countIn:0,
        add:0,
        totalIn:0,
        comp:0,
        countOut:0,
        totalSold:0,
        gross:0,
        totalTotalIn:0,
        totalComp:0,
        totalCountOut:0,
        totalTotalSold:0,
        totalGross:0,

    })

    const [buttonPopup, setButtonPopup] = React.useState(false)


    const [totalCountFormData, setTotalCountFormData] = React.useState({
        totalTotalIn:0,
        totalComp:0,
        totalCountOut:0,
        totalTotalSold:0,
        totalGross:0
    })

    // console.log("postersArray" + postersArray.length)

    function handleChange(event) {
        const {name, value} = event.target
        setCountFormData(prevCountFormData =>({
            ...prevCountFormData,
            [name] : value,
            
        }))

        setCountFormData(prevCountFormData =>({
            ...prevCountFormData,
            totalIn : Number.parseInt(prevCountFormData.countIn)+Number.parseInt(prevCountFormData.add),
            totalSold : Number.parseInt(prevCountFormData.countIn)+Number.parseInt(prevCountFormData.add) - Number.parseInt(prevCountFormData.countOut) - Number.parseInt(prevCountFormData.comp),
            gross : Number.parseInt(prevCountFormData.price) * (Number.parseInt(prevCountFormData.countIn)+Number.parseInt(prevCountFormData.add) - Number.parseInt(prevCountFormData.countOut) - Number.parseInt(prevCountFormData.comp)),
  
            totalTotalIn :  Number.parseInt(prevCountFormData.countIn)+Number.parseInt(prevCountFormData.add),
            totalComp : prevCountFormData.comp,
            totalCountOut : prevCountFormData.countOut,
            totalTotalSold : Number.parseInt(prevCountFormData.countIn)+Number.parseInt(prevCountFormData.add) - Number.parseInt(prevCountFormData.countOut) - Number.parseInt(prevCountFormData.comp),
            totalGross : Number.parseInt(prevCountFormData.price) * (Number.parseInt(prevCountFormData.countIn)+Number.parseInt(prevCountFormData.add) - Number.parseInt(prevCountFormData.countOut) - Number.parseInt(prevCountFormData.comp))
  
  
        }))


     
        // this one should be changed once I figure out how to set value for more than 1 poster size
        // setTotalCountFormData(prevTotalCountFormData =>({
        //     ...prevTotalCountFormData,
        //     totalTotalIn : countFormData.totalIn,
        //     totalComp : countFormData.comp,
        //     totalCountOut : countFormData.countOut,
        //     totalTotalSold : countFormData.totalSold,
        //     totalGross : countFormData.gross
        // }))

    }


    function handleSettlement() {
        document.getElementById("countIn").readOnly = true
        document.getElementById("add").readOnly = true
        document.getElementById("comp").readOnly = true
        document.getElementById("countOut").readOnly = true
    }

    return (
        <div className="main">


        <div className="poster">
            <div className="poster--image">
                <img src="./merrychristmas-1.png" />
                <span>price:${`${countFormData.price}`}</span>
            </div>
            <FloatingIcon
                    trigger={countFormData.description}
                    description={countFormData.description}
            />
            <div className="form--container">
                <div className="form--label">
                    <label htmlFor="countIn">Count In</label>
                    <label htmlFor="add">Add</label>
                    <label htmlFor="totalIn">Total In</label>
                    <label htmlFor="comp">Comp</label>
                    <label htmlFor="countOut">Count Out</label>
                    <label htmlFor="totalSold">Total Sold</label>
                    <label htmlFor="gross">Gross</label>
                </div>

                <div className="form--input">
                    <input 
                        id="countIn"
                        type="text"
                        name="countIn"
                        value={countFormData.countIn}
                        onChange={handleChange}
                    />
                    <input className="font--green"
                        id="add"
                        type="text"
                        name="add"
                        value={countFormData.add}
                        onChange={handleChange}
                    />
                    <input className="font--blue"
                        id="totalIn"
                        type="text"
                        name="totalIn"
                        value={countFormData.totalIn}
                        readOnly={true}
                    />
                    <input className="font--red"
                        id="comp"
                        type="text"
                        name="comp"
                        value={countFormData.comp}
                        onChange={handleChange}
                    />
                    <input
                        id="countOut"
                        type="text"
                        name="countOut"
                        value={countFormData.countOut}
                        onChange={handleChange}
                    />
                    <input className="font--blue"
                        id="totalSold"
                        type="text"
                        name="totalSold"
                        value={countFormData.totalSold}
                        readOnly={true}

                    />
                    <input className="font--blue"
                        id="gross"
                        type="text"
                        name="gross"
                        value={countFormData.gross}
                        readOnly={true}
                    />
                </div> 

            
                <div className="form--input-total">

                    <button className="button--more" onClick={()=>setButtonPopup(true)}>
                        More 
                    </button>

                    <Popup 
                        trigger={buttonPopup} 
                        setTrigger={setButtonPopup}
                        description={countFormData.description}
                        price={countFormData.price}
                        handleChange={handleChange}
                    />  

                    <input className="font--blue"
                        id="totalTotalIn"
                        type="text"
                        name="totalIn"
                        value={countFormData.totalTotalIn}
                        readOnly={true}
                    />
                    <input className="font--red"
                        id="totalComp"
                        type="text"
                        name="comp"
                        value={countFormData.totalComp}
                        readOnly={true}
                    />
                    <input
                        id="countOut"
                        type="text"
                        name="countOut"
                        value={countFormData.totalCountOut}
                        readOnly={true}
                    />
                    <input className="font--blue"
                        id="totalSold"
                        type="text"
                        name="totalSold"
                        value={countFormData.totalTotalSold}
                        readOnly={true}

                    />

                    <input className="font--blue"
                        id="gross"
                        type="text"
                        name="gross"
                        value={countFormData.totalGross}
                        readOnly={true}
                    />
                </div> 

            </div>

        </div>
        <hr />
        <div className="summary">
            <div className="summary--total">
                <div className="doughnut--title"><h2>TOTAL SOLD QUAN.</h2></div>
                <div><DoughnutChart 
                    text={`${countFormData.totalSold} UNITS SOLD`}
                    maxVal={100}
                    minVal={0}
                />
                </div>
                <div>
                    <h1 className="font--blue">{`$${countFormData.gross}`}</h1>
                </div>
                <div>
                    <button className="button--settlement" onClick={handleSettlement}>SETTLE</button>
                </div>

            </div>
            <div className="summary--total">
                <div className="doughnut--title">
                    <h2>TOTAL SOLD PERCENTAGE</h2>
                </div>
                <div>
                    <DoughnutChart 
                        text={`${countFormData.totalTotalSold} OUT OF ${countFormData.totalTotalIn}`}
                        maxVal={countFormData.totalTotalIn}
                        minVal={countFormData.totalCountOut}
                    />
                </div>
            </div>
        </div>
        </div>



    )
}