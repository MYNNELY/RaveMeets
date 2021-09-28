/* eslint-disable max-len */
import React, {useState} from 'react';
import ImageUploader from './ImageUploader.jsx';
import {
  Paper,
  Button,
  TextField,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import axios from 'axios';


const EditBioModal = ({profile, editModal, handleEditModal, setProfileUpdated}) => {
  if (!profile) {
    return (
      <></>
    );
  };

  let updateButton;
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageUrlData, setImageUrlData] = useState(null);

  const extractDataFromUpload = (err, url) => {
    if (err) {
      console.log('error');
    } else {
      // else set extracted url to the imageUrlData
      // set uploading to false to show that its done uploading and enable the submit button again.
      setImageUrlData(url);
      setUploadingImage(false);
    }
  };

  const musicTaste = (genre) => {
    const genres = profile[0].music_taste;
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].genre_name === genre) {
        return true;
      }
    }
    return false;
  };

  const artistTaste = () => {
    const artistArray = [];
    for (const i in profile[0].artist_taste) {
      artistArray.push(profile[0].artist_taste[i].artist_name);
    }
    return artistArray.join(', ');
  };

  const [genreState, setGenreState] = useState({
    'RnB': musicTaste('RnB'),
    'HipHop': musicTaste('HipHop'),
    'Pop': musicTaste('Pop'),
    'EDM': musicTaste('EDM'),
    'KPop': musicTaste('KPop'),
    'Rock': musicTaste('Rock'),
    'Jazz': musicTaste('Jazz'),
  });
  const [profilePic, setProfilePic] = useState('');


  const handlePictureUpload = (e) => {
    setProfilePic([e.target.files]);
    setUploadingImage(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const likedGenres = [];
    for (const i in genreState) {
      if (genreState[i]) {
        likedGenres.push({genre_name: i});
      }
    }

    const artistInput = document.getElementById('artist_input').value.split(',');
    const likedArtists = [];
    artistInput.forEach((artist) => {
      likedArtists.push({artist_name: artist});
    });

    axios.put(`http://54.176.43.199:3000/u/${profile[0].username}`, {
      name: document.getElementById('name_input').value,
      bio: document.getElementById('bio_input').value,
      music_taste: likedGenres,
      artist_taste: likedArtists,
      profile_pic_url: imageUrlData,
    })
      .then(() => {
        setProfileUpdated((prevState) => prevState + 1);
        setImageUrlData(null);
        handleClose();
      });
  };

  const handleGenreChange = (e) => {
    setGenreState({...genreState, [e.target.name]: e.target.checked});
  };

  const handleClose = (e) => {
    handleEditModal();
  };

  const {RnB, HipHop, Pop, EDM, KPop, Rock, Jazz} = genreState;

  if (uploadingImage) {
    updateButton = <Button
      variant='contained'
      component='label'
      color='primary'
      disabled
      style={{
        width: '200px',
        height: '30px',
        marginTop: '20px',
        background: '#F50057',
      }}
    >
      Update
      <input
        type='submit'
        hidden
      />
    </Button>;
  } else {
    updateButton = <Button
      variant='contained'
      component='label'
      color='primary'
      style={{
        width: '200px',
        height: '30px',
        marginTop: '20px',
        background: '#F50057',
      }}
    >
      Update
      <input
        type='submit'
        hidden
      />
    </Button>;
  }

  return (
    <Paper
      elevation={3}
      variant='outlined'
      color='secondary'
      style={{
        display: editModal ? 'flex' : 'none',
        justifyContent: 'center',
        position: 'fixed',
        marginTop: '20px',
        marginBottom: 'auto',
        width: '500px',
        backgroundColor: '#353535',
      }}
    >
      <form
        onSubmit={handleUpdate}
        style={{
          margin: '7.5%',
          width: '90%',
          color: 'black',
        }}
      > <div style={{
          fontWeight: 600,
          fontSize: '24px',
          marginBottom: '15px',
        }}>
          Edit Profile
        </div>
        {uploadingImage &&
          <ImageUploader
            files={profilePic[0]}
            extract={extractDataFromUpload}
            imageUrlData={imageUrlData} />
        }
        <Button
          onClick={handleClose}
          style={{
            fontSize: '18px',
            float: 'right',
            top: '-50px',
          }}
        >&#10006;
        </Button>
        {imageUrlData &&
          <img src={imageUrlData} height={150}/>
        }
        { !imageUrlData &&
          <Button
            variant='outlined'
            component='label'
            style={{
              width: '200px',
              height: '30px',
              backgroundColor: 'darkgrey',
            }}
          >
            Upload Picture
            <input
              onChange={handlePictureUpload}
              id='upload_picture'
              type='file'
              accept='image/*'
              hidden
            />
          </Button>
        }
        <TextField
          fullWidth
          multiline
          id='name_input'
          label='Name'
          InputLabelProps={{
            style: {color: '#fff'},
          }}
          InputProps={{
            style: {color: '#fff'},
          }}
          defaultValue={profile[0].name}
          style={{
            marginTop: '20px',
          }}
        />
        <TextField
          fullWidth
          multiline
          id='bio_input'
          label='Bio'
          InputLabelProps={{
            style: {color: '#fff'},
          }}
          InputProps={{
            style: {color: '#fff'},
          }}
          defaultValue={profile[0].bio}
          style={{
            marginTop: '20px',
          }}
        />
        <FormControl id='genre_input' component='fieldset' style={{marginTop: '20px'}}>
          <FormLabel component='legend' style={{color: '#fff'}}>Favorite Genres</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={RnB} onChange={handleGenreChange} name='RnB' />}
              label='R&B'
            />
            <FormControlLabel
              control={<Checkbox checked={HipHop} onChange={handleGenreChange} name='HipHop' />}
              label='Hip Hop'
            />
            <FormControlLabel
              control={<Checkbox checked={Pop} onChange={handleGenreChange} name='Pop' />}
              label='Pop'
            />
            <FormControlLabel
              control={<Checkbox checked={EDM} onChange={handleGenreChange} name='EDM' />}
              label='EDM'
            />
            <FormControlLabel
              control={<Checkbox checked={KPop} onChange={handleGenreChange} name='KPop' />}
              label='K-Pop'
            />
            <FormControlLabel
              control={<Checkbox checked={Rock} onChange={handleGenreChange} name='Rock' />}
              label='Rock'
            />
            <FormControlLabel
              control={<Checkbox checked={Jazz} onChange={handleGenreChange} name='Jazz' />}
              label='Jazz'
            />
          </FormGroup>
        </FormControl>
        <TextField
          fullWidth
          multiline
          id='artist_input'
          label='Favorite Artists (Seperate with commas)'
          InputLabelProps={{
            style: {color: '#fff'},
          }}
          InputProps={{
            style: {color: '#fff'},
          }}
          defaultValue={artistTaste()}
          style={{
            marginTop: '10px',
          }}
        />
        {updateButton}
      </form>
    </Paper>
  );
};

export default EditBioModal;
