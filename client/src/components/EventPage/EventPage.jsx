import React, {useState} from 'react';
import Banner from './Banner.jsx';
import CreateGroup from './CreateGroup.jsx';
import Description from './Description.jsx';
import Title from './Title.jsx';
import {Container} from '@material-ui/core';

import {getEvent} from './functions';


const EventPage = () => {
  const [event, setEvent] = useState(null);

  return (
    <Container style={{maxWidth: '1500px'}}>
      <Banner />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'}}
      >
        <Title>Title</Title>
        <CreateGroup />
      </div>
      <Description>Description</Description>
    </Container>
  );
};

export default EventPage;
