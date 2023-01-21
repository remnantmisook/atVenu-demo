import React from "react";
export default function InventoryDetails (props) {

    const inventoryElements = props.inventories.map((inventory) => (

        <div key={inventory.id}>

            <div className="form--input">
                <input 
                    id="countIn"
                    type="text"
                    name="countIn"
                    disabled={props.isReadOnly}
                    value={inventory.countIn}
                    onClick={() => props.setCurrentInventoryId(inventory.id)}
                    onChange={props.handleChange}
                />
                <input className="font--green"
                    id="add"
                    type="text"
                    name="add"
                    disabled={props.isReadOnly}
                    value={inventory.add}
                    onChange={props.handleChange}
                />
                <input className="font--blue"
                    id="totalIn"
                    type="text"
                    name="totalIn"
                    value={inventory.totalIn}
                    readOnly={true}
                />
                <input className="font--red"
                    id="comp"
                    type="text"
                    name="comp"
                    disabled={props.isReadOnly}
                    value={inventory.comp}
                    onChange={props.handleChange}
                />
                <input
                    id="countOut"
                    type="text"
                    name="countOut"
                    disabled={props.isReadOnly}
                    value={inventory.countOut}
                    onChange={props.handleChange}
                />
                <input className="font--blue"
                    id="totalSold"
                    type="text"
                    name="totalSold"
                    value={inventory.totalSold}
                    readOnly={true}

                />
                <input className="font--blue"
                    id="gross"
                    type="text"
                    name="gross"
                    value={inventory.gross}
                    readOnly={true}
                />
                <button class="btn"  onClick={(event) => props.deleteInventory(event, inventory.id)}>
                <i class="fa fa-trash"></i>
                </button>

            </div> 

        </div>
    ))

    return (
        <div>
            {inventoryElements}
        </div>
    )
}