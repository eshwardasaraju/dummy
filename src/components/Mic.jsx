import { Height } from '@mui/icons-material'
import { height, positions } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useState } from 'react';

const Mic = () => {
  let max={
    border:"2px solid",
    height:"700px",
    width:"700px",
    position:"absolute",
    left:"950px",
    top:"20px",
    backgroundColor:"white"

  }
  let speak={
       marginLeft:"350px",
       fontSize:"60px",
       marginTop:"400px"
  }
  // let [c,d]=useState(true)
  // let clhan=()=>{
  //   d(!c)

  // }

  return (
    <div style={max} >
       <div style={{display:"flex",justifyContent:"flex-end"}}>
        <ClearIcon style={{fontSize:"50px",marginTop:"50px",marginRight:"30px"}} />
        {/* {c?<Mic/>:""} */}
        
       
       
       
       
       
       </div>
       <p style={{fontSize:"40px",marginLeft:"20px"}}>Listining...............</p>
       <KeyboardVoiceIcon style={speak}/>
    </div>
  )
}

export default Mic