import React from 'react';
import {getTime} from './functions';
import {StyledSpan} from './Styled';
import {priceRating} from './functions.js';

const Title = ({info}) => {
  const {name='', start_date='', end_date='', venue={}, genres=[], price=null} = info;
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '1.5em'}}>
      <div style={{
        fontWeight: '500',
        fontSize: '2rem',
        marginBottom: '0.1em',
        letterSpacing: '0.2rem'}}>{name}</div>
      <div style={{marginBottom: '0.3em'}}>{getTime(start_date, end_date)}</div>
      <div style={{marginBottom: '0.3em'}}>{venue.name} - {venue.address}</div>
      <div style={{marginBottom: '0.3em'}}>{genres.map((genre) => {
        return <StyledSpan>{genre.genre_name}</StyledSpan>
      })}</div>
      <div style={{marginBottom: '1.5em'}}>{priceRating(price)}</div>
    </div>
  );
};

export default Title;
