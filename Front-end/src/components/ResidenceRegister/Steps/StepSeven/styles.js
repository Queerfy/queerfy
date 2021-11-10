import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  > h1 {
    display: none;
  }

  > button {
    margin-bottom: 32px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;

    > h1 {
      display: block;
    }
  }
`;

export const InputBox = styled.div`
  margin: 64px 0px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid ${theme.assets.font};
  text-align: center;
  padding: 16px;

  > label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  > input {
    display: none;
    display: none;
  }
`;
