import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[inp,setInp]=useState(["ICTAK"])
    var[data,setData]=useState("")
const inputHandle=(e)=>{
    setData(e.target.value)
           
    }

const add=()=>{
    setInp([...inp,data])
    console.log(inp)
    setData("")


}
  return (
    
    <div>
        <br />
        <TextField variant='outlined' label='Enter your name' onChange={inputHandle} value={data}></TextField>&nbsp;
        <Button variant='contained' style={{padding:'15px'}} onClick={add}>SUBMIT</Button><br /><br />
        <ul>
            {inp.map((v,i)=>
            {
                return <li>{v}</li>
            })}
        </ul>
        
    </div>
  )
}

export default Listmap