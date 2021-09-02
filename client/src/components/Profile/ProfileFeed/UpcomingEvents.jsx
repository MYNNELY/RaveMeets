import React from 'react';
import Posts from './Posts.jsx';

const UpcomingEvents = () => {
  return (
    <div
      style={{
        marginRight: '2.5%',
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
        Upcoming Events
      </div>
      <Posts />
    </div>
  );
};

export default UpcomingEvents;

