import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export default createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.assets.background};
    color: ${(props) => props.theme.assets.font};
    font: 400 16px Poppins, sans-serif;
    padding: 0 32px;

    @media screen and (min-width: 1024px) {
      padding: 0 64px;
    }
  }

  input {
    font-family: 'Poppins';
    border: none;
    outline: none;
  }
`;
