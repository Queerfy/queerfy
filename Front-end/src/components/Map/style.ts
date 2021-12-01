import styled from 'styled-components';

import { theme } from '../../styles/theme';

import { Popup } from 'react-leaflet';

export const MapContainer = styled.div`
  height: 500px;
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.assets.borderDark};
  margin: 8px 0;
`;

export const PopupStyled = styled(Popup)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 150px;
  bottom: 60px !important;

  h3 {
    margin: 8px 0;
  }

  svg {
    margin-right: 5px;
  }

  span,
  p,
  h3 {
    display: flex;
    align-items: center;

    > strong {
      font-weight: bold !important;
    }
  }

  strong {
    color: ${theme.colors.red};
    margin-right: 5px;
  }

  a {
    align-self: center;
    color: ${theme.colors.red} !important;
    cursor: pointer;
  }

  //Container que contem o conteudo do popup
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
  }

  //Div de conteudo do popup
  .leaflet-popup-content {
    font-size: 13px;
    font-weight: 700;
  }

  //Texto para o link que vai a propriedade selecionada
  .leaflet-popup-content a {
    color: black;
    text-decoration: none;
  }

  //Container do Tip do popup
  .leaflet-popup-tip-container {
  }

  //Tip do popup
  .leaflet-popup-tip {
    display: none;
  }

  .leaflet-container {
    z-index: 5;
  }

  .leaflet-popup-close-button {
    margin: 12px 5px 0 0;
  }
`;

export const TitleMap = styled.p`
  margin-bottom: 15px;
  font-size: 25px;
  color: ${theme.colors.blue};
  font-weight: 700;
`;
