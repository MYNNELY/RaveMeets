import React from 'react';
import GroupsListGallery from './GroupsListGallery.jsx';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  groupsListCard: {
    justifyContent: 'center',
    marginTop: '5px',
  },
  groupsListInfo: {
    position: 'relative',

    color: '#FFF',
    maxHeight: '356px',
    overflow: 'hidden',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  topLeft: {
    position: 'absolute',
    top: '30px',
    left: '30px',
  },
}));

const GroupsListCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5} className={classes.groupsListCard} key="1">
        <Grid item xs={5} className={classes.groupsListInfo}>
          <img src="https://static01.nyt.com/images/2020/03/10/arts/10virus-coachella1/10virus-coachella1-mediumSquareAt3X.jpg" className={classes.mainImage} />
          <div className={classes.topLeft}>
            <h3>Group 1 Name</h3>
            <h3>Event 1 Name</h3>
            <p>Event Description</p>
            <p>Event Location</p>
          </div>
        </Grid>
        <Grid item className={classes.groupsListGallery}>
          <GroupsListGallery />
        </Grid>
      </Grid>

      <Grid container spacing={5} className={classes.groupsListCard} key="2">
        <Grid item xs={5} className={classes.groupsListInfo}>
          <img src="https://static01.nyt.com/images/2020/03/10/arts/10virus-coachella1/10virus-coachella1-mediumSquareAt3X.jpg" className={classes.mainImage} />
          <div className={classes.topLeft}>
            <h3>Group 1 Name</h3>
            <h3>Event 2 Name</h3>
            <p>Event Description</p>
            <p>Event Location</p>
          </div>
        </Grid>
        <Grid item className={classes.groupsListGallery}>
          <GroupsListGallery />
        </Grid>
      </Grid>

      <Grid container spacing={5} className={classes.groupsListCard} key="3">
        <Grid item xs={5} className={classes.groupsListInfo}>
          <img src="https://static01.nyt.com/images/2020/03/10/arts/10virus-coachella1/10virus-coachella1-mediumSquareAt3X.jpg" className={classes.mainImage} />
          <div className={classes.topLeft}>
            <h3>Group 2 Name</h3>
            <h3>Event 3 Name</h3>
            <p>Event Description</p>
            <p>Event Location</p>
          </div>
        </Grid>
        <Grid item className={classes.groupsListGallery}>
          <GroupsListGallery />
        </Grid>
      </Grid>
    </>
  );
};

export default GroupsListCard;
