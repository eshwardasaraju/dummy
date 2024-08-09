import React from 'react'
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Bodyleft2 = () => {
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
    let hha={
        marginLeft:"10px"
    }

  return (
    <div style={{height:"300px", display:"flex",
    flexDirection:"column"}}>
         <span style={same} className='ho'>
                 <h1 style={hha}>You</h1><ChevronRightIcon  style={home} />
            </span>
         <span style={same} className='ho'>
                <HistoryIcon style={home} /> <h1 style={hh}>History</h1>
            </span>
            <span style={same} className='ho'>
                <PlaylistPlayIcon style={home} /> <h1 style={hh}>Playlists</h1>
            </span>
            <span style={same} className='ho'>
                <WatchLaterIcon style={home} /> <h1 style={hh}>Watch later</h1>
            </span>
            <span style={same} className='ho'>
                <ThumbUpOffAltIcon style={home} /> <h1 style={hh}>Liked Videos</h1>
            </span>
    </div>
  )
}

export default Bodyleft2