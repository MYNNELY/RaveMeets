/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import GroupsListGallery from './GroupsListGallery.jsx';
import {Grid} from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
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
    minHeight: '423px',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    color: '#FFF',
  },
  topLeft: {
    position: 'absolute',
    top: '30px',
    left: '30px',
  },
  topRight: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
}));

const GroupsListCard = ({group}) => {
  const classes = useStyles();
  const history = useHistory();
  const {group_id: groupId, group_name: groupName} = group;
  const [banner, setBanner] = useState('');
  const [groupPhotos, setGroupPhotos] = useState([]);
  const [eventName, setEventName] = useState('');
  const [venueName, setVenueName] = useState('');
  const [venueAddress, setVenueAddress] = useState('');
  const [isHidden, setIsHidden] = useState(false);

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

  //   // hard coded sample data
  // useEffect(() => {
  //   setBanner('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCPyv9mVHSpygk_qk08wGoLQKaNybxhiLzg&usqp=CAU');
  //   setGroupPhotos([{
  //     'url': 'https://img.jakpost.net/c/2020/06/13/2020_06_13_97619_1592026084._large.jpg',
  //     'caption': 'Great time',
  //   },
  //   {
  //     'url': 'https://www.d8aspring.com/hs-fs/hubfs/Eye-on-Asia/20210614-successful-brand-collaborations-with-k-pop-group.jpg?width=807&name=20210614-successful-brand-collaborations-with-k-pop-group.jpg',
  //     'caption': 'Fun night',
  //   },
  //   {
  //     'url': 'https://i2.wp.com/koreabyme.com/wp-content/uploads/2020/12/Slide1-8.jpg?fit=1920%2C1280&ssl=1',
  //     'caption': 'Yeah!',
  //   }]);
  //   setEventName('coachella');
  //   setVenueName('coachella');
  //   setVenueAddress('cali');
  // }, []);

  return (
    <div>
      {!isHidden &&
    <Grid container spacing={1} className={classes.groupsListCard} key="1">
      <Grid item xs={5} className={classes.groupsListInfo}>
        <img src={banner} alt={groupName} className={classes.mainImage}
          onClick={(e) => {
            history.push(`/grouppage/${groupId}`);
          }} />
        <div className={classes.topLeft}>
          {groupName && <h3>{groupName}</h3>}
          {eventName && <h3>{eventName}</h3>}
          {venueName && <p>{venueName}</p>}
          {venueAddress && <p>{venueAddress}</p>}
        </div>
        <div className={classes.topRight}>
          <CloseRoundedIcon onClick={()=>setIsHidden(true)} />
        </div>
      </Grid>
      <Grid item className={classes.groupsListGallery}>
        <GroupsListGallery groupPhotos={groupPhotos} />
      </Grid>
    </Grid>
      }
    </div>
  );
};

export default GroupsListCard;
