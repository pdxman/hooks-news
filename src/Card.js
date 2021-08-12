import React from 'react'
import Mybutton from './Mybutton'

export default function Card(){

    return(
        <div
        style={{
            border: '1px solid #000',
            borderRadius: '10px',
            padding: '1em',
            background: 'green',
            width: '18em',
            margin: 'auto'
        }}
        >
            This is the card!
            <Mybutton />
        </div>
    )
}