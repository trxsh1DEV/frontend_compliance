import styled from "styled-components";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

export const SidebarContainer = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 70px;
  background-color: #333;
  padding-top: 20px;
  margin-right: 70px;
  transition: 300ms all ease-in-out;
  overflow: hidden;
  z-index: 2;

  &:hover {
    width: 200px;
    transition: 300ms all ease-in-out;
  }
`;

export const NavLink = styled(ReactRouterNavLink)`
  text-decoration: none;
  cursor: auto;
  position: relative;
  color: azure;
  display: table;
  width: 200px;
  padding: 10px;
`;

export const ListItemStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: 300ms all ease-in;
  cursor: pointer;

  &:hover {
    opacity: 1 !important;
    background-color: #444;
    color: #8086ff;
  }
`;

export const Span = styled.span`
  margin-left: 8px;
`;
