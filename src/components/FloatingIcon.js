import React from "react";

export default function FloatingIcon(props) {
    const [showText, setShowText] = React.useState(false)
    const handleMouseEnter = e => {
        e.target.style.background = "gray"
        setShowText(true)
    }
    const handleMouseLeave = e => {
        e.target.style.background = "white"
        setShowText(false)
    }

    return (props.trigger) ? (

        <div className="floating-icon">
            {props.description && <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            !
            </span>
            }
            {showText && <p>{props.description}</p>}
        </div>
    ) : "";
}