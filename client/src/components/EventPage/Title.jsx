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
  return (
    <TitleContainer>
      <EventTitle>{name}</EventTitle>
      <TitleLine>{getTime(start_date, end_date)}</TitleLine>
      <TitleLine>{venue.name} - {venue.address}</TitleLine>
      <TitleLine>{genres.map((genre, index) => {
        return <StyledSpan key={index}>{genre.genre_name}</StyledSpan>;
      })}</TitleLine>
      <div>{priceRating(price)}</div>
    </TitleContainer>
  );
};

Title.propTypes = {
  info: PropTypes.object,
};

export default Title;
