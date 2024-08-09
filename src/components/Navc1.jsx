import React from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { height, padding, width } from '@mui/system';



const Navc1 = () => {
    let image={
        height:"30px",
        width:"120px",
        margin:"10px"
    }
    let icon={
        fontSize:"30px",
        borderRadius:"100%",
        // backgroundColor:"white",
        height:"50px",
        width:"50px",
        padding:"8px"
    }
    
  return (
    <div style={{display:"flex" ,width:"9%",justifyContent:"space-between"}}>
        
        <DensityMediumIcon style={icon} className='nav'/>
        
        <img src="./images/logo.jpg" alt="" style={image} />
    </div>
  )
}

export default Navc1