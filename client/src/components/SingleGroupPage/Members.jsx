import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import SingleMembers from './SingleMembers.jsx';




const Members = ({ members }) => {
  //will make a get request for each person for there image
  console.log(members, 'here in members');

  // make axios request for user info

  const memberElement = members.map((singleMember) => {
    return (
      <SingleMembers singleMember={singleMember} />

    )
  })
  return (
    <div style={{backgroundColor: "lightblue"}}>
      <h1>All members</h1>
      {memberElement}
    </div>

  );
};


export default Members;
