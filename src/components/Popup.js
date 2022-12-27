import React from "react";
import './Popup.css'

export default function Popup (props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup--inner">
                <label htmlFor="description">Description</label>
                <textarea 
                    id="description"
                    onChange={props.handleChange}
                    name="description"
                    placeholder="Description"
                    value={props.description}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    type="text"
                    onChange={props.handleChange}
                    name="price"
                    placeholder="Price"
                    value={props.price}
                />

                <button className="close-btn" onClick={()=>props.setTrigger(false)}>Save</button>
            </div>
        </div>
    ) : "";
}