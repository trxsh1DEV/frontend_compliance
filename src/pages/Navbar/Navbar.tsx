// Sidebar.js
import {
  House,
  UsersThree,
  Graph,
  SignIn,
  SignOut,
  UserCircleGear,
} from "phosphor-react";
import { SidebarContainer, ListItemStyled, NavLink } from "./styled";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "preact/hooks";
import { UserContext } from "../../Context/UserContext";
import { requestWithToken } from "../../utils/requestApi";

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
    } catch (err) {
      console.log(err);
    }
  };

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
          <UsersThree size={26} />
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
        <>
          <NavLink onClick={signOut}>
            <ListItemStyled>
              <UserCircleGear size={26} />
              <span>Meu perfil</span>
            </ListItemStyled>
          </NavLink>
          <NavLink onClick={signOut}>
            <ListItemStyled>
              <SignOut size={26} />
              <span>Quit</span>
            </ListItemStyled>
          </NavLink>
        </>
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
