import React from 'react';
import {
  SpinnerContainer,
  SpinPath,
  Spinner,
} from './Styled';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <SpinPath />
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
