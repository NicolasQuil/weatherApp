import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Cars = () => {
    const [cars, setcars] = useState([])
    const doApi = async () => {
        let url = "https://project-yarin.herokuapp.com/cars?perPage=99"
        const resp = await axios.get(url)
        const data = await resp.data
        console.log(data)
        setcars(data)
    }
    useEffect(() => {
        doApi();
    }, [])
    return (
        <div>
            {cars[0]?.company}

        </div>
    )
}

export default Cars