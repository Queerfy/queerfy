import styled from 'styled-components';

import { theme } from '../../styles/theme';

import { Popup } from 'react-leaflet';

export const MapContainer = styled.div`
  height: 500px;
  margin-bottom: 20px;
`;

export const PopupStyled = styled(Popup)`
  //Container que contem o conteudo do popup
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  //Div de conteudo do popup
  .leaflet-popup-content {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 13px;
    font-weight: 700;
    margin: 8px 12px;
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
`;

export const TitleMap = styled.p`
  margin-bottom: 15px;
  font-size: 25px;
  color: ${theme.colors.blue};
  font-weight: 700;
`;
