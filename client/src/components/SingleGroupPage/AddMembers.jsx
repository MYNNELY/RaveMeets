import React from 'react';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {
  makeStyles,
  withStyles,
  MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#57c',
    },
    secondary: {
      main: '#ddd',
    },
  },
});

const AddMembers = ({groupID}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Button
        variant='contained'
        startIcon={<AddIcon />}
        color='primary'
        style={{
          fontWeight: '900',
          fontSize: '0.6rem',
          maxHeight: '27px',
          marginTop: '4px'}}>
          Add Members
      </Button>
    </MuiThemeProvider>
  );
};

export default AddMembers;
