import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Paper} from '@material-ui/core';
import BioSection from './Bio/BioSection.jsx';
import Groups from './Groups/Groups.jsx';
import Feed from './ProfileFeed/Feed.jsx';
import EditBioModal from './Bio/EditBioModal.jsx';
import UserContext from '../userContext.jsx';

const Profile = () => {
  const [profile, setProfile] = useState();
  const [myProfile, setMyProfile] = useState(false);
  const [editModal, setEditModal] = useState(false);
  let {username} = useParams();
  const {userInfo, setUserInfo} = useContext(UserContext);

  const handleEditModal = (e) => {
    setEditModal(!editModal);
  };

  useEffect(() => {
    console.log(userInfo, username, 'look here')
    if (userInfo) {
      if (userInfo.username === username) {
        setMyProfile(true);
      } else {
        setMyProfile(false);
      }
    }

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
      <></>
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
        myProfile={myProfile}
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
        <Groups profile={profile}/>
        <Feed
          pastEvents={profile.events_attended}
          upcomingEvents={profile.events_upcoming}
        />
      </Paper>
      <EditBioModal
        profile={profile}
        editModal={editModal}
        handleEditModal={handleEditModal}
      />
    </div>
  );
};

export default Profile;
