import React from 'react'

export default function Mybutton(props){

    return(
        <button isActive={props.isActive} style={{background: 'red', display: 'block'}}>This is the button! Click to do something!</button>
    )
}

// const button = styled.button`background: red;`;