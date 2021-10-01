import React, {useState, useContext} from 'react';
import MapContext from '../mapContext.jsx';
import {
  getTime,
  getGenres,
  refactorAddress,
  capitalizeString,
} from './functions';
import {
  TitleContainer,
  EventTitle,
  TitleLine,
  FlexRow,
  FlexColumn,
  MapContainer,
  EventInfo,
  ButtonHolder,
  DateContainer,
  TimeLine,
  DateTimeContainer,
  GenreLine,
} from './Styled';
import PropTypes from 'prop-types';
import EventSiteButton from './EventSiteButton.jsx';
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
  const genresArray = getGenres(genres);
  const allGenres =  (genresArray) => {
    return genresArray.map((genre, index) => {
      if (index === 0) {
        return <GenreLine key={index}>{genre}</GenreLine>
      } else {
        return (
          <>
            <GenreLine key={index * 100}>•</GenreLine>
            <GenreLine key={index}>{genre}</GenreLine>
          </>
        );
      }
    })};
    return (
      <TitleContainer>
      <EventInfo>
        <FlexColumn spaceless>
          <EventTitle>{name ? capitalizeString(name) : null}</EventTitle>
          <div style={{marginBottom: '0.7rem'}}
          >
            {genresArray ? allGenres(genresArray) : null}
          </div>
          <TitleLine>{venue?.name}</TitleLine>
        </FlexColumn>
        <DateTimeContainer>
          <DateContainer>{dateTime?.date}</DateContainer>
          <div>
            <TimeLine>{dateTime?.time[0]}</TimeLine>
            <TimeLine>-</TimeLine>
            <TimeLine>{dateTime?.time[1]}</TimeLine>
          </div>
        </DateTimeContainer>
      </EventInfo>
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
      <ButtonHolder>
        <CreateGroup event={{_id, event_banner_url}}/>
        <EventSiteButton url={link || '#'}/>
      </ButtonHolder>
    </TitleContainer>
  );
};

Title.propTypes = {
  info: PropTypes.object,
};

export default Title;
