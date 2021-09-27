import React from 'react';
import {Button} from '@material-ui/core';

const AttendButton = () => {
  const username = localStorage.getItem('username');

  // handles clicking to attend event
  const attendEvent = () => {};

  // handles cancelling attendance to an event
  const cancelAttendEvent = () => {};
  return (
    <Button
      variant='contained'
      disabled={!username}
    >
      Attending
    </Button>
  );
};

export default AttendButton;