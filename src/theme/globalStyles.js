import { createGlobalStyle } from "styled-components";

import { gilroyBold } from "src/fonts";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: gilroy_regular;
    src: url(${gilroyBold}) format("woff2");
  }

  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    font-family: gilroy_regular;
    
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
