import React from 'react';

const Post = ({ event }) => {
  return (
    <div
      className='post_container'
    >
      <div
        className='main_image'
        style={{
          width: '375px',
          height: '175px',
          background: '#C4C4C4',
        }}
      />
    </div>
  );
};

export default Post;
