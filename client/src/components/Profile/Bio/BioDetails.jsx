import React from 'react';
import {Paper} from '@material-ui/core';

const BioDetails = () => (
  <>
    <Paper
      style={{
        width: '275px',
        marginTop: '20px',
        background: '#555CA5',
      }}
    >
      <div
        style={{
          position: 'relative',
          margin: '12px',
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '.05em',
          color: '#FFFFFF',
        }}
      >
      BIO
        <div
          style={{
            marginLeft: '12px',
            fontWeight: 400,
            fontSize: '14px',
          }}
        >
        Yeah my name is Jack and I like to go to raves.
        </div>
      </div>
    </Paper>
    <Paper
      style={{
        width: '275px',
        marginTop: '10px',
        background: '#555CA5',
      }}
    >
      <div
        style={{
          position: 'relative',
          margin: '12px',
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '.05em',
          color: '#FFFFFF',
        }}
      >
      GENRES
        <ul
          style={{
            marginLeft: '24px',
            fontWeight: 400,
            fontSize: '14px',
          }}
        >
          <li>Rave music</li>
        </ul>
      </div>
    </Paper>
  </>
);

export default BioDetails;
