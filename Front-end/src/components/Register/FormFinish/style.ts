import styled from 'styled-components';

import { BoxContainer } from '../FormUrgencyRegister/style';

export const TitleConfirm = styled.p`
  color: #e74c3c;
  font-weight: 600;

  text-align: center;
  font-size: 30px;

  width: 100%;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const BoxContainerConfirm = styled(BoxContainer)`
  margin: 40px 0;

  @media screen and (max-width: 1024px) {
    margin: 30px 0;
  }
`;
