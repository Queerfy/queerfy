import React from 'react';
import { Heart, MapPin } from 'react-feather';
import { AdditionalInformation } from '../../components/AdditionalInformation';
import {
  Header,
  Local,
  Favorite,
  Subtitle,
  Highlights,
  Informations,
} from './styles';

export const House = () => {
  return (
    <>
      <Header>
        <h1>Casa - 1 quarto disponível</h1>
        <Subtitle>
          <Local>
            <MapPin />
            <p>SP - Alphaville</p>
          </Local>
          <Favorite>
            <p>Amei</p>
            <Heart />
          </Favorite>
        </Subtitle>
      </Header>

      <img src="img-casa.svg" width="100%" height="100%" />

      <Highlights>
        <h2>nome do proprietário</h2>
        <Informations>
          <AdditionalInformation />
          <AdditionalInformation />
          <AdditionalInformation />
        </Informations>

        <Informations>
          <AdditionalInformation />
          <AdditionalInformation />
          <AdditionalInformation />
        </Informations>
      </Highlights>
    </>
  );
};
