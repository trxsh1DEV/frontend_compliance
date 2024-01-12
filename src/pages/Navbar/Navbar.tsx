// Sidebar.js
import {
  House,
  UsersThree,
  Graph,
  SignIn,
  SignOut,
  UserCircleGear,
} from "phosphor-react";
import { SidebarContainer, ListItemStyled, NavLink, Span } from "./styled";
import Cookies from "js-cookie";
import { useDecoded } from "../../Context/TokenContext";
// import { useEffect } from "preact/hooks";
// import { useDecoded } from "../../Context/TokenContext";

const Sidebar = () => {
  const tokenValid = Cookies.get("token");
  const { decoded, updateDecoded } = useDecoded();

  const signOut = () => {
    Cookies.remove("token");
    updateDecoded();
    location.href = "/login";
  };

  return (
    <SidebarContainer>
      <NavLink to="/">
        <ListItemStyled>
          <House size={32} />
          <Span>Home</Span>
        </ListItemStyled>
      </NavLink>

      {decoded?.isAdmin && (
        <>
          <NavLink to="/clients/show">
            <ListItemStyled>
              <UsersThree size={32} />
              <Span>Clientes</Span>
            </ListItemStyled>
          </NavLink>

          <NavLink to="/">
            <ListItemStyled>
              <Graph size={32} />
              <Span>Dashboards</Span>
            </ListItemStyled>
          </NavLink>
          <NavLink>
            <ListItemStyled>
              <UserCircleGear size={32} />
              <Span>Meu perfil</Span>
            </ListItemStyled>
          </NavLink>
          <NavLink onClick={signOut}>
            <ListItemStyled>
              <SignOut size={32} />
              <Span>Quit</Span>
            </ListItemStyled>
          </NavLink>
        </>
      )}

      {decoded?.id && !decoded?.isAdmin && (
        <>
          <NavLink>
            <ListItemStyled>
              <UserCircleGear size={32} />
              <Span>Pontuação</Span>
            </ListItemStyled>
          </NavLink>
          <NavLink>
            <ListItemStyled>
              <UserCircleGear size={32} />
              <Span>Meu perfil</Span>
            </ListItemStyled>
          </NavLink>
          <NavLink onClick={signOut}>
            <ListItemStyled>
              <SignOut size={32} />
              <Span>Quit</Span>
            </ListItemStyled>
          </NavLink>
        </>
      )}

      {!tokenValid && (
        <NavLink to="/admin/login">
          <ListItemStyled>
            <SignIn size={32} />
            <Span>Login</Span>
          </ListItemStyled>
        </NavLink>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
