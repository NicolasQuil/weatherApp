import React from 'react'
import { useState } from 'react'
import Child2 from '../child2'
import Child from './child'

const Parent = () => {
    const [date, setDate] = useState("2022-11-14")

    return (
        <div>
            <Child date= {date}/>
            <Child2 />
        </div>
    )
}

export default Parent