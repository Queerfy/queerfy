import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 175px;
  height: 50px;
  border-radius: 10px;

  background-color: ${(props) => props.color};
  color: ${theme.assets.background};

  &:hover {
    cursor: pointer;
  }
`;
