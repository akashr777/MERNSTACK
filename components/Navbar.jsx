import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>My App</Typography>&nbsp;&nbsp;
                <Button variant='contained' color='error'><Link to='/sin'>Sign up</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to='/'>Login</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'><Link to='/state'>state</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/c'>counter</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/lm'>list</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/api'>api</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/sample'>sample</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/card'>Card</Link></Button>





            </Toolbar>
        </AppBar>
    </div>
)

export default Navbar