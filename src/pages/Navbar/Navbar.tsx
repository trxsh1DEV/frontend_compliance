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
import { useContext, useEffect, useState } from "preact/hooks";
import { UserContext } from "../../Context/UserContext";
import { requestWithToken } from "../../utils/requestApi";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [tokenValid, setToken] = useState<string | undefined>("");
  const { user, setUser } = useContext(UserContext);

  const signOut = () => {
    Cookies.remove("token");
    location.href = "/admin/login";
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      setToken(Cookies.get("token"));
      findUserLogged();
    }
  }, []);

  const findUserLogged = async () => {
    try {
      const response = await requestWithToken.get("/clients/");
      setUser(response.data);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <SidebarContainer>
      <NavLink to="/">
        <ListItemStyled>
          <House size={32} />
          <Span>Home</Span>
        </ListItemStyled>
      </NavLink>

      <NavLink to="/clients">
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
      {tokenValid ? (
        <>
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
      ) : (
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
