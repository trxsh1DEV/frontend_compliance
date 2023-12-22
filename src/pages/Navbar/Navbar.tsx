// Sidebar.js
import { House, UserCircle, Graph, SignIn, SignOut } from "phosphor-react";
import { SidebarContainer, ListItemStyled, NavLink } from "./styled";
import Cookies from "js-cookie";
const Sidebar = () => {
  const tokenValid = Cookies.get("token") && true;

  return (
    <SidebarContainer>
      <NavLink to="/">
        <ListItemStyled>
          <House size={26} />
          <span>Home</span>
        </ListItemStyled>
      </NavLink>

      <NavLink to="/clients">
        <ListItemStyled>
          <UserCircle size={26} />
          <span>Clientes</span>
        </ListItemStyled>
      </NavLink>

      <NavLink to="/">
        <ListItemStyled>
          <Graph size={26} />
          <span>Dashboards</span>
        </ListItemStyled>
      </NavLink>
      {tokenValid ? (
        <NavLink to="/admin/login">
          <ListItemStyled>
            <SignOut size={26} />
            <span>Quit</span>
          </ListItemStyled>
        </NavLink>
      ) : (
        <NavLink to="/admin/login">
          <ListItemStyled>
            <SignIn size={26} />
            <span>Login</span>
          </ListItemStyled>
        </NavLink>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
