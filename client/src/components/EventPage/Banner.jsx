import React, {useState} from 'react';
import {StyledBannerContainer, StyledBannerImage} from './Styled';
import {makeStyles} from '@material-ui/core/styles';
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
});

const Banner = ({url}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);
  const openBanner = () => setOpen(true);
  const closeBanner = () => setOpen(false);
  return (
    <>
      <StyledBannerContainer onClick={() => openBanner()}>
        <StyledBannerImage src={url} alt='Banner image for event' />
      </StyledBannerContainer>
      <Modal
        open = {open}
        onClose = {closeBanner}
        onClick = {closeBanner}
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{width: '70%'}}>
            <StyledBannerImage src={url} alt='Banner image for event' />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

Banner.propTypes = {
  url: PropTypes.string,
};

export default Banner;
