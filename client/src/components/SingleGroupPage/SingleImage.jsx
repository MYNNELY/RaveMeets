import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  singleImage: {
    border: 10,
    borderRadius: 3,
    width: 150,
    height: 150,
    padding: '0 20px',
  },
});



const SingleImage = ({data}) => {
  const {event_details} = data;
  const classes = useStyles();




  console.log(event_details, 'this is all the event details')
  return (
    <div className={classes.singleImage}>{'Event Details Go here.'}

      {/* <img> */}


    </div>

  );
};


export default SingleImage;
