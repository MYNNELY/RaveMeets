import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Paper} from '@material-ui/core';
import BioSection from './Bio/BioSection.jsx';
import Groups from './Groups/Groups.jsx';
import Feed from './ProfileFeed/Feed.jsx';
import EditBioModal from './Bio/EditBioModal.jsx';

const Profile = () => {
  const [profile, setProfile] = useState();
  const [editModal, setEditModal] = useState(false);
  let {username} = useParams();

  const handleEditModal = (e) => {
    setEditModal(!editModal);
  };

  useEffect(() => {
    axios.get(`http://54.176.43.199:3000/u/${username}`)
        .then((results) => {
          setProfile(results.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  if (!profile) {
    return (
      <div
        style={{
          width: '100%',
          margin: 'auto',
        }}
      >
        User Does Not Exist
      </div>
    );
  }
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
      <Paper
        elevtion={3}
        style={{
          marginLeft: '50px',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          width: '1000px',
          backgroundColor: '#1b2d46',
        }}
      >
        <Groups />
        <Feed
          pastEvents={profile.events_attended}
          upcomingEvents={profile.events_upcoming}
        />
      </Paper>
      <EditBioModal
        profile={profile}
        editModal={editModal}
      />
    </div>
  );
};

export default Profile;
