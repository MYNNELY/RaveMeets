/* eslint-disable require-jsdoc */
import React from 'react';
import {Box} from '@material-ui/core';
import GroupsListCard from './GroupsListCard.jsx';

class GroupsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box className="group-list-container" component="div">
        <GroupsListCard />
      </Box>
    );
  }
}

export default GroupsList;
