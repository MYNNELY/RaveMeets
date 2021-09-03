/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import GroupsListGallery from './GroupsListGallery.jsx';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  groupsListCard: {
    width: '1500px',
    justifyContent: 'flex-start',
    marginTop: '5px',
    marginLeft: '0',
    marginRight: '0',
  },
  groupsListInfo: {
    position: 'relative',
    color: '#FFF',
    width: '650px',
    maxHeight: '485px',
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

const GroupsListCard = ({group}) => {
  const classes = useStyles();
  const {group_id: groupId, group_name: groupName} = group;
  const [banner, setBanner] = useState('');
  const [groupPhotos, setGroupPhotos] = useState([]);
  const [eventName, setEventName] = useState('');
  const [venueName, setVenueName] = useState('');
  const [venueAddress, setVenueAddress] = useState('');

  const getGroupInfo = () => {
    axios.get(`http://54.176.43.199:3000/groups/${groupId}`)
        .then(({data}) => {
          setBanner(data[0].banner_url);
          setGroupPhotos(data[0].group_photos);
          const eventDetails = data[0].event_details;
          setEventName(eventDetails.name);
          setVenueName(eventDetails.venue.name);
          setVenueAddress(eventDetails.venue.address);
        })
        .catch((err) => {
          console.error(err);
        });
  };

  useEffect(() => {
    getGroupInfo();
  }, group);

  return (
    <Grid container spacing={1} className={classes.groupsListCard} key="1">
      <Grid item xs={5} className={classes.groupsListInfo}>
        <img src={banner} className={classes.mainImage} />
        <div className={classes.topLeft}>
          {groupName && <h3>{groupName}</h3>}
          {eventName && <h3>{eventName}</h3>}
          {venueName && <p>{venueName}</p>}
          {venueAddress && <p>{venueAddress}</p>}
        </div>
      </Grid>
      <Grid item className={classes.groupsListGallery}>
        <GroupsListGallery />
      </Grid>
    </Grid>
  );
};

export default GroupsListCard;
