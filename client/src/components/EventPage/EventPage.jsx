import React, {useState, useEffect} from 'react';
import Banner from './Banner.jsx';
import CreateGroup from './CreateGroup.jsx';
import Description from './Description.jsx';
import SideInfo from './SideInfo.jsx';
import Title from './Title.jsx';
import {Container} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import {InfoContainer} from './Styled'

import {getEvent} from './functions';


const EventPage = () => {
  const [event, setEvent] = useState({});
  const {id} = useParams({});
  useEffect( () => {
    getEvent(id, setEvent);
  }, []);

  return (
    <Container style={{maxWidth: '1500px'}}>
      <Banner url={event.event_banner_url || '#'}/>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'}}
      >
        <Title info={event}></Title>
        <CreateGroup event={event}/>
      </div>
      <InfoContainer>
        <Description description={event.description || ''} />
        <SideInfo lineup={event.artist_list || [{}]} />
      </InfoContainer>
    </Container>
  );
};

export default EventPage;
