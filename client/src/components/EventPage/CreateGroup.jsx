import React, { useState, useContext } from 'react';
import {GroupModal} from './Styled';
import {Button, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import UserContext from '../userContext.jsx';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    backgroundColor: 'rgba(0, 22, 48, 1)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const onGroupSubmit = (e, {_id, event_banner_url, username}) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log({...formProps, event_id: _id, event_banner_url, username});
  axios.post('http://54.176.43.199:3000/groups', {
    ...formProps,
    event_id: _id,
    event_banner_url,
    username})
      .then((result) => {
        // push to individual group page
        console.log(result);
        location.href = '/groups';
      })
      .catch((err) => {
        console.log(err);
      });
};

const CreateGroup = ({event = {}}) => {
  const {_id='id', event_banner_url='banner'} = event;
  const [create, setCreate] = useState(false);
  // let loggedIn = useContext(UserContext);
  let loggedIn = {userInfo: 'momo'};
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [groupname, setgroupname] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant='contained'
        startIcon={<AddIcon />}
        color='secondary'
        style={{fontWeight: '900', fontSize: '0.8rem', maxHeight: '50px'}}
        onClick={(ev) => {
          loggedIn.userInfo ? handleOpen() : location.href = '/Login';
        }}
      >
      Create Group
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form className={classes.paper} onSubmit={
            (e) => {
              onGroupSubmit(e, {_id, event_banner_url, username: loggedIn.userInfo});
            }}>
            <h2 id="transition-modal-title">Create Group</h2>
            <TextField
              id="transition-modal-description"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Group name"
              name="groupname"
              autoFocus
              autoComplete="groupname"
              value={groupname}
              onChange={(e) => setgroupname(e.target.value)}
            />
            <Button
              type='submit'
              variant='contained'
              style={{fontSize: '0.8rem', fontWeight: '900', maxHeight: '50px', backgroundColor:'#035'}}
            >
              submit</Button>
          </form>
        </Fade>
      </Modal>
    </>
  );
};

export default CreateGroup;
