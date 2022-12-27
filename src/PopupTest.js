import React from "react";
import Popup from "./components/Popup";
import FloatingIcon from "./components/FloatingIcon";
import DoughnutChart from "./components/DoughnutChart";

export default function PopupTest() {
    const [formData, setFormData] = React.useState({
        description:"test",
        price : 10
    })

    const [buttonPopup, setButtonPopup] = React.useState(false)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData =>({
            ...prevFormData,
            [name] : value,
            
        }))
    }


    function savePopup() {
        console.log(formData.description)
        if (formData.description) {
            console.log(formData.description)
            
        }
        setButtonPopup(false)
    }

    return (
        <div>
            <main>
                <h1>React Popups</h1>
                <br /><br />
                <button onClick={()=>setButtonPopup(true)}>Open Popup</button>



                <Popup 
                    trigger={buttonPopup} 
                    setTrigger={setButtonPopup}
                    description={formData.description}
                    price={formData.price}
                    handleChange={handleChange}
                />

<FloatingIcon
                    trigger={formData.description}
                    description={formData.description}
                />

<DoughnutChart />


                <h3>{formData.description}</h3>
                <h3>{formData.price}</h3>

            </main>
        </div>
    )
        
    
}