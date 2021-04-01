import React from 'react'

const SelectedCard = (props) => {
    const selected = () => {
        if (props.data.selected === true) {
            return <p>{props.data.forecast}</p>
        }
    } 

    return (
        <div className="selected-forecast">
            {selected()}
        </div>
    )
}

export default SelectedCard