/* eslint-disable require-jsdoc */
import React from 'react';
import {Container} from '@material-ui/core';
import GroupsListCard from './GroupsListCard.jsx';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  groupsListContainer: {
    width: '1500px',
    justifyContent: 'center',
    margin: '0',
  },
}));

const GroupsList = () => {
  const classes = useStyles();
  return (
    <Container component="div" className={classes.groupsListContainer}>
      <GroupsListCard />
    </Container>
  );
};

export default GroupsList;
