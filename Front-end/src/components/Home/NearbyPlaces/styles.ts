import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: auto;
  height: auto;

  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;

export const ItemImage = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  width: 85px;
  height: 85px;
  border-radius: 10px;
  margin-right: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CityInfo = styled.div`
  width: auto;
  height: auto;

  > h3 {
    font-size: 16px;
    color: ${theme.assets.font};
  }

  > p {
    font-size: 12px;
    color: ${theme.assets.borderDark};
  }
`;
