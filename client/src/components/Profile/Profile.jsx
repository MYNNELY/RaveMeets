import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BioSection from './Bio/BioSection.jsx';
import Groups from './Groups/Groups.jsx';
import Feed from './ProfileFeed/Feed.jsx';
import EditBioModal from './Bio/EditBioModal.jsx';

const Profile = () => {
  const [profile, setProfile] = useState();
  const [editModal, setEditModal] = useState(false);

  const handleEditModal = (e) => {
    setEditModal(!editModal);
  };

  useEffect(() => {
    axios.get('http://54.176.43.199:3000/u/akhilsf')
        .then((results) => {
          console.log(results.data);
          setProfile(results.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

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
        profile={profile}
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
        profile={profile}
        editModal={editModal}
      />
    </div>
  );
};

export default Profile;
