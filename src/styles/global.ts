import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    box-sizing: border-box;
    font-size: 1.8rem;
  }
  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  html {
    font-size: 62.5%;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }

  form button{
    width: 100%;
  }
`;
