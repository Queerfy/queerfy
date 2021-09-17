import React from 'react';
import { Heart, MapPin } from 'react-feather';
import { AdditionalInformation } from '../../components/AdditionalInformation';
import {
  Header,
  Local,
  Favorite,
  Subtitle,
  Informations,
  AlignInformations,
  Description,
  BackgroundReservation,
  BorderRainbow,
  Reservation,
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

      <Informations>
        <h2>Nome do proprietário</h2>

        <AlignInformations>
          <AdditionalInformation />
          <AdditionalInformation />
        </AlignInformations>

        <AlignInformations>
          <AdditionalInformation />
          <AdditionalInformation />
        </AlignInformations>

        <AlignInformations>
          <AdditionalInformation />
          <AdditionalInformation />
        </AlignInformations>
      </Informations>

      <Informations>
        <h2>Regras</h2>

        <AlignInformations>
          <AdditionalInformation />
          <AdditionalInformation />
        </AlignInformations>

        <AlignInformations>
          <AdditionalInformation />
          <AdditionalInformation />
        </AlignInformations>
      </Informations>

      <Description>
        <h2>Descrição</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Description>

      <BackgroundReservation>
        <BorderRainbow>
          <Reservation />
        </BorderRainbow>
      </BackgroundReservation>
    </>
  );
};
