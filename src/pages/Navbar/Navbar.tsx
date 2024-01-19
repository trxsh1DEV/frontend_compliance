// Sidebar.js
import {
  House,
  UsersThree,
  Graph,
  SignOut,
  UserCircleGear,
  SquaresFour,
} from "phosphor-react";
import { SidebarContainer, ListItemStyled, NavLink, Span } from "./styled";
import Cookies from "js-cookie";
import { useDecoded } from "../../Context/TokenContext";

const Sidebar = () => {
  const { decoded } = useDecoded();

  const signOut = () => {
    Cookies.remove("token");
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
          <NavLink to="/admin/clients">
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
        </>
      )}

      {decoded?.id && !decoded?.isAdmin && (
        <>
          <NavLink to="/compliance">
            <ListItemStyled>
              <SquaresFour size={32} />
              <Span>Maturidade</Span>
            </ListItemStyled>
          </NavLink>
        </>
      )}
      <NavLink to="/myprofile">
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
    </SidebarContainer>
  );
};

export default Sidebar;
