import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import {Grid,Container,TextField,Typography,Paper,Button,BottomNavigationAction} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import { Player, ControlBar, VolumeMenuButton } from 'video-react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Smallnavbar";
import {Launcher} from 'react-chat-window';
import { Widget,addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import Chatbox from "../Components/Chatbox";


const Videocall = (props) => {
    return (
      <>
      
        <Grid container  spacing={1} >
                <Grid item sm={12} md={9} container spacing={0} alignItems="center" justify="center" alignItems="center" >

                </Grid>

                <Grid item sm={12} md={3}  alignItems="right" float ="right" spacing={0}>
                     <Navbar style={{marginTop :"0px"}}/>
                </Grid>
                
        </Grid>
      <Footer/> 
      </>
    );
  }
  export default Videocall;

