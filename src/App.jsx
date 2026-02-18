import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Library from './components/Library'
import Nav from './components/Nav'
import {StateManager} from './components/StateManager'
import { Grid } from '@mui/material'

function App() {
 
  return (
    <>
      <Nav/>
      <StateManager>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Library' element={<Library/>}/>
        </Routes>
      </StateManager>
    </>
  )
}

export default App
