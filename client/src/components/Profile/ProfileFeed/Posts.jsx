import React from 'react';
import Post from './Post.jsx';

const Posts = () => {
  const array = [1, 2, 3];
  return (
    <>
      {array.map((index, key) => (
        <Post key={key}/>
      ))}
    </>
  );
};

export default Posts;
