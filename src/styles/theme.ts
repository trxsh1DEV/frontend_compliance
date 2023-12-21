import { css } from "styled-components";

// theme.js
const theme = {
  colors: {
    primary: "#3FDABE",
    green: "#3FD97A",
    green_100: "#65EA98",
    errorLight: "#dc6179",
  },
  fonts: {
    main: "Arial, sans-serif",
  },
};

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 770px) {
      ${props}
    }
  `;
};

export default theme;
