import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import VideoCall from './routes/Videocall';
import Feedback from './routes/Feedback';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Caller" exact component={CreateRoom} />
        <Route path="/feedback/:roomID"  component={Feedback} />
        <Route path="/joinRoom/:roomID" component={VideoCall}/> 
        <Route path="/room/:roomID" component={Room} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
