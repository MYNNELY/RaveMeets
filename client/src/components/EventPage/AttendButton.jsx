import React, {useState} from 'react';

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
    <button></button>
  );
};

export default AttendButton;
