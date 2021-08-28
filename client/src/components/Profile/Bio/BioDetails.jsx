import React from 'react';
import {Paper} from '@material-ui/core';

const BioDetails = () => (
  <Paper
    style={{
      position: 'absolute',
      width: '274px',
      height: '427px',
      left: '87px',
      top: '534px',
      background: '#72C3B4',
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
