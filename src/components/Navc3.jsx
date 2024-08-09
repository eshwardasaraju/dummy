import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const Navc3 = () => {
    let icon={
        fontSize:"30px",
        borderRadius:"100%",
        // backgroundColor:"pink",
        height:"50px",
        width:"50px",
        padding:"8px"
    }
  return (
    <div style={{ width:"10%" ,display:"flex",justifyContent:"space-between"}}>
         <VideoCallIcon  className='nav' style={icon} />
         <NotificationsIcon style={icon} className='nav' />
         <AccountCircleIcon style={icon} className='nav'/>
    </div>
  )
}

export default Navc3