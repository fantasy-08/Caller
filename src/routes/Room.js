import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import {Grid,Container,TextField,Typography,Paper,Button} from '@material-ui/core';
import BhaluBar from '../Components/Navbar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import { Player, ControlBar, VolumeMenuButton } from 'video-react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Smallnavbar";
import 'react-chat-widget/lib/styles.css';

const footercss = styled.div`

marginTop :0px;
    position:Sticky;
    bottom:0;
    zIndex:999;

`;

const Containerr = styled.div`

    marginTop :0px;
    position:Sticky;
    top:0;
    zIndex:999; 
`;

const StyledVideo = styled.video`
    height: 350px;
    width: 400px;
    margin: 10px;
`;

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledVideo playsInline autoPlay ref={ref} />
    );
}


const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const Room = (props) => {
    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = props.match.params.roomID;

    useEffect(() => {
        socketRef.current = io.connect("/");
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                const peers = [];
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
    }, []);

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

    return (
        <>
          <Grid container  spacing={1} >
                  <Grid item sm={12} md={9} container spacing={3} alignItems="center" justify="center" alignItems="center" >
                            <StyledVideo  style={{ borderRadius:'.5rem'}} muted ref={userVideo} autoPlay playsInline />
                                {peers.map((peer, index) => {
                                    return (
                                        <Video key={index} peer={peer} />
                                    );
                                })}
                  </Grid>
    
                  <Grid item sm={12} md={3}  alignItems="right" float ="right" spacing={0}>
                       <Containerr><Navbar /></Containerr>
                  </Grid>
                  
          </Grid>
         <footercss> <Footer/>  </footercss>
        </>
      );
    }
    export default Room;

     {/* 
                        <IconButton>
                            <PhotoCamera/>
                        </IconButton>
                        <IconButton>
                            <MicIcon/>
                        </IconButton>
                        <IconButton>
                            <MicOffIcon/>
                        </IconButton> */}
  