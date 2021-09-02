import React from 'react';
import Picture from './Picture.jsx';
import ActionButton from './ActionButton.jsx';
import BioDetails from './BioDetails.jsx';

const BioSection = ({ profile, handleEditModal }) => {
  if (!profile) {
    return (<></>);
  }

  return (
    <div
      className="bio_container"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Picture profile={profile}/>
      <ActionButton handleEditModal={handleEditModal} />
      <BioDetails profile={profile} />
    </div>
  );
};

export default BioSection;
