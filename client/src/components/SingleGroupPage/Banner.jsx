import React from 'react';
import {EventContainer} from './styles.js';
import { StyledBannerImage } from '../EventPage/Styled';

const Banner = ({eventDetails}) => {
  console.log(eventDetails);
  const {event_banner_url} = eventDetails;

  return (
    <EventContainer>
      <img
        src={event_banner_url}
        width='1500px' height='250px'
        style={{objectFit: 'cover', borderRadius: '10px'}}/>
    </EventContainer>
  );
};

export default Banner;
