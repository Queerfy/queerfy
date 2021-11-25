import styled from 'styled-components';

import { theme } from '../../styles/theme';

import { Form } from '@unform/web';

export const SlideContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 500px;
  margin-top: 16px;
  border-radius: 10px;
  position: relative;
`;

export const SlidePanel = styled.div`
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  overflow: hidden;
`;

export const SlideItem = styled.div`
  flex: none;
  width: 100%;
  height: 500px;
  scroll-snap-align: start;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    object-fit: cover;
  }
`;

export const AdressBar = styled(Form)`
  position: absolute;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  width: auto;
  height: auto;
  background-color: ${theme.assets.background};
  border-radius: 10px;
  padding: 8px 16px;
  margin-bottom: 60px;

  > div {
    margin-bottom: 8px;
  }

  button {
    background-color: transparent;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;

    width: 70%;
    height: 100px;
    background-color: ${theme.assets.background};
    margin-bottom: 4rem;
    border-radius: 10px;
    padding: 16px;
  }
`;

export const AdressItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 80px;
  border-bottom: 1px solid ${theme.assets.borderDark};

  > input {
    padding: 5px;
    height: 50%;
    width: 100%;
    background-color: ${theme.assets.background};
    color: ${theme.assets.font};
  }

  > h4 {
    color: ${theme.colors.red};
  }

  :last-child {
    border: none;
  }

  @media screen and (min-width: 1024px) {
    width: 20%;
    height: 100%;
    border-right: 2px solid ${theme.assets.borderLight};
    padding-right: 1rem;
    margin-right: 3rem;
    border-bottom: none;

    > input {
      height: 60%;
      width: 100%;
      background-color: transparent;
    }

    &:first-child {
      margin-left: 2rem;
    }

    &:last-child {
      border: none;
      margin-right: 0px;
    }
  }
`;
