import React from 'react';
import { Coffee, Droplet, Wifi } from 'react-feather';
import { StyledInformation } from './styles';

export const AdditionalInformation = ({ type }) => {
  return (
    <StyledInformation>
      {type == 'Wi-Fi' && <Wifi />}
      {type == 'Animais' && (
        <img
          style={{ width: '25px', marginRight: '5px' }}
          src="../cat-paw.svg"
          alt="pata"
        />
      )}
      {type == 'Piscina' && <Droplet />}
      {type == 'Cozinha' && <Coffee />}
      {type == 'Garagem' && (
        <img
          style={{ width: '25px', marginRight: '5px' }}
          src="../parking-icon.svg"
          alt="estacionamento"
        />
      )}
      <p>{type}</p>
    </StyledInformation>
  );
};
