import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 1.8rem;
    color: #fff;
  }
  body {
    background: #212534;
    min-width: 100vw;
    min-height: 100vh;
    font-family: ${theme.fonts.default};
    -webkit-font-smoothing: antialiased;
    /* font-size: 1.8rem; */
  }
  html {
    font-size: 62.5%;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h2 {
    text-align: center;
    border-bottom: 1px solid #fff;
  }
  button {
    cursor: pointer;
  }

`;
