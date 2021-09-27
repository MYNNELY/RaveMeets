import React, {useState} from 'react';
import {StyledBannerContainer, StyledBannerImage} from './Styled';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';

const Banner = ({url}) => {
  const [open, setOpen] = useState(null);
  const openBanner = () => setOpen(true);
  const  closeBanner = () => setOpen(false);
  return (
    <>
      <StyledBannerContainer>
        <StyledBannerImage src={url} alt='Banner image for event' />
      </StyledBannerContainer>
      <Modal
        open = {open}
        onClose = {closeBanner}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
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
