import React from 'react';
import Posts from './Posts.jsx';

const PastEvents = () => {
  return (
    <div
      style={{
        width: '375px',
        fontWeight: '600',
        fontSize: '18px',
      }}
    >
      <div
        style={{
          marginBottom: '2.5%',
        }}
      >
        Past Events
      </div>
      <Posts />
    </div>
  );
};

export default PastEvents;
