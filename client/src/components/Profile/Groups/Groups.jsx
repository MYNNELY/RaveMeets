import React from 'react';
import GroupIcon from './GroupIcons.jsx';
import {Grid} from '@material-ui/core';

const Groups = ({profile}) => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="groups_container">
      <div
        style={{
          width: '187px',
          height: '36px',
          fontWeight: '600',
          fontSize: '22px',
          lineHeight: '48px',
        }}
      >
        Groups
      </div>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='baseline'
        style={{
          marginTop: '15px',
          marginBottom: '30px',
        }}
      >
        {array.map((index, key) => (
          <GroupIcon key={key}/>
        ))}
      </Grid>
    </div>
  );
};

export default Groups;
