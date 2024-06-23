import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var[fname,setFname]=useState("Akash")
    var[val,setVal]=useState()

   const SubmitHandler = () =>{
        setFname(val)
    }

    const handleInput = (e) =>{
        console.log(e.target.value)
        setVal(e.target.value)
    }
  return (
    <div>
        <Typography variant='h2'>Welcome {fname} </Typography>
        <TextField id="outlined-basic" onChange={handleInput} label="Search" variant="outlined" />&nbsp;

        <Button variant='contained' onClick={SubmitHandler}>Submit</Button>
    </div>
  )
}

export default Statebasics