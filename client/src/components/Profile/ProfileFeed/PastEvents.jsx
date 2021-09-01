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
          marginBottom: '15px',
        }}
      >
        Past Events
      </div>
      <Posts />
    </div>
  );
};

export default PastEvents;
