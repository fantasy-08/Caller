import React from 'react'
import {Grid,Container,Typography,Button} from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HomeIcon from '@material-ui/icons/Home';
import BhaluBar from '../Components/Navbar';
import FeedbackModal from '../Components/Feedback';

function Feedback(props) {
    const roomID = props.match.params.roomID;
    function reJoin(){
        props.history.push(`/joinRoom/${roomID}`);
    }
    function homeScreen(){
        props.history.push(`/Caller`);
    }
    return (
        <div>
            <BhaluBar/>
            <Container>
                <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                    <Grid item xs={3}>
                        <div style={{height:"5rem"}}>

                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{textAlign:"center"}}>
                            <Typography variant="h3" component="h2" gutterBottom>
                                You left the meeting
                                <br/><br/>
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="large"
                                        startIcon={<VideoCallIcon />}
                                        style={{textTransform: 'none',borderRadius:'1.5rem'}}
                                        onClick={reJoin}
                                    >
                                        Rejoin
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="large"
                                        startIcon={<HomeIcon />}
                                        style={{textTransform: 'none',borderRadius:'1.5rem'}}
                                        onClick={homeScreen}
                                    >
                                        Return to home screen
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <br/> */}
                        <FeedbackModal/>
                    </Grid>
                </Grid>
            </Container>            
        </div>
    )
}

export default Feedback
