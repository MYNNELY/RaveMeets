import React from 'react';
import {GridWrapper} from './Styled';
import LineupArtist from './LineupArtist.jsx';
import PropTypes from 'prop-types';

const LineupPanel = ({artists}) => {
  return (
    <GridWrapper>
      {artists?.map(({artist_name}, index) => {
        return <LineupArtist name={artist_name} key={index}/>;
      })}
    </GridWrapper>
  );
};

LineupPanel.propTypes = {
  artists: PropTypes.array,
};

export default LineupPanel;
