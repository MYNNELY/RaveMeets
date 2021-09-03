/* eslint-disable require-jsdoc */
import React, {useState, useEffect, useContext} from 'react';
import {Box} from '@material-ui/core';
import GroupsListCard from './GroupsListCard.jsx';
import {makeStyles} from '@material-ui/core/styles';
import UserContext from '../userContext.jsx';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  groupsListContainer: {
    width: '1500px',
    justifyContent: 'flex-start',
    margin: '0',
  },
}));

const GroupsList = () => {
  /*
  const history = useHistory();
  const {userInfo} = useContext(UserContext);

  if (!userInfo) {
    history.push('/login');
  }

  const {username = 'andy'} = userInfo;
  const [groups, setGroups] = useState([]);

  const getGroups = () => {
    axios.get(`http://54.176.43.199:3000/u/${username}`)
        .then(({data}) => {
          setGroups(data[0].groups);
        })
        .catch((err) => {
          console.error(error);
        });
  };

  useEffect(() => {
    getGroups();
  }, username);
  */

  const classes = useStyles();

  // hard coded sample data
  const groups = [{
    group_name: 'group name',
    group_id: 123,
  }];

  return (
    <Box component="div" className={classes.groupsListContainer}>
      {groups.map((group) => {
        return <GroupsListCard group={group} key={group.group_id}/>;
      })}
    </Box>
  );
};

export default GroupsList;
