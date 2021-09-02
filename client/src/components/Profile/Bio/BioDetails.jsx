import React from 'react';
import {Paper} from '@material-ui/core';

const BioDetails = ({profile}) => {
  if (!profile) {
    return (<></>);
  }

  console.log(profile);
  return (
    <>
      <Paper
        style={{
          width: '275px',
          marginTop: '20px',
          background: '#353535',
        }}
      >
        <div
          style={{
            position: 'relative',
            margin: '12px',
            fontSize: '18px',
            fontWeight: 700,
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
            {profile[0].bio}
          </div>
        </div>
      </Paper>
      <Paper
        style={{
          width: '275px',
          marginTop: '10px',
          background: '#353535',
        }}
      >
        <div
          style={{
            position: 'relative',
            margin: '12px',
            fontSize: '18px',
            fontWeight: 700,
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
};

export default BioDetails;
