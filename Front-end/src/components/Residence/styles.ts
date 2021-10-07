import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 16px;

  > h4 {
    margin: 8px 0px;
  }

  > span {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 8px;
    }
  }

  > p {
    color: ${theme.assets.borderDark};
    margin-top: 8px;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: auto;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  > img {
    width: 100%;
  }
`;

export const HoveredImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${theme.assets.font};
  opacity: 0;
  transition: 0.3s;

  > svg {
    color: ${theme.assets.background};
    width: 60px;
    height: 60px;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
