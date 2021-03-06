import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10vh;
  border-bottom: 1px solid ${theme.assets.borderLight};
  margin-bottom: 16px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
