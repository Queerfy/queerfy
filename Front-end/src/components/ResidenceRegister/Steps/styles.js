import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  h1 {
    text-align: center;
    font-size: 22px;
    margin: 16px 0px;
  }

  div {
    margin: 16px 0px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;

    h1 {
      display: none;
    }
  }
`;

export const ContainerInputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;
    border: 1px solid ${theme.assets.font};

    padding: 5px;

    &:hover {
      cursor: pointer;
        }
    
    label {
      &:hover {
      cursor: pointer;
        }
    }

  input {
    display: none;
  }
`;
