import React from 'react';
import DigitalClock from '../Components/DigitalClock'
import './Home.styles.css';
import Join from '../Components/Join.component';
import AddIcon from '@material-ui/icons/Add';
function Home({ getRoomID, roomID }) {
    const currDate = new Date();
    const currTime = new Date().toLocaleTimeString();
    const day = currDate.getDate();
    const month = currDate.getMonth();
    const date = currDate.getDay();
    const dates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div className="d1" >        
            <DigitalClock/>
            <div className="di1">
            <button className="b1" onClick={getRoomID}><AddIcon /> Create room ID</button>
            <span className="b2">
            <Join />
            { roomID ? <h1>{roomID}</h1> : <></>}
            </span>
            </div>
        </div>
    );
}

export default Home