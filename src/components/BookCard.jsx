import React, { useState } from 'react'
import { MainContext } from './StateManager';
import { useContext } from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Cancel, ControlPoint } from '@mui/icons-material';
const BookCard = ({image,name,isOpen,index}) => {
    const {current,setCurrent, wread, setWRead, readd, setReadd,cReading, wReading,reading} = useContext(MainContext)
    const [modal,setModal] = useState(null)
    const handleModal=(index)=>{
      setModal(index)
      console.log('open clicked')
    }
    const handleModalClose=()=>{
      setModal(null)
    }
  return (
        <Box sx={{mt:1,position:'relative'}}>
            <Card sx={{width:'200px',gap:2, position:'relative'}}>
              <CardMedia component='img' image={image} width='200px' height={200}/>
              <CardContent><Typography>{name}</Typography></CardContent>
            </Card>
            {modal !==index?(
                <IconButton sx={{position:'absolute', top:'88%',right:1,zIndex:1}} onClick={()=>handleModal(index)} >
                <ControlPoint color='success' />
              </IconButton>
              ):<IconButton sx={{position:'absolute', top:'88%',right:1,zIndex:1}} onClick={()=>handleModalClose(index)} >
                <Cancel  color='error' />
              </IconButton>}
              {modal === index&&(
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
  )
}

export default BookCard
