import React, { useEffect, useRef, useState } from "react";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

  const Chatbox=({addnewmsg,r_msg})=> {
    const handleNewUserMessage = (newMessage) => {
      console.log(`New message incoming! ${newMessage}`);
      addnewmsg(newMessage);
    }
    useEffect(() => {
        addResponseMessage(r_msg);
      }, [r_msg]);
    return (
		<>
			<div className="App">
				<Widget
					handleNewUserMessage={handleNewUserMessage}
					title="Caller"
					subtitle="Start Chat"
					showCloseButton
				/>
			</div>
		</>
	);
  } ;

 
export default Chatbox;