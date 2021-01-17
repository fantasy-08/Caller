import React from "react";
import { v1 as uuid } from "uuid";
import {Grid,Container,TextField,Typography,Button} from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BhaluBar from '../Components/Navbar';

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/joinRoom/${id}`);
    }
    const [code,setCode]=React.useState('')
    function handleChange(e){
        setCode(e.target.value);
    }
    function handleClick(){
        props.history.push(`/joinRoom/${code}`);
    }
    function handleRoom(){
        create();
    }
    return (
        <>
            <BhaluBar/>
            <br/>
            <Container>
                <Grid container justify="center" alignItems="center" spacing={6} style={{ minHeight: '100vh' }}>
                <Grid item sm={12} md={5}>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        <Grid item sm={12}>
                        <Typography variant="h4" component="h2" gutterBottom>
                        <div style={{textAlign:'center'}}>
                            <a href="https://servercaller.herokuapp.com/Caller/"><img src="https://fontmeme.com/permalink/210105/969ea6d61fc59fdf9fa681c5f4f56a23.png" alt="hindi" border="0"/></a>
                        </div>
                            <br/>
                        </Typography>
                        <div style={{textAlign:'center'}}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Premium video meetings.<br/>Now free for everyone.
                            </Typography>
                        </div>
                        </Grid>
                        <Grid item sm={12}>
                           <Typography variant="subtitle1" style={{color:"grey"}}>
                                We re-engineered the service we built for secure business meetings, संभव, to make it free and available for all.
                                <br/><br/>
                            </Typography> 
                        </Grid>
                        <Grid item sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<VideoCallIcon/>}
                                onClick={handleRoom}
                                fullWidth
                            >
                                Meeting
                            </Button>
                        </Grid>
                        <Grid item sm={6}>
                            <TextField id="outlined-basic" placeholder="Enter a code" variant="outlined" size="small" value={code} onChange={handleChange} fullWidth/>
                        </Grid>
                        <Grid item sm={2}>
                            {
                                code===''?
                                <></>:
                                <Button color="primary" onClick={handleClick}>Join</Button>
                            }
                        </Grid> 
                        <Grid item xs={12}>
                            <br/>
                            <hr/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={7}>
                    <Grid item xs={12}>
                    <div style={{boxShadow: "0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)",borderRadius:".5rem"}}>
                        <img style={{maxHeight:"100%",maxWidth:'98%',borderRadius:'.5rem',margin:'0.4rem'}}  src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" alt="demonstration" />
                    </div>              
                    </Grid>
                </Grid>
                </Grid>
            </Container>
        </>
        // <button onClick={create}>Create room</button>
    );
};

export default CreateRoom;
