import React from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './Chatroom';
import './Chatroom/Chatroom.css';

//https://images.unsplash.com/photo-1630491387474-f9c71b786499?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80
const cookies = new Cookies();
const apikey = 'jqh9ncmqw6pr';

const client = StreamChat.getInstance(apikey);

const authToken = cookies.get("token");

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

//why can't i just put hook in here?

const Chatroom = () => {

  if (!authToken) {
    return <Auth />
  }

  return (
    <div id="chat" className="app__wrapper">
      <Chat client={client} theme="team light">

        <ChannelContainer

        />


        <ChannelListContainer

        />

      </Chat>



    </div>

  );
};


export default Chatroom;
