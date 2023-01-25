import { createGlobalStyle } from 'styled-components';

import { theme } from '@/theme/theme';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  #root {
    display: flex;
    flex-direction: column;
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.backgroundColor};
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }

  input[type='checkbox'] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default GlobalStyle;
