import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 175px;
  height: 50px;
  border-radius: 10px;
  background: ${(props) => props.color};
  color: ${theme.assets.background};
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
