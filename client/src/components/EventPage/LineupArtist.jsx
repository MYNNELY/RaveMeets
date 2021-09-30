import React from 'react';
import {
  PerformerContainer,
  PerformerIcon,
  PerformerName,
} from './Styled';
import PropTypes from 'prop-types';

const LineupArtist = ({name}) => {
  return (
    <PerformerContainer>
      <PerformerIcon />
      <PerformerName>{name}</PerformerName>
    </PerformerContainer>
  );
};

LineupArtist.propTypes = {
  name: PropTypes.string,
};

export default LineupArtist;
