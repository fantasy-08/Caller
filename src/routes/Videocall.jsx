import React, { useEffect, useRef } from "react";
import 'react-chat-widget/lib/styles.css';
import BhaluBar from '../Components/Navbar';
import {Grid,Typography,Button,IconButton,Snackbar} from '@material-ui/core';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MuiAlert from '@material-ui/lab/Alert';

const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const Videocall = (props) => {
    const roomID = props.match.params.roomID;
    const userVideo = useRef();
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
        })
    }, []);
    function handelClick() {
        props.history.push(`/room/${roomID}`);
    }
    function display()
    {
        console.log('hi')
    }
    function handlecopy(){
        navigator.clipboard.writeText(roomID)
        setOpen(true);
    }
    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
    };
    function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
      
    return (
      <>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleClose} severity="success">
            Copied successfully
            </Alert>
        </Snackbar>
        <BhaluBar/>
        <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item xs={12} sm={8}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={0}>
                    <Grid item xs={6} style={{ minHeight: '6rem' }}>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <video style={{maxHeight:"100%",maxWidth:'98%',borderRadius:'.5rem'}} muted ref={userVideo} autoPlay playsInline onEnter={display}/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <div style={{textAlign:'center'}}>
                    <br/>
                <Typography variant="h4" component="h2" gutterBottom>
                    <br/>
                    Ready to join ?
                    <br/>
                </Typography>
                <Typography variant="subtitle1" style={{color:"grey"}}>
                    Meeting ID 
                    <IconButton  aria-label="upload picture" component="span" onClick={handlecopy}>
                        <FileCopyIcon />
                    </IconButton>
                    <br/>
                    {roomID}
                    <br/>                    
                    <br/>
                </Typography>
                
                <Button variant="contained" color="primary" size="large" startIcon={<CastConnectedIcon/>} style={{borderRadius:'1.2rem'}} onClick={handelClick}>
                    Join
                </Button>
                </div>
            </Grid>
        </Grid>
      </>
    );
  }
  export default Videocall;

