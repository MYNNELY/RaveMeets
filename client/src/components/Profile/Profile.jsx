import React, { useState } from 'react';
import BioSection from './Bio/BioSection.jsx';
import Groups from './Groups/Groups.jsx';
import Feed from './ProfileFeed/Feed.jsx';
import EditBioModal from './Bio/EditBioModal.jsx';

const Profile = () => {
  const [editModal, setEditModal] = useState(false);

  const handleEditModal = (e) => {
    console.log(e);
    setEditModal(!editModal);
  };

  return (
    <div
      className="profile"
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <BioSection
        handleEditModal={handleEditModal}
      />
      <div
        style={{
          marginLeft: '50px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Groups />
        <Feed />
      </div>
      <EditBioModal
        editModal={editModal}
      />
    </div>
  );
};

export default Profile;
