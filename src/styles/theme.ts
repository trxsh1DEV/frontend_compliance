import { css } from "styled-components";

// theme.js
const theme = {
  colors: {
    primary: "#3FDABE",
    green: "#3FD97A",
    green_100: "#65EA98",
    errorLight: "#dc6179",
    cyanPrimary: "#1BA9D4",
  },
  fonts: {
    default: "'Urbanist', sans-serif",
    secondary: "'Open Sans', -apple-system",
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
