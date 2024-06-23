import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[val,setVal]=useState(0)
    var add=()=>{
        setVal(val+1)
    }

    var sub=()=>{
        setVal(val-1)
    }
  return (
    <div>

        <Typography variant='h3'>COUNTER</Typography>
        <Button variant='contained' onClick={add}>+</Button>&nbsp;
        <Button variant='contained' onClick={sub}>-</Button>&nbsp;
       <h1> {val}</h1>
    </div>
  )
}

export default Counter