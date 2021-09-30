import React, {useState} from 'react';
import {GridWrapper, GridContainer, GridModal, HeaderText} from './Styled';
import LineupArtist from './LineupArtist.jsx';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: '#ddd',
    '& .MuiButton-label': {
      color: '#ddd',
      fontWeight: 'bold',
    },
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },
});

const LineupPanel = ({artists}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    <>
      <GridContainer onClick={openModal}>
        <GridWrapper>
          {artists?.map(({artist_name}, index) => {
            return <LineupArtist name={artist_name} key={index}/>;
          })}
        </GridWrapper>
      </GridContainer>
      <Modal
        open={open}
        onClose={closeModal}
        closeAfterTransition
        className={classes.modal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <GridModal style={{outline: 'none'}}>
            <HeaderText>Artist Lineup</HeaderText>
            <GridWrapper style={{
              height: 'max-content',
              marginBottom: '1em',
            }}>
              {artists?.map(({artist_name}, index) => {
                return <LineupArtist name={artist_name} key={index}/>;
              })}
            </GridWrapper>
            <Button
              variant='outlined'
              className={classes.button}
              onClick={closeModal}
            >Close</Button>
          </GridModal>
        </Fade>
      </Modal>
    </>
  );
};

LineupPanel.propTypes = {
  artists: PropTypes.array,
};

export default LineupPanel;
