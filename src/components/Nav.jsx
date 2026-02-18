import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <Grid bgcolor={'green'} p={2} sx={{display:'flex', justifyContent:'space-between', alignItems:'center',position:'sticky',top:0,zIndex:1}}>
      <Box sx={{width:100}}/>
      <Grid>
        <Typography variant='h4' color='white'>My Reads</Typography>
      </Grid>
        <Box>
          <Typography>
            <Link to='/Library'>Library</Link>
          </Typography>
        </Box>
    </Grid>
    
  </>
  )
}

export default Nav
