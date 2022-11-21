import React from 'react'

const Coin = (props) => {
    const crypto = props.crypto
    return (
        <div className='col-12 col-md-6 col-lg-4 p-4 h-100'>
            <div className='row border shadow p-2 h-100'>

                <div className='col-12 col-md-6 '>
                    <h5 className='p-0 m-0'>{crypto.name}</h5>
                    <h6>{crypto.symbol}</h6>
                    <p className='p-0 m-0'>Price Usd: {Number(crypto.price_usd).toFixed(2)}$</p>
                    <p className='p-0 m-0'>Price Btc: {Number(crypto.price_btc).toFixed(5)}$</p>
                </div>
            </div>
        </div>
    )
}

export default Coin