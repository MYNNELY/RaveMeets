/* eslint-disable require-jsdoc */
import React from 'react';
import {Box} from '@material-ui/core';
import GroupsListCard from './GroupsListCard.jsx';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  groupsListContainer: {
    width: '1500px',
    justifyContent: 'flex-start',
    margin: '0',
  },
}));

const GroupsList = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.groupsListContainer}>
      <GroupsListCard />
    </Box>
  );
};

export default GroupsList;
