/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import {Box} from '@material-ui/core';
import GroupsListCard from './GroupsListCard.jsx';
import {makeStyles} from '@material-ui/core/styles';
// import UserContext from '../userContext.jsx';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  groupsListContainer: {
    width: '1500px',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  message: {
    textAlign: 'center',
    marginTop: '25%',
  },
}));

const GroupsList = () => {
  const username = localStorage.getItem('username');
  const history = useHistory();
  // const {userInfo} = useContext(UserContext);
  // if (!userInfo) {
  //   history.push('/login');
  // }
  // const {username} = userInfo;
  if (!username) {
    history.push('/login');
  }
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
  }, [username]);

  const classes = useStyles();

  // // hard coded sample data
  // const groups = [{
  //   group_name: 'group name',
  //   group_id: 123,
  // }];

  return (
    <div style={{justifyContent: 'center'}}>
      {groups.length > 0 ?
        (<Box component="div" className={classes.groupsListContainer}>
          {groups.map((group) => {
            return <GroupsListCard group={group} key={group.group_id}/>;
          })}
        </Box>) :
          (<div className={classes.message}>
            You are not subscribed to any groups.
          </div>)
      }
    </div>
  );
};

export default GroupsList;
