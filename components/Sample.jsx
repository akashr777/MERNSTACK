import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Sample = () => {
    var[val,setVal]=useState("")
    const f1 = () =>{
        setVal("React")

    }

const f2 = () =>{
    setVal("Angular")


}

const f3 = () =>{
       setVal("Next")

 }
useEffect(()=>{
    f1();
},[])


  return (
    <div><br />
        <Typography>
            <Button variant='contained' onClick={f1} color='error'>REACT</Button>&nbsp;
            <Button variant='contained' onClick={f2}>ANGULAR</Button>&nbsp;
            <Button variant='contained' onClick={f3} color='inherit'>NEXT</Button>
            <h1>welcome to {val}</h1>
        </Typography>


    </div>
  )
}

export default Sample