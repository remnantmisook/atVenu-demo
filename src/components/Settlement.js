import React from "react";
import postersData from "../postersData";

export default function Settlement() {
    const [countFormData, setCountFormData] = React.useState({
        posterUrl:"",
        price:10,
        countIn:0,
        add:0,
        totalIn:0,
        comp:0,
        countOut:0,
        totalSold:0,
        gross:0
    })

    const [allPosters, setAllPosters] = React.useState(postersData)

    const postersArray = allPosters.data.sizes

    console.log("postersArray" + postersArray.length)

    function handleChange(event) {
        const {name, value} = event.target
        setCountFormData(prevCountFormData =>({
            ...prevCountFormData,
            [name] : value,
        }))

        setCountFormData(prevCountFormData =>({
            ...prevCountFormData,
            totalIn : Number.parseInt(prevCountFormData.countIn)+Number.parseInt(prevCountFormData.add),
            totalSold : Number.parseInt(prevCountFormData.totalIn) - Number.parseInt(prevCountFormData.countOut) - Number.parseInt(prevCountFormData.comp),
            gross : Number.parseInt(prevCountFormData.price) * Number.parseInt(prevCountFormData.totalSold)
        }))
    }

    function handleSettlement(event) {
        // const {name} = event.target
        // setCountFormData(prevCountFormData =>({
        //     ...prevCountFormData,
        //     [name] : "readOnly"

        // }))
    }

    return (
        <div className="poster">


            <div className="poster--image">This is image</div>
            <div className="form-container">
                <form className="form" onSubmit={handleSettlement}>
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
                


                </form>


            </div>
        </div> /* poster */

    )
}