import React from 'react'
import { useRef } from 'react';

const Child2 = (props) => {
    const date = props.date;
    const input = useRef()
    return (
        <div>
            <input  ref={input} defaultValue={date} type="date" />
            <button onClick={() => {
                props.changeDate(input.current.value);
            }} className='btn btn-primary ms-2'>Change Date</button>
        </div>
    )
}

export default Child2