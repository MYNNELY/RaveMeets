import React from 'react';
import Banner from './Banner.jsx';
import CreateGroup from './CreateGroup.jsx';
import Description from './Description.jsx';
import Title from './Title.jsx';
import {Container} from '@material-ui/core';


const EventPage = () => {
  return (
    <Container style={{width: '90%'}}>
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
