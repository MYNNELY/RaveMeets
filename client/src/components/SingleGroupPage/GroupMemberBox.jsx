import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import GroupMember from './GroupMember.jsx';



let Groupies = ["Joe", "Stitch", "Lilo"]
//why can't i just put hook in here?

const GroupMemberBox = () => {


  return (
    <div>
      <GroupMember />
    </div>


  );
};


export default GroupMemberBox;
