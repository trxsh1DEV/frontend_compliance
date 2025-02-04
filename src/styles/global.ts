import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #212534;
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: ${theme.fonts.default};
    -webkit-font-smoothing: antialiased;
    color: #fff;
    font-size: 2rem;
  }
  html {
    font-size: 62.5%;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h3 {
    text-align: center;
    border-bottom: 1px solid #fff;
  }
  div{
    color: #fff;
  }
  button {
    cursor: pointer;
  }
  a {
    font-weight: 500;
    text-decoration: none;
  }
  a:hover {
    /* color: #535bf2; */
    opacity: .95;
  }

`;
