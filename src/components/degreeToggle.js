import React from 'react'


const CelciusToggle = (props) => {
    
    return (
        <div className="degree-toggle-container">
            <button
            className="degree-button"
            value={props.type}
            onClick={props.changeType}
            >
                {!props.type ? 'Farenheit' : 'Celsius'}
            </button>
            <p className="degree-instructions">Click to change temperature scale</p>
        </div>
    )
}

export default CelciusToggle
