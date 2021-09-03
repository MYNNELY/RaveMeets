import React from 'react';
import GroupIcon from './GroupIcons.jsx';
import {Grid} from '@material-ui/core';

const Groups = ({profile}) => {
  if (!profile) {
    return (
      <></>
    );
  }

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
          display: 'flex',
          marginTop: '15px',
          marginBottom: '30px',
        }}
      >
        {profile[0].groups.map((group, key) => (
          <GroupIcon group={group} key={key}/>
        ))}
      </Grid>
    </div>
  );
};

export default Groups;
