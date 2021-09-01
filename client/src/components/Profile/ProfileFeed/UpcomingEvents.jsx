import React from 'react';
import Posts from './Posts.jsx';

const UpcomingEvents = () => {
  return (
    <div
      style={{
        marginRight: '50px',
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

