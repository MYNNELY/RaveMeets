import React from 'react';
import Picture from './Picture.jsx';
import ActionButton from './ActionButton.jsx';
import BioDetails from './BioDetails.jsx';

const BioSection = ({ handleEditModal }) => {
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
      <ActionButton
        handleEditModal={handleEditModal}
      />
      <BioDetails />
    </div>
  );
};

export default BioSection;
