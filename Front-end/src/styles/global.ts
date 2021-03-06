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

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  input,
  button,
  textarea {
    font-family: 'Poppins';
    font-size: 16px;
    border: none;
    outline: none;
  }
`;
