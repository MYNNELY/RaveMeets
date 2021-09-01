import React from 'react';
import {Modal} from '@material-ui/core';

const EditBioModal = ({ editModal }) => {
  return (
    <div
      style={{
        display: editModal ? undefined : 'none',
        position: 'fixed',
        marginTop: 'auto',
        marginBottom: 'auto',
        height: '50%',
        width: '50%',
        backgroundColor: '#034993',
        boxShadow: '0 0 5px black',
      }}
    />
  );
};

export default EditBioModal;
