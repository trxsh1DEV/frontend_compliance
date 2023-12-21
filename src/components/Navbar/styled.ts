import styled from "styled-components";
import { mobile } from "../../styles/theme";

export const Navbar = styled.nav`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 1rem;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Icon = styled.img`
  ${mobile({ padding: "0px", flexDirecion: "column" })}
`;
export const Notification = styled.div``;
