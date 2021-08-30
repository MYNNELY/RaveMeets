import React from 'react';
import GroupIcon from './GroupIcons.jsx';
import {Grid} from '@material-ui/core';

const Groups = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '187px',
          height: '36px',
          left: '434px',
          top: '223px',

          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '36px',
          /* identical to box height */

          letterSpacing: '0.05em',
        }}
      >
        Jack's Group
      </div>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='baseline'
        style={{
          position: 'absolute',
          top: '250px',
          left: '414px',
        }}
      >
        {array.map((index, key) => (
          <GroupIcon key={key}/>
        ))}
      </Grid>
    </>
  );
};

export default Groups;
