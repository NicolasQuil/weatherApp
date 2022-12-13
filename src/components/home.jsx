import axios from 'axios'
import './home.css';
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const inputRef = useRef()
  const nav = useNavigate()
  const [query] = useSearchParams()

  const doApi = async () => {
    setLoading(true)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query.get("city") || "buenos aires"}&appid=d0d8c5d729e1c933561e0d4771b75b74&units=metric`
    const { data } = await axios(url);
    const obj = {
      location: {
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      },
      weather: {
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        desc: data.weather[0].description
      },
      coord: {
        lon: data.coord.lon,
        lat: data.coord.lat
      }
    }
    console.log(obj);
    setData(obj)
    setLoading(false)
  }

  useEffect(() => {
    console.log(query.get("city"))
    doApi();
  }, [query])

  return (
    <div id='general' className='d-flex flex-column align-items-center py-5  text-center'>

      <h1 id='title'>Welcome to my weather App☀️</h1>
      <div className='d-flex m-3'>
        <input placeholder='Enter city please..🔎' ref={inputRef} className='form-control' type="text" />
        <button id='button' onClick={() => {
          nav('?city=' + inputRef.current.value);

        }} className='mx-2 btn btn-primary'>Search</button>
      </div>

      {loading ? <h1>Loading...</h1> :
        <div id='info'>
          <h1>City:{data.location.city}</h1>
          <h2>Temp:{data.weather.temp}</h2>
          <h2>Desc:{data.weather.desc}</h2>
        </div>}

    </div>
  )
}

export default Home