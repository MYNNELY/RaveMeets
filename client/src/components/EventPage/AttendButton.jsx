import React, {useState} from 'react';
import {
  Star,
  ButtonText,
  ButtonBody,
  ButtonWrapper,
} from './Styled';

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
    <ButtonBody onClick={handleClick} colored={attend}>
      <ButtonWrapper>
        <Star colored={attend}>★</Star>
        <ButtonText>Attend</ButtonText>
      </ButtonWrapper>
    </ButtonBody>
  );
};

export default AttendButton;
