import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div>
        <Typography variant='h6'>Addblog</Typography>
        <br /><br />
        <TextField variant='outlined' label="Blogname">Blogname</TextField>
        <br /><br />
        <TextField variant='outlined' label="Description">Description</TextField>
        <br /><br />
        <TextField variant='outlined' label='Authornmae'>Authorname</TextField>
        <br /><br />
        
        <Button variant='contained'>Submit</Button><br />
    </div>
  )
}

export default Addblog