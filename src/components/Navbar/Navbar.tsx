// Sidebar.js
import styled from "styled-components";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { House, UserCircle, Graph } from "phosphor-react";
import { mobile } from "../../styles/theme";

const SidebarContainer = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #333;
  padding-top: 20px;
  transition: 300ms all ease-in-out;

  & {
    ${mobile({ width: "67px" })}
  }
`;

const NavLink = styled(ReactRouterNavLink)`
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
`;
const ListItemStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #444;
  font-weight: 500;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: 300ms all ease-in;

  &:hover {
    opacity: 0.9; // Certifique-se de definir $soft-bg em algum lugar
  }

  & > span {
    ${mobile({ display: "none" })}
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavLink to="/compliance/add">
        <ListItemStyled>
          <House size={26} />
          <span>Home</span>
        </ListItemStyled>
      </NavLink>
      <NavLink to="/register">
        {" "}
        <ListItemStyled>
          <UserCircle size={26} />
          <span>Clientes</span>
        </ListItemStyled>
      </NavLink>
      <NavLink to="/admin/login">
        {" "}
        <ListItemStyled>
          <Graph size={26} />
          <span>Dashboards</span>
        </ListItemStyled>
      </NavLink>
    </SidebarContainer>
  );
};

export default Sidebar;
