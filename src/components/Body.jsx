import { height, positions, width } from '@mui/system'
import React from 'react'
// import { NavLink } from 'react-router-dom'
import Bodyleft from './Bodyleft'
import zIndex from '@mui/material/styles/zIndex'

const Body = () => {
    let boby={
        border:"2px solid",
        height:"933px",
        position:"absolute",
        width:"100%",
        top:"110px",
        zIndex:"-1",
        // overflow:"auto"
    }

  return (
    <div style={boby}>
        <div>
            <Bodyleft/>
        </div>
        
        
    </div>
  )
}

export default Body