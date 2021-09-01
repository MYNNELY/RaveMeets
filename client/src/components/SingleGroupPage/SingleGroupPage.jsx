import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import AddFriend from './AddFriend.jsx';
import Chatroom from './Chatroom.jsx';



//why can't i just put hook in here?

const SingleGroupPage = () => {



  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Hook />
      <AddFriend />
      <Chatroom />
    </ThemeProvider>



  );
};


export default SingleGroupPage;
