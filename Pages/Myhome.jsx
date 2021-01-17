import React from 'react';
import Navbar from '../src/Components/Navbar'
import ButtonCard from '../src/Components/ButtonCard'
import PhotoCard from '../src/Components/PhotoCard'
// import './Home.styles.css';
import Join from '../src/Components/Join.component';
import AddIcon from '@material-ui/icons/Add';
import { CardMedia } from '@material-ui/core';
import bg from '../src/Components/download.jfif';
import Paper from '@material-ui/core/Paper';
import {Grid,Container,Typography} from '@material-ui/core';

function Myhome({ getRoomID, roomID }) {
        return (
               <>
            
            <div >
            <Navbar/>
            <Container>
            <Grid
                container
                spacing={0}
                // direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}>
                <Grid item sm={12} md={4}>
                    <Typography variant="h4" component="h2">
                    Premium video meetings. Now free for everyone.
                    </Typography>
                    <ButtonCard  data={ getRoomID, roomID }/>
                </Grid>
                <Grid item sm={12} md={8}>
                {/* <h1>Bhalu</h1> */}
                    <CardMedia ><img style={{height:'500px', weidth:'500px'}} src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" alt="My logo" /></CardMedia>
                </Grid>
            </Grid>
            </Container>
            </div>
        </>    
    );
}

export default Myhome;