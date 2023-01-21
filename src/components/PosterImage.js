import React from "react";

export default function PosterImage(props) {
    return (
    <div className="poster--imagecontainer">
        <img className="poster--image" src="./merrychristmas-1.png" />
        <button className="new-inventory" onClick={props.newInventory}>+</button>
        <span>price:$10</span>
    </div>
    )
}