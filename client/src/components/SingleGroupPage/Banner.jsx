import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  banner: {
    border: 0,
    borderRadius: 3,
    width: '1500px',
    height: '300px',
    objectFit: 'cover',
    padding: '0 20px',
  },
});


//why can't i just put hook in here?

const Banner = ({imgSource}) => {
  const classes = useStyles();

  console.log(imgSource);
  return (
    <img src={imgSource} className={classes.banner} alt="our event banner" />
  );
};


export default Banner;
