import React, {useState} from 'react';
import {Button} from '@material-ui/core';

const AttendButton = () => {
  const username = localStorage.getItem('username');
  const [attend, setAttend] = useState(false);
  // handles clicking to attend event
  const attendEvent = () => {};
  // handles cancelling attendance to an event
  const cancelAttendEvent = () => {};
  const handleClick = () => {
    attend ? cancelAttendEvent() : attendEvent();
    setAttend(!attend);
  };
  return (
    username ?
    (<Button
      variant='contained'
      onClick={handleClick}
      style={{fontWeight: '900', fontSize: '0.8rem', maxHeight: '50px'}}
      color={attend ? 'primary' : 'secondary'}
    >
      {attend ? 'Attending' : 'Attend'}
    </Button>) : null
  );
};

export default AttendButton;
