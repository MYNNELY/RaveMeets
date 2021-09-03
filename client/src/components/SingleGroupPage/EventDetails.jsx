import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  eventDetails: {
    border: 10,
    borderRadius: 3,
    width: '95%',
    height: 150,
    padding: '0 20px',
  },
});


//why can't i just put hook in here?





//why can't i just put hook in here?

const EventDetails = ({data}) => {
  const {event_details} = data;
  const classes = useStyles();




  console.log(event_details, 'this is all the event details')
  return (
    <div className={classes.eventDetails}>{'Event Details Go here.'}

      <h1>{event_details.name}</h1>
      <h2>{event_details.price}</h2>
      <h2>{event_details.start_date}</h2>
      <h2>{event_details.venue.name}</h2>
      <a href={event_details.link}>{event_details.link}</a>



    </div>

  );
};


export default EventDetails;
