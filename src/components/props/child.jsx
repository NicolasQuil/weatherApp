import React from 'react'

const Child = (props) => {
    const date = props.date
    return (
        <div>
            <h1>Date:{date}</h1>
        </div>
    )
}

export default Child