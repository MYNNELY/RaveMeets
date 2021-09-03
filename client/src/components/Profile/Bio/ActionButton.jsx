import React from 'react';
import {Button} from '@material-ui/core';

const ActionButton = ({ handleEditModal }) => {
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
