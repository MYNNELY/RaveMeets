import React, {useContext} from 'react';
import {Button} from '@material-ui/core';

const ActionButton = ({myProfile, handleEditModal}) => {
  if (myProfile) {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: '200px',
            height: '30px',
            background: '#72C3B4',
          }}
        >
          Add Friend +
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        onClick={handleEditModal}
        variant="contained"
        color="primary"
        style={{
          width: '200px',
          height: '30px',
          background: '#72C3B4',
        }}
      >
        Edit Profile
      </Button>
    </>
  );
};

export default ActionButton;
