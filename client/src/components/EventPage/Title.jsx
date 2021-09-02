import React from 'react';

const Title = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '1.5em'}}>
      <div style={{
        fontWeight: '500',
        fontSize: '2rem',
        marginBottom: '0.1em',
        letterSpacing: '0.2rem'}}>Event Name</div>
      <div style={{marginBottom: '0.3em'}}>Location</div>
      <div style={{marginBottom: '1.5em'}}>Date</div>
    </div>
  );
};

export default Title;
