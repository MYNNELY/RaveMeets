import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// var ws_uri = "ws://http://localhost:3000/:9600";
// var websocket = new WebSocket(ws_uri);



//why can't i just put hook in here?

const Chatroom = () => {
  return (
    <div id="chat">
      Hello


      <form id="chat-form" method="post">
        <input
          type="text"
          name="message"
          placeholder="Enter a message..."
          maxLength="500"
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>

    </div>

  );
};


export default Chatroom;
