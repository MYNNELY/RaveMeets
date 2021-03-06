import React, {useState, useEffect} from 'react';
import {Paper} from '@material-ui/core';

const BioDetails = ({profile}) => {
  const [bio, setBio] = useState([]);
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setBio(profile[0].bio);
    setGenres(profile[0].music_taste);
    setArtists(profile[0].artist_taste);
  }, [bio, genres, artists]);

  if (!profile) {
    return (<></>);
  }

  return (
    <>
      <Paper
        style={{
          width: '275px',
          marginTop: '20px',
          background: '#1b2d46',
        }}
      >
        <div
          style={{
            position: 'relative',
            margin: '12px',
            fontSize: '18px',
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
      Bio
          <div
            style={{
              marginLeft: '12px',
              fontWeight: 400,
              fontSize: '14px',
            }}
          >
            {bio}
          </div>
        </div>
      </Paper>
      <Paper
        style={{
          width: '275px',
          marginTop: '10px',
          background: '#1b2d46',
        }}
      >
        <div
          style={{
            position: 'relative',
            margin: '12px',
            fontSize: '18px',
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
      Favorite Genres
          <ul
            style={{
              marginLeft: '24px',
              fontWeight: 400,
              fontSize: '14px',
            }}
          >
            {genres.map((genre) => (
              <li>{genre.genre_name}</li>
            ))}
          </ul>
        </div>
      </Paper>
      <Paper
        style={{
          width: '275px',
          marginTop: '10px',
          background: '#1b2d46',
        }}
      >
        <div
          style={{
            position: 'relative',
            margin: '12px',
            fontSize: '18px',
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
      Favorite Artists
          <ul
            style={{
              marginLeft: '24px',
              fontWeight: 400,
              fontSize: '14px',
            }}
          >
            {artists.map((artist) => (
              <li>{artist.artist_name}</li>
            ))}
          </ul>
        </div>
      </Paper>
    </>
  );
};

export default BioDetails;
