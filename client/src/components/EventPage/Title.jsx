import React, {useState, useContext} from 'react';
import MapContext from '../mapContext.jsx';
import {getTime, getGenres, refactorAddress} from './functions';
import {
  TitleContainer,
  EventTitle,
  TitleLine,
  FlexRow,
  FlexColumn,
  MapContainer,
} from './Styled';
import PropTypes from 'prop-types';
import EventSiteButton from './EventSiteButton.jsx';
import AttendButton from './AttendButton.jsx';
import CreateGroup from './CreateGroup.jsx';
import LineupPanel from './LineupPanel.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

const Title = ({info}) => {
  const apiKey = useContext(MapContext);
  const [loading, setLoading] = useState(true);
  const {
    _id,
    event_banner_url,
    name,
    start_date,
    end_date,
    venue,
    genres,
    link,
    artist_list,
  } = info;
  const dateTime = getTime(start_date, end_date);
  return (
    <TitleContainer>
      <FlexRow>
        <FlexColumn>
          <EventTitle>{name}</EventTitle>
          <TitleLine>{getGenres(genres)}</TitleLine>
          <TitleLine>{venue?.name} - {venue?.address}</TitleLine>
        </FlexColumn>
        <FlexColumn>
          <EventTitle>{dateTime?.date}</EventTitle>
          <EventTitle>{dateTime?.time}</EventTitle>
        </FlexColumn>
      </FlexRow>
      <MapContainer>
        {venue?.address ? <iframe
          onLoad={() => setLoading(false)}
          width='100%'
          height='100%'
          frameBorder='0' style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${refactorAddress(venue.address)}`}
          allowFullScreen>
        </iframe> : null}
        {loading ? <LoadingSpinner /> : null}
      </MapContainer>
      <LineupPanel artists={artist_list}/>
      <FlexRow>
        <CreateGroup event={{_id, event_banner_url}}/>
        <EventSiteButton url={link || '#'}/>
      </FlexRow>
    </TitleContainer>
  );
};

Title.propTypes = {
  info: PropTypes.object,
};

export default Title;
