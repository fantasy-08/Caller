import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import {Grid,Container,Button,IconButton} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import MicIcon from '@material-ui/icons/Mic';
import CallEndIcon from '@material-ui/icons/CallEnd';
import Chatbox from "./Chatbox";
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import VideocamIcon from '@material-ui/icons/Videocam';
import MicOffIcon from '@material-ui/icons/MicOff';
import MenuItem from './MenuOption';
import Board from './Board';

const Footer =({addnewmsg,r_msg,endCall,roomID,setAudio})=>{
  const [video,setVideo]=React.useState(true);
  const [mic,setMic]=React.useState(true);
  function capture(){
    setVideo(prev=>{
      return !prev
    })
  }
  function audio(){
    setMic(prev=>{
      return !prev
    })
    setAudio(prev=>{
      return !prev
    })
  }
  return (
    <BottomNavigation  style={{ position:"fixed",left:"0",bottom:"0",right:"0", width:"100%"}}>
      <MenuItem roomID={roomID}/>
      <Container>
      <Grid container justify="center" alignItems="center" spacing={0} >
        <Grid item sm={5} md={5} justify="center" alignItems="center" spacing={0}>
            <IconButton style={{backgroundColor:"red", color:"white"}} onClick={audio}>
              {
                mic?
                <MicIcon/>:
                <MicOffIcon/>
              }
            </IconButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton style={{backgroundColor:"white",color:"Red"}} onClick={endCall}><CallEndIcon/></IconButton>
            &#160;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton style={{backgroundColor:"red",color:"white"}} onClick={capture}>
              {
                video?
                <VideocamIcon/>:
                <VideocamOffIcon/>
              }
            </IconButton>         
        </Grid>
        <Grid item sm={3} md={3} justify="Right"  alignItems="Right" spacing={0}>
            <Board/>
            <Chatbox addnewmsg={addnewmsg} r_msg={r_msg}/>       
        </Grid>
    </Grid> 
    </Container>
    </BottomNavigation>
    
  );
};

export default Footer;

