import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Height } from '@mui/icons-material';
import { border, borderRadius, display, margin } from '@mui/system';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Bodyletf1 = () => {
    let home={
        fontSize:"50px",
        marginLeft:"8px"
    }
    let hh={
         marginLeft:"30px"
    }
    let same={
        display:"flex",
        border:"none",
        width:"90%",
        margin:"auto",
        borderRadius:"10px"
    }
    let hmain={
        // border:"2px solid",
        height:"200px",
        display:"flex",
        flexDirection:"column"
    }

    return (
        <div style={hmain}>
            <span style={same} className='ho'>
                <HomeIcon style={home} /> <h1 style={hh}>Home</h1>
            </span>
            <span style={same} className='ho'>
                <PlayCircleIcon style={home} /> <h1 style={hh}>Shorts</h1>
            </span>
            <span style={same} className='ho'>
                <SubscriptionsIcon style={home} /> <h1 style={hh}>Subscripitions</h1>
            </span>

        </div>
    )
}

export default Bodyletf1