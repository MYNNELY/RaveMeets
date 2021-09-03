import React from 'react';
import {StyledBannerContainer, StyledBannerImage} from './Styled';

const Banner = ({url}) => {
  return (
    <StyledBannerContainer>
      <StyledBannerImage src={url} alt='Banner image for event' />
    </StyledBannerContainer>
  );
};

export default Banner;
