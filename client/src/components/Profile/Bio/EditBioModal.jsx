/* eslint-disable max-len */
import React, { useState } from 'react';
// import useStorage from '../../../hooks/useStorage';
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

const EditBioModal = ({profile, editModal,  handleEditModal}) => {
  if (!profile) {
    return (
      <></>
    );
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
    for (let i in profile[0].artist_taste) {
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

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(document.getElementById('upload_picture').file[0]);

    const likedGenres = [];
    for (let i in genreState) {
      if (genreState[i]) {
        likedGenres.push({genre_name: i});
      }
    }

    const artistInput = document.getElementById('artist_input').value.split(',');
    const likedArtists = [];
    artistInput.forEach((artist) => {
      console.log(artist);
      likedArtists.push({artist_name: artist});
    });

    console.log(likedArtists);

    axios.put(`http://54.176.43.199:3000/u/${profile[0].username}`, {
      name: document.getElementById('name_input').value,
      bio: document.getElementById('bio_input').value,
      music_taste: likedGenres,
      artist_taste: likedArtists,
    });
  };

  const handleGenreChange = (e) => {
    setGenreState({ ...genreState, [e.target.name]: e.target.checked });
  };

  const handleClose = (e) => {
    handleEditModal();
  };

  const {RnB, HipHop, Pop, EDM, KPop, Rock, Jazz} = genreState;

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
        <Button
          onClick={handleClose}
          style={{
            fontSize: '18px',
            float: 'right',
            top: '-50px',
          }}
        >&#10006;
        </Button>
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
            id='upload_picture'
            type='file'
            accept='image/*'
            hidden
          />
        </Button><br />
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
        <Button
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
        </Button>
      </form>
    </Paper>
  );
};

export default EditBioModal;
