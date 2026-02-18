import { Box, Card, CardContent, CardMedia, Divider, Grid, IconButton, ListItemButton, ListItemText, Typography } from '@mui/material';
import BookCard from './BookCard';
import { useContext, useState } from 'react';
import { MainContext } from './StateManager';
import { Cancel, ControlPoint } from '@mui/icons-material';
function Library() {
  const {current,readd, wread} = useContext(MainContext)
  
  return (
    <Grid>
      <Typography variant='h5' fontWeight={'bold'}>{`Currently Reading`}</Typography>
      <Divider/>
      <Box sx={{display:'flex',gap:2,flexWrap:'wrap',justifyContent:'center',position:'relative'}}>
      {current.map((item,index)=>{
        return(
          <>
            <BookCard key={item.index} name={item.name} image = {item.image}
            />
              </>
          )
        })}
        </Box>

        {/* want to read */}

        <Divider/>
        <Typography variant='h5' fontWeight={'bold'}>Want to Read</Typography>
        <Box sx={{display:'flex',gap:2,flexWrap:'wrap',justifyContent:'center'}}>
      {wread.map((item,index)=>{
        return(
            <BookCard key={item.index} name={item.name} image = {item.image}/>
          )
        })}
        </Box>

        {/* Read */}
        <Divider/>
        <Typography variant='h5' fontWeight={'bold'}> Read</Typography>
        <Box sx={{display:'flex',gap:2,flexWrap:'wrap',justifyContent:'center'}}>
      {readd.map((item,index)=>{
        return(
            <BookCard key={item.index} name={item.name} image = {item.image}
            index = {index}/>
          )
        })}
        </Box>
        
    </Grid>
  );
}

export default Library;
