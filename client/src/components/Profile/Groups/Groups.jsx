import React from 'react';
import GroupIcon from './GroupIcons.jsx';
import {Grid} from '@material-ui/core';

const Groups = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="groups_container">
      <div
        style={{
          width: '187px',
          height: '36px',
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
      >
        {array.map((index, key) => (
          <GroupIcon key={key}/>
        ))}
      </Grid>
    </div>
  );
};

export default Groups;
