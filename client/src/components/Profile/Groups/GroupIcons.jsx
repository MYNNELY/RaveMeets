import React, {useState} from 'react';
import {Paper} from '@material-ui/core';
import axios from 'axios';

const GroupIcon = ({group}) => {
  // axios call get group from id
  // set icon to the the group banner

  const [icon, setIcon] = useState('https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png');
  const [groupName, setGroupName] = useState('');


  if (group) {
    console.log(group, 'look here');
    axios.get(`http://54.176.43.199:3000/groups/${group.group_id}`)
        .then(({data}) => {
          console.log(data);
          setIcon(data[0].banner_url);
          setGroupName(data[0].name);
        })
        .catch((err) => {
          console.error(err);
        });
  }

  return (
    <Paper
      style={{
        display: 'flex',
        width: '200px',
        padding: '10px',
        marginRight: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgb(33 50 76)',
      }}
    >
      <img
        src={icon}
        alt=''
        style={{
          position: 'relative',
          height: '75px',
          width: '75px',
          background: '#C4C4C4',
          borderRadius: '50%',
        }}
      />
      <span
        style={{
          marginTop: '10px',
        }}
      >{groupName}</span>
    </Paper>
  );
};

export default GroupIcon;
