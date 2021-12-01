import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 80%;
  height: 70px;
  border-radius: 15px;
  padding: 0 32px;
  border: ${(props) =>
    props.selected
      ? `4px solid ${theme.colors.green}`
      : `2px solid ${theme.assets.font}`};
  transition: 0.3s;
  transform: ${(props) => (props.selected ? `scale(0.95)` : '')};

  span {
    margin-left: 16px;
    font-size: 24px;
  }

  @media screen and (min-width: 1024px) {
    width: 250px;
    height: 60px;

    &:hover {
      cursor: pointer;
      border-radius: 25px;
    }
  }
`;
