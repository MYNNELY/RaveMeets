import React from 'react';
import {getTime} from './functions';
import {
  StyledSpan,
  TitleContainer,
  EventTitle,
  TitleLine,
} from './Styled';
import {priceRating} from './functions.js';
import PropTypes from 'prop-types';

const Title = ({info}) => {
  const {
    name = '',
    start_date = '',
    end_date = '',
    venue = {},
    genres = [],
    price = null,
  } = info;
  const dateTime = getTime(start_date, end_date);
  return (
    <TitleContainer>
      <EventTitle>{name}</EventTitle>
      <TitleLine>{dateTime?.date} + {dateTime?.time}</TitleLine>
      <TitleLine>{venue.name} - {venue.address}</TitleLine>
      <TitleLine>{genres.map((genre, index) => {
        return <StyledSpan key={index}>{genre.genre_name}</StyledSpan>;
      })}</TitleLine>
    </TitleContainer>
  );
};

Title.propTypes = {
  info: PropTypes.object,
};

export default Title;
