import React from 'react'
import { useState } from 'react'
import Child2 from './child2'
import Child from './child'

const Parent = () => {
    const [date, setDate] = useState("2022-11-14")

    return (
        <div className='d-flex flex-column align-items-center'>
            <Child date={date} />
            <Child2 date={date} changeDate={setDate} />
        </div>
    )
}

export default Parent