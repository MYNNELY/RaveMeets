import React, { useState, useEffect } from 'react';
import { ThemeProvider, Box } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import AddFriend from './AddFriend.jsx';
import Chatroom from './Chatroom.jsx';
import GroupImg2 from './GroupImg2.jsx';
import Members from './Members.jsx';
import EventDetails from './EventDetails.jsx';
import ImagesTogether from './ImagesTogether.jsx';


import Banner from './Banner.jsx';
import { useParams } from 'react-router-dom'

//import './Chatroom/Chatroom.css';

import axios from 'axios';




//why can't i just put hook in here?

const SingleGroupPage = (props) => {
  const params = useParams();
  console.log('hello this is supposed to be params');

  const { name } = useParams();

  // const [groupID, setGroupID] = useState("61311a5a219130dbcd125a19");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams({});
  console.log(id, 'this is the group id')
  // if (id) {
  //   setGroupID(id);
  // }

  useEffect(() => {

    axios.get(`http://54.176.43.199:3000/groups/${id}`)
      .then(function (response) {
        // handle success
        console.log('hello');
        console.log(response.data);
        console.log(response.data[0].banner_url);

        setData(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <div>loading!!</div>
    )
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{width: 1500}}>
        <ThemeProvider theme={theme}>
          {/* <Banner imgSource={data.banner_url} /> */}
          <Members members={data.members} />
          <AddFriend data={data} />
          <GroupImg2 />
          {/*  might need to fix */}
          {/* <ImagesTogether data={data} />
          <EventDetails data={data} /> */}
          {/* <Button variant="contained" color="primary">
            Hello World
          </Button>
          <Hook /> */}
          <br />
          <br />
          <br />
          <br />
          <div>

            <Chatroom />
          </div>

        </ThemeProvider>
      </div>
    </div>



  );
};


export default SingleGroupPage;
