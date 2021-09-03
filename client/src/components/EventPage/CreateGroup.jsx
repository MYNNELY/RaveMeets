import React from 'react';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const CreateGroup = () => {
  return (
    <Button
      variant='contained'
      startIcon={<AddIcon />}
      color='secondary'
      style={{fontWeight: '900', fontSize: '0.8rem', maxHeight: '50px'}}
    >
    Create Group
    </Button>
  );
};

export default CreateGroup;
