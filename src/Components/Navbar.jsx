import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DigitalClock from './DigitalClock'

export default function Navbar() {

  return (
    <div >
       <AppBar style={{height:'50px', weidth:'50px'}} position="static">
          <Toolbar>
            <Typography variant="h6" >
              <img style={{height:'50px', width:'50px',borderRadius:"0.5rem",marginTop:".8rem"}} src="https://s3.amazonaws.com/ionic-marketplace/video-and-text-chat-app-backend/icon.png" alt="My logo" />
            </Typography>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://fontmeme.com/hindi/"><img src="https://fontmeme.com/permalink/210105/124cc05758940eb11cda869fcfe80ccd.png" alt="hindi" border="0"/></a>
            </div>
            <div style={{paddingLeft:"1.2rem"}}>
              <DigitalClock />
            </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}
