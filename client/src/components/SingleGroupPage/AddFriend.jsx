import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';



//why can't i just put hook in here?

const AddFriend = () => {


  return (
    <Button variant="contained" color="primary">
      Add Friend
    </Button>

  );
};


export default AddFriend;
