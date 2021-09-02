import React from 'react';
import Events from './Events.jsx';

const Feed = ({ pastEvents, upcomingEvents }) => {
  return (
    <div
      className='feed_container'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Events events={upcomingEvents} feedTitle={'Upcoming Events'}/>
      <Events events={pastEvents} feedTitle={'Past Events'}/>
    </div>
  );
};

export default Feed;
