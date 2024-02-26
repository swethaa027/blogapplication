import React from 'react'
import { AppBar, Box,  Button,  Toolbar, Typography, } from '@mui/material'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div><Box sx={{flexGrow:1}}>
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography variant="h6" component="div"  align='left' sx={{ flexGrow: 1 }}>Blogapplication
            </Typography>
                <Link to='Addblog' style={{color:'white'}}Addblog>AddBlog</Link><Button/>
                <Link to='Dashboard' style={{color:'white'}}Dashboard>Dashboard</Link><Button/>
            </Toolbar>
        </AppBar>
        </Box>
     </div>
  )
}

export default Navbar