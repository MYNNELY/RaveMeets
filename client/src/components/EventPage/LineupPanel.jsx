import React from 'react';
import {GridWrapper} from './Styled';
import PropTypes from 'prop-types';

const LineupPanel = ({artists}) => {
  return (
    <GridWrapper></GridWrapper>
  );
};

LineupPanel.propTypes = {
  artists: PropTypes.array,
};

export default LineupPanel;
