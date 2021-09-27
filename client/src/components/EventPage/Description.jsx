import React from 'react';
import {StyledDescription} from './Styled';
import PropTypes from 'prop-types';

const Description = ({description}) => {
  return (
    <StyledDescription>
      {description}
    </StyledDescription>
  );
};

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
