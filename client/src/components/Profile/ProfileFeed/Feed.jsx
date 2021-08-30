import React from 'react';
import UpcomingEvents from './UpcomingEvents.jsx';
import PastEvents from './PastEvents.jsx';

const Feed = () => {
  return (
    <div
      className='feed_container'
      style={{
        display: 'flex',
      }}
    >
      <UpcomingEvents />
      <PastEvents />
    </div>
  );
};

export default Feed;
