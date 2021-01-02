import React, { useEffect, useRef, useState } from "react";
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
 
// import logo from './logo.svg';
 

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  }
  const Chatbox=()=> {
    useEffect(() => {
        addResponseMessage('Welcome to this chat!');
      }, []);
    return (
        <>
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
        //   profileAvatar={logo}
          title="D Caller"
          subtitle="Start Chat"
        />
      </div>
      </>
    );
  } ;

 
export default Chatbox;