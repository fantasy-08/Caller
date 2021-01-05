import React, { useEffect, useRef, useState } from "react";
import 'react-chat-widget/lib/styles.css';
import BhaluBar from '../Components/Navbar';
import {Grid,Container,item,Typography,Button} from '@material-ui/core';
import CastConnectedIcon from '@material-ui/icons/CastConnected';

const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const Videocall = (props) => {
    const roomID = props.match.params.roomID;
    const userVideo = useRef();
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
    return (
      <>
        <BhaluBar/>
        <Grid container justify="center" alignItems="center">
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
            <Grid item xs={12} sm={4}>
            <Typography variant="h4" component="h2" gutterBottom>
                Ready to join ?
                <br/>
            </Typography>
            <Button variant="contained" color="primary" size="large" startIcon={<CastConnectedIcon/>} style={{borderRadius:'1.2rem'}} onClick={handelClick}>
                Join
            </Button>
            </Grid>
        </Grid>
      </>
    );
  }
  export default Videocall;

