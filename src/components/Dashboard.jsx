import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
const Dashboard = () => {
    var[user,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data);
        })
    },[])
    return(

    <div>
        <TableContainer>
            <Table sx={{ minWidth: 650}}>
                <TableHead>
                    <TableRow>
                        <TableCell><h4>UserId</h4></TableCell>
                        
                        <TableCell><h4>Title</h4></TableCell>
                    
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((val,i)=>{
                    return(
                        <TableRow>
                        <TableCell key={i}>{val.id}</TableCell>
                        
                        <TableCell key={i}>{val.title}</TableCell>
                        
                        </TableRow>
                    );
                })
                }
                 </TableBody>
            </Table>
           
        </TableContainer>

    </div>
 )
}

export default Dashboard