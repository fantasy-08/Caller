import React, { useEffect, useRef } from "react";
import 'react-chat-widget/lib/styles.css';
import BhaluBar from '../Components/Navbar';
import {Grid,Typography,Button,IconButton,Snackbar} from '@material-ui/core';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MuiAlert from '@material-ui/lab/Alert';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import VideocamIcon from '@material-ui/icons/Videocam';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';

const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const Videocall = (props) => {
    const roomID = props.match.params.roomID;
    const userVideo = useRef();
    const [open, setOpen] = React.useState(false);
    const [show,setShow]=React.useState(false);
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
    }
    useEffect(() => {
        if(video)
            navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: mic }).then(stream => {
                userVideo.current.srcObject = stream;
            })
        else
            navigator.mediaDevices.getUserMedia({ video: false, audio: mic }).then(stream => {
                userVideo.current.srcObject = stream;
            })
        console.log('in');
    }, [mic,video]);
    function handelClick() {
        props.history.push(`/room/${roomID}`);
    }
    function display()
    {
        setShow(prev=>{
            return true;
        })
    }
    function handlecopy(){
        var msg=`Hello let's do Video Call with संभव.\nVisit the link:\nhttps://servercaller.herokuapp.com/Caller/ \nMeeting Code:\n${roomID}`
        navigator.clipboard.writeText(msg)
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
                    <Grid item xs={3} style={{ minHeight: '6rem' }}>
                    </Grid>
                    <div onMouseEnter={display} onMouseLeave={display}>
                    <Grid item xs={6}>
                        <div style={{ minHeight: '16rem' }}>
                            {
                                video?
                                <video style={{maxHeight:"100%",maxWidth:'98%',borderRadius:'.5rem'}} muted ref={userVideo} autoPlay playsInline />
                                :
                                <>
                                    <video style={{maxHeight:"0%",maxWidth:'0%',borderRadius:'.5rem'}} muted ref={userVideo} autoPlay playsInline />
                                    <img alt="avatar" src={`https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=BlazerSweater&clotheColor=Blue02&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Tanned`}/>
                                </>
                            }                            
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        {
                            show?
                            <div style={{paddingLeft:'8rem'}}>
                                 <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <IconButton style={{backgroundColor:"red", color:"white"}} onClick={audio}>
                                        {
                                            mic?
                                            <MicIcon/>:
                                            <MicOffIcon/>
                                        }
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <IconButton style={{backgroundColor:"red",color:"white"}} onClick={capture}>
                                        {
                                            video?
                                            <VideocamIcon/>:
                                            <VideocamOffIcon/>
                                        }
                                        </IconButton>                                       
                                    </Grid>
                                </Grid>                                
                            </div>:
                            <></>
                        }
                    </Grid>
                    </div>
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

