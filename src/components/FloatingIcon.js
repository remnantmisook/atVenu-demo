import React from "react";

export default function FloatingIcon(props) {
    const [showText, setShowText] = React.useState(false)
    const handleMouseEnter = e => {
        // e.target.style.background = "gray"
        setShowText(true)
    }
    const handleMouseLeave = e => {
        // e.target.style.background = "white"
        setShowText(false)
    }

    return (props.trigger) ? (

        <div className="floating-icon">
            {props.description && <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            <img className="floating-icon-image" src="https://media.giphy.com/media/xTiN0IuPQxRqzxodZm/giphy.gif" />
            </span>
            }
            {showText && <p>{props.description}</p>}
        </div>
    ) : "";
}