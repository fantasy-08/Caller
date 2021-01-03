import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DigitalClock from './DigitalClock'
import {Grid,Container,Paper,Button,IconButton} from '@material-ui/core';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
export default function Navbar() {
 
  return (
    <div >
       <AppBar color="transparent"  position="static">
          <Toolbar>

          <Grid container justify="center" alignItems="center" spacing={0} >
                <Grid item sm={6}   gridItemAlign ="center" spacing={0}>
                     <div style={{paddingLeft:"1.2rem"}}>
                    <Button><PeopleAltOutlinedIcon style={{color:"Black"}}/> </Button>
                     
                    </div>
                </Grid>

                <Grid item sm={6}  alignItems="center" spacing={0}>
                    <DigitalClock />  
                </Grid>
        </Grid>
            </Toolbar>
        </AppBar>
    </div>
  );
}
