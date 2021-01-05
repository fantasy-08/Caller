import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import {Grid,Container,TextField,Typography,Paper,Button,IconButton} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import MicIcon from '@material-ui/icons/Mic';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CallEndIcon from '@material-ui/icons/CallEnd';
import ClosedCaptionOutlinedIcon from '@material-ui/icons/ClosedCaptionOutlined';
import Chatbox from "./Chatbox";
 const Footer =({addnewmsg,r_msg})=>{
  return (
    <BottomNavigation  style={{ position:"fixed",left:"0",bottom:"0",right:"0", width:"100%"}}>
      <Container>
      <Grid container justify="center" alignItems="center" spacing={0} >
                <Grid item sm={5} md={5} justify="center" alignItems="center" spacing={0}>
                    <IconButton style={{backgroundColor:"red", color:"white"}}><MicIcon/></IconButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton style={{color:"Red"}}><CallEndIcon/></IconButton>
                    &#160;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton style={{backgroundColor:"red",color:"white"}}><PhotoCamera/></IconButton>         
                </Grid>
                <Grid item sm={3} md={3} justify="Right"  alignItems="Right" spacing={0}>
                    <Button > <PeopleIcon style={{height: "30px", width: "60px"}} />  </Button>
                    <Chatbox addnewmsg={addnewmsg} r_msg={r_msg}/>       
                </Grid>
    </Grid> 
    </Container>
    </BottomNavigation>
    
  );
};

export default Footer;

