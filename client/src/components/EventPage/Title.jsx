import React from 'react';
import {getTime, getGenres} from './functions';
import {
  StyledSpan,
  TitleContainer,
  EventTitle,
  TitleLine,
  FlexRow,
  FlexColumn,
} from './Styled';
import PropTypes from 'prop-types';
import EventSiteButton from './EventSiteButton.jsx';
import AttendButton from './AttendButton.jsx';
import CreateGroup from './CreateGroup.jsx';

const Title = ({info}) => {
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
          <TitleLine></TitleLine>
        </FlexColumn>
        <FlexColumn></FlexColumn>
      </FlexRow>
      <div>google map</div>
      <FlexRow>
        <CreateGroup event={{_id, event_banner_url}}/>
        <EventSiteButton url={link || '#'}/>
      </FlexRow>
    </TitleContainer>
  );
};

// <TitleContainer>
//   <EventTitle>{name}</EventTitle>
//   <TitleLine>{dateTime?.date} + {dateTime?.time}</TitleLine>
//   <TitleLine>{venue?.name} - {venue?.address}</TitleLine>
//   <TitleLine>{genres?.map((genre, index) => {
//     return <StyledSpan key={index}>{genre.genre_name}</StyledSpan>;
//   })}</TitleLine>
// </TitleContainer>
Title.propTypes = {
  info: PropTypes.object,
};

export default Title;
