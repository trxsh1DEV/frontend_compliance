import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.rose};
  position: absolute;
  bottom: 0;
  text-decoration: none;
  font-weight: bold;
  transition: all 400ms ease-in;

  &:hover {
    text-decoration: none;
  }
`;

const LinkCompliance = (id) => {
  return <StyledLink to="/">Veja mais!</StyledLink>;
};
