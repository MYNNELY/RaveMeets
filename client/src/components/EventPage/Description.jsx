import React from 'react';
import {StyledDescription} from './Styled';

const Description = ({description}) => {
  return (
    <StyledDescription>
      {description}
    </StyledDescription>
  );
};

export default Description;
