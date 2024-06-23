import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <h1>Add Employee Form</h1>
        <Typography variant='h4'></Typography><br />
        <TextField  label="Name" variant="outlined" /><br /><br />
        <TextField  label="Age" variant="outlined" /><br /><br />
        <TextField  label="Salary" variant="outlined" /><br /><br />
        <TextField  label="Position" variant="outlined" /><br /><br />


        <Button variant="contained">ADD</Button>

    </div>
  )
}

export default Add