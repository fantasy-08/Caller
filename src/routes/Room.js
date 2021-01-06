import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import {Grid,Container} from '@material-ui/core';
import BhaluBar from '../Components/Navbar';
import Footer from "../Components/Footer";
import 'react-chat-widget/lib/styles.css';
// import Board from '../Components/Board';

const footercss = styled.div`
marginTop :0px;
    position:Sticky;
    bottom:0;
    zIndex:999;
`;

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, [props.peer]);

    return (
        <video  style={{maxHeight:"100%",maxWidth:'98%',borderRadius:'.5rem'}} playsInline autoPlay ref={ref} />
    );
}


const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const Room = (props) => {
    const [peers, setPeers] = useState([]);
    const [r_msg,setr_msg]=useState('Welcome to Chat!');
    const [otherUser,setOtherUser]=useState();
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = props.match.params.roomID;
    function endCall(){
        // socketRef.current.emit('disconnect1',otherUser);
        props.history.push(`/feedback/${roomID}`);
    }
    const [audio,setAudio]=useState(true);
    useEffect(() => {
        socketRef.current = io.connect("/");
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                const peers = [];
                setPeers([]);
                console.log('someone went to hell')
                users.forEach(userID => {
                    const peer = createPeer(userID, socketRef.current.id, stream);
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })
                    peers.push(peer);
                })
                setPeers(peers);
            })
            socketRef.current.on("yourID",id=>{
                setOtherUser(id);
            })
            socketRef.current.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })

                setPeers(users => [...users, peer]);
            });

            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });
        })
    }, [roomID]);

    useEffect(()=>{
    },[audio])

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })

        peer.signal(incomingSignal);

        return peer;
    }
        
    function addnewmsg(msg){
        var data={
            roomID:roomID,
            msg:msg
        }
        socketRef.current.emit('new message', data);
    }

    if(socketRef.current){
        socketRef.current.on('new message', (data) => {
            if(data.roomID===roomID)
                setr_msg(data.message);
        });
    }

    return (
        <>
        <BhaluBar/>
        <br/><br/><br/>
        {/* <Board/> */}
        <Container>
          <Grid container >
            <Grid item sm={12} md={4}>
            <video style={{maxHeight:"100%",maxWidth:'98%',borderRadius:'.5rem'}} muted ref={userVideo} autoPlay playsInline />
            </Grid>
                {peers.map((peer, index) => {
                    return (
                        <Grid item sm={12} md={4} >
                            <div>
                                <Video key={index} peer={peer} />
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
         <footercss> 
            <Footer endCall={endCall} addnewmsg={addnewmsg} r_msg={r_msg} roomID={roomID} setAudio={setAudio}/>  
        </footercss>
        </Container>
        </>
      );
    }
    export default Room;

  