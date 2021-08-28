/* eslint-disable require-jsdoc */
import React from 'react';
import {Box} from '@material-ui/core';
import NavBar from '../NavBar/NavBar.jsx';
import SearchAppBar from '../NavBar/SearchAppBar.jsx';

class GroupListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar />
        <SearchAppBar />
        <Box className="group-list-container" component="div">
          Hello from Group List Page!
        </Box>
      </>
    );
  }
}

export default GroupListPage;
