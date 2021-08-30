import React from 'react';
import {Paper} from '@material-ui/core';

const BioDetails = () => (
  <Paper
    style={{
      width: '274px',
      height: '427px',
      marginTop: '20px',
      background: '#BBC2D3',
    }}
  >
    <div
      style={{
        position: 'relative',
        margin: '12px',
        fontSize: '24px',
        letterSpacing: '.05em',
        color: '#FFFFFF',
      }}
    >
      Jack's Bio
    </div>
    <div
      style={{
        position: 'relative',
        margin: '12px',
        fontSize: '24px',
        letterSpacing: '.05em',
        color: '#FFFFFF',
      }}
    >
      Jack's Genres
    </div>
  </Paper>
);

export default BioDetails;
