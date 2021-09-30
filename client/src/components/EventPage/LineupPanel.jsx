import React from 'react';
import {GridWrapper, GridContainer} from './Styled';
import LineupArtist from './LineupArtist.jsx';
import PropTypes from 'prop-types';

const LineupPanel = ({artists}) => {
  return (
    <GridContainer>
      <GridWrapper>
      {artists?.map(({artist_name}, index) => {
          return <LineupArtist name={artist_name} key={index}/>;
      })}
      </GridWrapper>
    </GridContainer>
  );
};

LineupPanel.propTypes = {
  artists: PropTypes.array,
};

export default LineupPanel;
