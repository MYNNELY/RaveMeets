import React from 'react';
import GroupsListGallery from './GroupsListGallery.jsx';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  groupsListCard: {
    justifyContent: 'center',
    marginTop: '5px',
  },
}));

const GroupsListCard = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.groupsListCard}>
      <Grid item xs={5}>
        <h3>Group 1 Name</h3>
        <h3>Event 1 Name</h3>
        <p>Event Description</p>
        <p>Event Location</p>
        <p>main pic</p>
      </Grid>
      <Grid item className={classes.groupsListGallery}>
        <GroupsListGallery />
      </Grid>
    </Grid>
  );
};

export default GroupsListCard;
