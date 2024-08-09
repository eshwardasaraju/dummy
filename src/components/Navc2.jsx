import { borderRadius, fontSize, height, margin, padding, positions, width } from '@mui/system'
import React, { useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Mic from './Mic'
// import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navc2 = () => {
    let input={
        height:"60px",
        width:"900px",
        fontSize:"20px",
        margin:"0px 0px 0px 32px",
        padding:"0px 4px 0px 16px ",
        borderRadius:"30px"
    }
    let icon={
        position:"absolute",
        left:"1500px",
        fontSize:"35px",
        top:"35px"
    }
    let voice={
        fontSize:"30px",
        borderRadius:"100%",
        // backgroundColor:"pink",
        height:"50px",
        width:"50px",
        padding:"8px"
    }
   let [a,b]=useState(false)
   let han=()=>{
    b(!a)
   }
   

    
  return (
    <div style={{ width:"104%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <input type="text" placeholder='Search' style={input} />
        <SearchIcon style={icon} />
        <KeyboardVoiceIcon style={voice} className='nav'  onClick={han}/> 
        {a?<Mic/>:""}
       
      

    </div>
  )
}

export default Navc2





   
  
  
  

