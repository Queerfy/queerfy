import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  max-width: 300px;
  z-index: 1;

  svg {
    transform: scale(0.9);
    transition: 0.3s;
    color: ${theme.assets.font};

    &:hover {
      transform: scale(1);
      opacity: 0.9;
      cursor: pointer;
    }
  }

  > li {
    color: ${theme.assets.background};
    margin: 0 10px;
    position: relative;

    &:hover {
      .submenu {
        transform: translateX(-50%) rotateX(0);
        opacity: 1;
      }
    }

    & a {
      cursor: pointer;
      color: ${theme.assets.background};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    & ul {
      border-radius: 10px;
      background-color: ${theme.assets.font};
      list-style: none;
      margin: 0;
      padding: 16px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotateX(-90deg);
      transform-origin: top center;
      top: calc(100% + 10px);
      opacity: 0.25;
      transition: all 0.3s 125ms ease-in;
      transition-timing-function: ease-out;

      // arrow
      &::after {
        border: 8px solid transparent;
        border-bottom-color: ${theme.assets.font};
        content: '';
        left: 50%;
        position: absolute;
        top: -16px;
        transform: translateX(-50%);
      }

      & > li {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }

      & > a {
        color: ${theme.assets.background};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Divider = styled.li`
  width: 100%;
  height: 1px;
  background-color: ${theme.assets.borderDark};
  opacity: 0.5;
  margin: -5px 0px;
`;
