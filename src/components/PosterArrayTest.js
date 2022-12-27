import React from "react";
import postersData from "../postersData";

export default function PosterArrayTest() {
    // const [countFormData, setCountFormData] = React.useState({
    //     posterUrl:"",
    //     price:10,
    //     countIn:0,
    //     add:0,
    //     totalIn:0,
    //     comp:0,
    //     countOut:0,
    //     totalSold:0,
    //     gross:0
    // })

    const [countFormData, setCountFormData] = React.useState({values:[]})

    console.log(countFormData)

    const [totalCountFormData, setTotalCountFormData] = React.useState({
        totalTotalIn:0,
        totalComp:0,
        totalCountOut:0,
        totalTotalSold:0,
        totalGross:0
    })

    // const [allPosters, setAllPosters] = React.useState(postersData)

    const postersArray = postersData.data.posters

    // console.log("postersArray" + postersArray.length)

    function handleChange(i, event) {
        const {name, value} = event.target
        console.log("name:" + name + " value:" + value)
        setCountFormData(prevCountFormData =>({
            ...prevCountFormData,
            [name] : value,
            
        }))

        setCountFormData(function(prevCountFormData) {
            console.log("i:" +i)
            const totalInIndex = "totalIn" + i
            console.log("totalIn:" + totalInIndex)
            return (
                {
                    ...prevCountFormData,
                    ${totalInIndex} : 0
                }
                
            )

        })
        // setCountFormData(prevCountFormData =>({
        //     ...prevCountFormData,
        //     totalIn{i} : Number.parseInt(prevCountFormData.countIn{i})+Number.parseInt(prevCountFormData.add{i})
        // }))

        // setCountFormData(prevCountFormData =>({
        //     ...prevCountFormData,
        //     totalIn{i} : Number.parseInt(prevCountFormData.countIn{i})+Number.parseInt(prevCountFormData.add{i}),
        //     totalSold{i} : Number.parseInt(prevCountFormData.totalIn{i}) - Number.parseInt(prevCountFormData.countOut{i}) - Number.parseInt(prevCountFormData.comp{i}),
        //     gross{i} : Number.parseInt(prevCountFormData.price{i}) * Number.parseInt(prevCountFormData.totalSold{i})
        // }))
    }

    function handleSettlement(event) {
        // const {name} = event.target
        // setCountFormData(prevCountFormData =>({
        //     ...prevCountFormData,
        //     [name] : "readOnly"

        // }))
    }

    function handleMore() {

    }

    return (
        <div className="poster">
            <div className="poster--image">
                <img src="./merrychristmas-1.png" />
                <span>price</span>
            </div>
            <div className="form--container">
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
                    {postersArray.map((posterArray, index) => (



                    <div key={index} className="form--input">
                        <input 
                            id="countIn"
                            type="text"
                            name={`countIn${index}`} 
                            value={countFormData.countIn}
                            onChange={handleChange.bind(this,index)}
                        />
                        <input className="font--green"
                            id="add"
                            type="text"
                            name={`add${index}`}
                            value={countFormData.add}
                            onChange={handleChange.bind(this,index)}
                        />
                        <input className="font--blue"
                            id="totalIn"
                            type="text"
                            name={`totalIn${index}`}
                            value={countFormData.totalIn}
                            readOnly={true}
                        />
                        <input className="font--red"
                            id="comp"
                            type="text"
                            name={`comp${index}`}
                            value={countFormData.comp}
                            onChange={handleChange.bind(this,index)}
                        />
                        <input
                            id="countOut"
                            type="text"
                            name={`countOut${index}`}
                            value={countFormData.countOut}
                            onChange={handleChange.bind(this,index)}
                        />
                        <input className="font--blue"
                            id="totalSold"
                            type="text"
                            name={`totalSold${index}`}
                            value={countFormData.totalSold}
                            readOnly={true}

                        />
                        <input className="font--blue"
                            id="gross"
                            type="text"
                            name={`gross${index}`}
                            value={countFormData.gross}
                            readOnly={true}
                        />
                    </div> 
                ))}
                
                    <div className="form--input-total">
                        <button 
                            onChange={handleMore}
                        >More</button>
                        <input className="font--blue"
                            id="totalTotalIn"
                            type="text"
                            name="totalTotalIn"
                            value={totalCountFormData.totalTotalIn}
                            readOnly={true}
                        />
                        <input className="font--red"
                            id="totalComp"
                            type="text"
                            name="totalComp"
                            value={totalCountFormData.totalComp}
                            readOnly={true}
                        />
                        <input
                            id="countOut"
                            type="text"
                            name="countOut"
                            value={totalCountFormData.totalCountOut}
                            readOnly={true}
                        />
                        <input className="font--blue"
                            id="totalSold"
                            type="text"
                            name="totalSold"
                            value={totalCountFormData.totalTotalSold}
                            readOnly={true}

                        />
                        <input className="font--blue"
                            id="gross"
                            type="text"
                            name="gross"
                            value={totalCountFormData.totalGross}
                            readOnly={true}
                        />
                    </div> 
                

                </form>


            </div>
        </div>
    )
}