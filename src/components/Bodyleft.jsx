import React from 'react'
import Bodyletf1 from './Bodyletf1'
import { margin, width } from '@mui/system'
import Bodyleft2 from './Bodyleft2'

const Bodyleft = () => {
    let left={
        width:"344px",
        border:"2px solid ",
        height:"933px",
        // overflow:"auto"
    }
  
  return (
    <div style={left}>
           <Bodyletf1/>
           {/* <br></br> */}
           <hr></hr>
           <Bodyleft2/>
           <hr></hr>
    </div>
  )
}

export default Bodyleft