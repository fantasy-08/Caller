import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Grid,Container,TextField,Typography,Paper,Button,IconButton} from '@material-ui/core';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CallEndIcon from '@material-ui/icons/CallEnd';
import ClosedCaptionOutlinedIcon from '@material-ui/icons/ClosedCaptionOutlined';
import PresentToAllSharpIcon from '@material-ui/icons/PresentToAllSharp';
import Menu from "./Menu";
import Chatbox from "./Chatbox";
 const Footer =()=>{
  return (
    
    <BottomNavigation  style={{ position:"fixed",left:"0",bottom:"0",right:"0", width:"100%"}}>
      <Container>
      <Grid container justify="center" alignItems="center" spacing={0} >
                <Grid item sm={4} md={4}  alignItems="left" spacing={0}>
                     <Button> <Menu/> </Button>
                </Grid>
                <Grid item sm={5} md={5} justify="center" alignItems="center" spacing={0}>
                    <IconButton style={{backgroundColor:"red", color:"white"}}><MicIcon/></IconButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton style={{color:"Red"}}><CallEndIcon/></IconButton>
                    &#160;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton style={{backgroundColor:"red",color:"white"}}><PhotoCamera/></IconButton>         
                </Grid>
                <Grid item sm={3} md={3} justify="Right"  alignItems="Right" spacing={0}>
                    <Button > <ClosedCaptionOutlinedIcon style={{height: "30px", width: "60px"}} />  </Button>
                    <Button > <PresentToAllSharpIcon style={{height: "30px", width: "60px"}}/> </Button>  
                    <Chatbox/>       
                </Grid>
    </Grid> 
    </Container>
    </BottomNavigation>
    
  );
};

export default Footer;

