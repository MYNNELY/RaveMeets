import React from 'react';
import Posts from './Posts.jsx';

const PastEvents = () => {
  return (
    <div
      style={{
        width: '375px',
        fontWeight: '600',
        fontSize: '24px',
        letterSpacing: '0.05em',
      }}
    >
      Past Events
      <Posts />
    </div>
  );
};

export default PastEvents;
