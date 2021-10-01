import React, {useState, useEffect} from 'react';
import Banner from './Banner.jsx';
import Description from './Description.jsx';
import Title from './Title.jsx';
import {useParams} from 'react-router-dom';
import {MainContainer, FlexRow, SideContainer} from './Styled';
import {getEvent} from './functions';

const EventPage = () => {
  const [event, setEvent] = useState({});
  const {id} = useParams({});
  useEffect( () => {
    getEvent(id, setEvent);
  }, [id]);

  return (
    <MainContainer>
      <FlexRow style={{height: 650}}>
        <Banner url={event.event_banner_url || '#'}/>
        <SideContainer>
          <Title info={event}/>
        </SideContainer>
      </FlexRow>
      <Description description={event.description || ''} />
    </MainContainer>
  );
};

export default EventPage;
