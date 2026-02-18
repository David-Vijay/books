import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Skeleton, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './StateManager'
import { Cancel, ControlPoint } from '@mui/icons-material'

function Home() {
    const {options, setOptions,  input,books,loading,current,setCurrent, wread, setWRead, readd, setReadd,cReading, wReading,reading}=useContext(MainContext) 
    
    const addBook=(index)=>{
      setOptions(index)
    }
    const closeModal=(index)=>{
      setOptions(null)
    }
    
    
  return (
    <Grid>
         
            {/* search bar */}
        <Grid align='center' p={2} sx={{display:'flex',justifyContent:'center',gap:2}}>
            <TextField variant='outlined' placeholder='Find your book' sx={{width:500}}/>
            <Button variant='contained' color='success'>Find</Button>
        </Grid>
        
        {/* Books */}
        <Grid sx={{display:'flex',flexWrap:'wrap',gap:2, justifyContent:'center'}}>
          {books.map((book,index)=>(
            <Box position={'relative'} key={index}>
              <Card sx={{width:'200px',gap:2, position:'relative'}} key={index}>
            <CardMedia component='img' image={book.image} width={'200px'} height={200}/>
            <CardContent>
              <Typography fontWeight={'bold'}>{book.name.length>20?book.name.substring(0,15)+'...':book.name}</Typography>
            </CardContent>
          
            {options !== index?
            <IconButton sx={{position:'absolute', top:'88%',right:1, zIndex:1}} color='success' onClick={()=>addBook(index)}>
            <ControlPoint/> </IconButton>:
            <IconButton sx={{position:'absolute', top:'88%',right:1, zIndex:1}} color='success' onClick={()=>closeModal(index)}>
            <Cancel/></IconButton>}
          </Card>
          {options === index&&(
            <Card sx={{ width: '200px', maxWidth: 360, bgcolor:'whitesmoke', position:'absolute', zIndex:1,top:'30%',left:'90%', mt:1 }}>
            <ListItemButton onClick={()=>cReading(index)}>
              <ListItemText primary='Currently Reading' />
            </ListItemButton>
            <ListItemButton onClick={()=>wReading(index)}>
              <ListItemText primary='Want to Read' />
            </ListItemButton>
            <ListItemButton onClick={()=>reading(index)}>
              <ListItemText primary='Read' />
            </ListItemButton>
          </Card>)}
        </Box>
        ))}
        </Grid>
    </Grid>
  )
}

export default Home
