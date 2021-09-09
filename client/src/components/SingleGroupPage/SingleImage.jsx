import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  singleImage: {
    width: 500,
    height: 450,
  },
});



const SingleImage = ({singlePhoto}) => {
  // const {event_details} = data;
  console.log(singlePhoto, 'did this get where it needed to go?');
  const classes = useStyles();




  // console.log(event_details, 'this is all the event details')
  return (
    <>
      <img className={classes.singleImage} src={singlePhoto.url} />


    </>

  );
};


export default SingleImage;
