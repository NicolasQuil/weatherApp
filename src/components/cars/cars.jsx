import axios from 'axios'
import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'
import Car from './car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    // const [data,setData] = useState();
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("All")
    const selectRef = useRef()

    const getCategories = (_data) => {
        const cat = []
        cat.push("ALL")

        _data.forEach(item => {
            if (!cat.includes(item.category)) {
                cat.push(item.category);
            }
        });
        setCategories(cat)
        console.log(cat)
    }

    const doApi = async () => {
        try {
            let url = `https://project-yarin.herokuapp.com/cars?perPage=99`
            const { data } = await axios(url)
            console.log(data)
            getCategories(data);
            let carsFiltered = [...data]
            if (category != "ALL" && selectRef.current.value) {
                carsFiltered = data.filter(item => item.category === category)
            }
            else {

                carsFiltered = [...data]
            }

            setCars(carsFiltered);

            // const resp = await axios(url)
            // setCars(resp.data)
            // this.state.cars = data
        } catch (err) {
            console.log(err.response)
        }
    }
    console.log(category)

    //בשביל השאפליקציה תאתחל את עצמה ביחד עם הקשת האייפיאי נשתמש בהוק זה:
    useEffect(() => {
        doApi()

    }, [category])

    return (
        <div>

            <h1 className='display-3 text-center'>Cars</h1>

            <div className="container">

                <div className='col-lg-3 col-10 mx-auto'>

                    <select ref={selectRef} onChange={() => {
                        setCategory(selectRef.current.value)
                    }} className='form-select'>
                        {categories?.map((item, i) => {
                            return (
                                <option key={i} value={item}>{item.toUpperCase()}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="row m-0 p-0">
                    {/* Render All Cars */}
                    {cars?.map((item, i) => {
                        return (
                            <Car key={i} number={i} car={item} />
                        )
                    })}
                    {/* Render All Cars */}
                </div>

            </div>


            {/* {cars.map((item,i)=>
                (
                    <p>{item.model}</p>
                )
            )} */}

            {/* {cars[0]?.model ?
                <div>
                    <p>{cars[0].model}</p>
                    <p>{cars[1].model}</p>
                    <p>{cars[2].model}</p>
                    <p>{cars[3].model}</p>

                </div>
                : <p>Loading</p>} */}
        </div>
    )
}

export default Cars