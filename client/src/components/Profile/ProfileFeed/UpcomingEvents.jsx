import React from 'react';
import Posts from './Posts.jsx';

const UpcomingEvents = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '434px',
        top: '484px',
        width: '375px',
        fontWeight: '600',
        fontSize: '24px',
        letterSpacing: '0.05em',
      }}
    >
      Upcoming Events
      <Posts />
    </div>
  );
};

export default UpcomingEvents;

