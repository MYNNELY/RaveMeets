import React from 'react';
import Picture from './Picture.jsx';
import AddFriend from './AddFriend.jsx';
import BioDetails from './BioDetails.jsx';

const BioSection = () => {
  return (
    <div
      className="bio_container"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Picture />
      <AddFriend />
      <BioDetails />
    </div>
  );
};

export default BioSection;
