import React from 'react';
import {Button} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {MuiThemeProvider, createTheme} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#57c',
    },
    secondary: {
      main: '#800',
    },
  },
});

const EventSiteButton = ({url}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Button
        href={url}
        target='_blank'
        variant='contained'
        color='secondary'
        startIcon={<OpenInNewIcon />}
        style={{fontWeight: '900', fontSize: '0.8rem', maxHeight: '50px'}}
      >
        Official site
      </Button>
    </MuiThemeProvider>
  );
};

EventSiteButton.propTypes = {
  url: PropTypes.string,
};

export default EventSiteButton;
