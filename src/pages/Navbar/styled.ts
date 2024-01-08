import styled from "styled-components";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { compactSlidebar } from "../../styles/theme";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 200px;
  background-color: #333;
  padding-top: 20px;
  transition: 300ms all ease-in-out;
  overflow: hidden;

  & {
    ${compactSlidebar({ width: "67px" })}
  }
`;

export const NavLink = styled(ReactRouterNavLink)`
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  cursor: auto;
`;

export const ListItemStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #444;
  font-weight: 500;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: 300ms all ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  & > span {
    ${compactSlidebar({ display: "none" })}
  }
`;
