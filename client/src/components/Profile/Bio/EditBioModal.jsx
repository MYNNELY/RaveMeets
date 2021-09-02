import React from 'react';
import {Paper, Button, TextField} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const EditBioModal = ({editModal}) => {
  return (
    <Paper
      elevation={3}
      variant='outlined'
      color='secondary'
      style={{
        display: editModal ? 'flex' : 'none',
        justifyContent: 'center',
        position: 'fixed',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '500px',
        backgroundColor: 'darkgrey',
      }}
    >
      <form
        style={{
          margin: '10%',
          width: '90%',
          color: 'black',
        }}
      >
        <Button
          variant='outlined'
          component='label'
          style={{
            width: '200px',
            height: '30px',
            color: 'black',
          }}
        >
          Update Picture
          <input
            type='file'
            accept='image/*'
            hidden
          />
        </Button><br />
        <TextField
          fullWidth
          multiline
          id='bio_input'
          label='Bio'
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          style={{
            marginTop: '10px',
          }}
        />
        <TextField
          fullWidth
          multiline
          id='genre_input'
          label='Favorite Genres (Seperate with commas)'
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          style={{
            marginTop: '10px',
          }}
        />
        <TextField
          fullWidth
          multiline
          id='artist_input'
          label='Favorite Artists (Seperate with commas)'
          InputLabelProps={{
            style: { color: '#fff' },
          }}
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
            marginTop: '40px',
            background: '#C974C4',
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
