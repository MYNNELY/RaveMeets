import React, {useEffect, useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import axios from 'axios';



//why can't i just put hook in here?

const SingleMembers = ({singleMember}) => {

  const [memberData, setMemberData] = useState(null);

  console.log(singleMember, 'what is this singlemember');
  useEffect(() => {

    axios.get(`http://54.176.43.199:3000/u/${singleMember.username}`)
      .then(function (response) {
        // handle success
        console.log(response.data[0])
        setMemberData(response.data[0]);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
      });
  }, []);

  if(memberData===null) {
    return null;
  }

  console.log(`http://localhost:3000/${singleMember.username}`, 'these should be right');

  return (
    <div style={{display: "inline"}}>
      <a href={`http://localhost:3000/u/${singleMember.username}`} >
      <img style={{width: 100}} src={memberData.profile_pic_url} />
      </a>
      <p>{singleMember.name}</p>
      <p>{singleMember.role}</p>
    </div>
  );
};


export default SingleMembers;
