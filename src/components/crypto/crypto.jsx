import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Coin from './coin';

const Crypto = () => {
  const [crypto, setCrypto] = useState([]);

  const doApi = async () => {
    try {
      let url = `http://fs1.co.il/bus/bitcoin.php`
      const { data } = await axios(url)
      console.log(data)
      setCrypto(data);

    } catch (err) {
      console.log(err.response)
    }
  }
  useEffect(() => {
    doApi()
  }, [])

  return (
    <div>

      <h1 className='display-3 text-center'>Cripto coins:</h1>
      <div className="container">
        <div className="row m-0 p-0">
          {crypto?.map((item, i) => {
            return (
              <Coin key={i} crypto={item} />
            )
          })}
        </div>

      </div>
      
    </div>
  )
}

export default Crypto