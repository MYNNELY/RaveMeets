import React from 'react';
import {getTime} from './functions'

const Title = ({info}) => {
  const {name='', start_date='', end_date='', venue={}} = info;
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
      <div style={{marginBottom: '1.5em'}}>{venue.name} - {venue.address}</div>
    </div>
  );
};

export default Title;
