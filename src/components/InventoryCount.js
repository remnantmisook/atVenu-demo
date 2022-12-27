import React from "react";

export default function InventoryCount(props) {

    return (
        <div className="form--input">
            <input 
                id="countIn"
                type="text"
                name="countIn"
                value={props.countFormData.countIn}
                onChange={props.handleChange}
            />
            <input className="font--green"
                id="add"
                type="text"
                name="add"
                value={props.countFormData.add}
                onChange={props.handleChange}
            />
            <input className="font--blue"
                id="totalIn"
                type="text"
                name="totalIn"
                value={props.countFormData.totalIn}
                readOnly={true}
            />
            <input className="font--red"
                id="comp"
                type="text"
                name="comp"
                value={props.countFormData.comp}
                onChange={props.handleChange}
            />
            <input
                id="countOut"
                type="text"
                name="countOut"
                value={props.countFormData.countOut}
                onChange={props.handleChange}
            />
            <input className="font--blue"
                id="totalSold"
                type="text"
                name="totalSold"
                value={props.countFormData.totalSold}
                readOnly={true}

            />
            <input className="font--blue"
                id="gross"
                type="text"
                name="gross"
                value={props.countFormData.gross}
                readOnly={true}
            />
        </div> 
    )
}