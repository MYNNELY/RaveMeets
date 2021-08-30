import React from 'react';
import BioSection from './Bio/BioSection.jsx';
import Groups from './Groups/Groups.jsx';
import Feed from './ProfileFeed/Feed.jsx';

const Profile = () => {
  return (
    <div>
      <BioSection />
      <Groups />
      <Feed />
    </div>
  );
};

export default Profile;
