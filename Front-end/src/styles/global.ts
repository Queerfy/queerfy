import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export default createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    font: 400 16px Poppins, sans-serif;
  }
`;
