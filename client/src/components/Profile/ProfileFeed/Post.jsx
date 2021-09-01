import React from 'react';

const Post = () => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div
      className='post_container'
      style={{
        marginBottom: '30px',
      }}
    >
      <div
        className='main_image'
        style={{
          width: '375px',
          height: '175px',
          background: '#C4C4C4',
        }}
      />
      <div
        className='image_gallery'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        {array.map((index, key) => (
          <span
            key={key}
            style={{
              height: '40px',
              width: '40px',
              background: '#C4C4C4',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;
