import React, {useContext} from 'react';
import {Button} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';

const ActionButton = ({myProfile, handleEditModal}) => {
  if (!myProfile) {
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
          Add Friend&nbsp;<AddCircleIcon fontSize='small'/>
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
        Edit Profile&nbsp;<EditIcon fontSize='small'/>
      </Button>
    </>
  );
};

export default ActionButton;
