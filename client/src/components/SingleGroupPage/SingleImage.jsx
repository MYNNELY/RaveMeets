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
    width: 100,
    height: 100,
    padding: '0 20px',
  },
});



const SingleImage = ({singlePhoto}) => {
  // const {event_details} = data;
  console.log(singlePhoto, 'did this get where it needed to go?');
  const classes = useStyles();




  // console.log(event_details, 'this is all the event details')
  return (
    <div >
      <img className={classes.singleImage} src={singlePhoto.url} />
      {/* <img> */}


    </div>

  );
};


export default SingleImage;
