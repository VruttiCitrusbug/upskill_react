import React from "react";
import './mystyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font`}>
                Stylesheet
            </h1>
        </div>
    )
}

export default Stylesheet