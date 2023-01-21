import React from "react";
import PosterImage from "./PosterImage";
import FloatingIcon from "./FloatingIcon";
import { nanoid } from 'nanoid'
import InventoryDetails from "./InventoryDetails";
import InventoryTotal from "./InventoryTotal";
import InventorySummary from "./InventorySummary";

export default function Inventory() {
    const [inventories, setInventories] = React.useState( () => JSON.parse(localStorage.getItem("inventories")) || [])

    const [currentInventoryId, setCurrentInventoryId] = React.useState(
        (inventories[0] && inventories[0].id) || ""
    )

    const [isReadOnly, setIsReadOnly] = React.useState(false)


    React.useEffect(() => {
        localStorage.setItem("inventories", JSON.stringify(inventories))
    }, [inventories])

    function createNewInventory() {
        const newInventory = {
            id: nanoid(),
            description:"",
            price:10,
            countIn:0,
            add:0,
            totalIn:0,
            comp:0,
            countOut:0,
            totalSold:0,
            gross:0
        }

        setInventories(preInventories => [newInventory, ...preInventories])
        setCurrentInventoryId(newInventory.id)
    }


    function handleChange(event) {
        const {name, value} = event.target
    
        setInventories(oldInventories => oldInventories.map(oldInventory => {
            if(oldInventory.id === currentInventoryId) {
                let add = (name === "add") ? value : oldInventory.add
                let countIn = (name === "countIn") ? value : oldInventory.countIn
                let countOut = (name === "countOut") ? value : oldInventory.countOut
                let comp = (name === "comp") ? value : oldInventory.comp
                return { ...oldInventory, 
                            [name]: value,
            
                            totalIn : Number.parseInt(add)+Number.parseInt(countIn),
                            totalSold : Number.parseInt(add)+Number.parseInt(countIn)-Number.parseInt(countOut)-Number.parseInt(comp),
                            gross : Number.parseInt(oldInventory.price) * ((Number.parseInt(countIn)+Number.parseInt(add) - Number.parseInt(countOut) - Number.parseInt(comp))),
                        }

            } else {
                return oldInventory
            }
                
        }))

     
        // setInventories(oldInventories => oldInventories.map(oldInventory => {
        //     return oldInventory.id === currentInventoryId
        //         ?
        //     { ...oldInventory, 
        //         [name]: value,

        //         totalIn : Number.parseInt(oldInventory.totalIn)+Number.parseInt(addValue),
        //         totalSold : Number.parseInt(oldInventory.totalSold)+ Number.parseInt(addValue)-Number.parseInt(substractValue),
        //         gross : Number.parseInt(oldInventory.price) * (Number.parseInt(oldInventory.totalSold)+ Number.parseInt(addValue)-Number.parseInt(substractValue)),
        //     }
        //     : oldInventory
        // }))
    }

    function deleteInventory(event, inventoryId) {
        event.stopPropagation()
        setInventories(oldInventories => oldInventories.filter(inventory => inventory.id !== inventoryId))       
    }

    function handleSettlement() {
        setIsReadOnly(preIsReadOnly => !preIsReadOnly)
    }

    return (
        <div className="main">
            <div className="poster">
                <PosterImage
                    inventories={inventories}
                    newInventory={createNewInventory}
                />

                {                                        
          
                inventories.length > 0 
                ?
                <div className="form--container">
                    <FloatingIcon
                        trigger={inventories[0].description}
                        description={inventories[0].description}
                    />
                    <div className="form--label">
                        <label htmlFor="countIn">Count In</label>
                        <label htmlFor="add">Add</label>
                        <label htmlFor="totalIn">Total In</label>
                        <label htmlFor="comp">Comp</label>
                        <label htmlFor="countOut">Count Out</label>
                        <label htmlFor="totalSold">Total Sold</label>
                        <label htmlFor="gross">Gross</label>
                    </div>

                    <div>
                        <InventoryDetails
                            inventories={inventories}
                            setCurrentInventoryId={setCurrentInventoryId}
                            isReadOnly={isReadOnly}
                            handleChange={handleChange}
                            deleteInventory={deleteInventory}
                        />
                        <InventoryTotal
                            inventories={inventories}
                            handleChange={handleChange}
                        />

                    </div>                  
                </div>
                :
                <h1 id="add-inventory-text">Please Add Inventory Data</h1>
                }
            </div>
            <hr />
                {
                inventories.length > 0 
                ?
                <InventorySummary
                    inventories={inventories}
                    isReadOnly={isReadOnly}
                    handleSettlement={handleSettlement}
                />
                :
                ""
}
        </div>

    )
}