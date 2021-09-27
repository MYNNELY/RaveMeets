import React from 'react';
import {StyledBannerContainer, StyledBannerImage} from './Styled';
import PropTypes from 'prop-types';

const Banner = ({url}) => {
  return (
    <StyledBannerContainer>
      <StyledBannerImage src={url} alt='Banner image for event' />
    </StyledBannerContainer>
  );
};

Banner.propTypes = {
  url: PropTypes.string,
};

export default Banner;
