import React from 'react';
import BioSection from './Bio/BioSection.jsx';
import Groups from './Groups/Groups.jsx';
import Feed from './ProfileFeed/Feed.jsx';

const Profile = () => {
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
      <BioSection />
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
    </div>
  );
};

export default Profile;
