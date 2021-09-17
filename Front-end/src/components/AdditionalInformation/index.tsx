import React from 'react';
import { Wifi } from 'react-feather';
import { StyledInformation } from './styles';

export const AdditionalInformation = () => {
  return (
    <StyledInformation>
      <Wifi />
      <p>Wi-Fi</p>
    </StyledInformation>
  );
};
