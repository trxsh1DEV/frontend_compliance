// Sidebar.js
import {
  House,
  UsersThree,
  Graph,
  SignOut,
  UserCircleGear,
  SquaresFour,
  TreeStructure,
  MicrosoftExcelLogo,
  MicrosoftWordLogo,
  DesktopTower,
  Handshake,
  ClockClockwise,
  AppWindow,
} from "phosphor-react";
import {
  SidebarContainer,
  ListItemStyled,
  NavLink,
  Span,
  LinkA,
} from "./styled";
import { hasRole } from "../../config/tokenMethods";
import { keycloakInstance } from "../../config/keycloakConf";

const Sidebar = () => {
  const signOut = () => keycloakInstance?.logout();

  return (
    <SidebarContainer>
      <NavLink to="/">
        <ListItemStyled>
          <House size={32} />
          <Span>Home</Span>
        </ListItemStyled>
      </NavLink>

      {hasRole("app-admin") && (
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
        </>
      )}

      {hasRole("app-user") && !hasRole("app-admin") && (
        <>
          <NavLink to="/compliance">
            <ListItemStyled>
              <SquaresFour size={32} />
              <Span>Maturidade</Span>
            </ListItemStyled>
          </NavLink>

          <NavLink to="/infrastructure">
            <ListItemStyled>
              <TreeStructure size={32} />
              <Span>Infraestrutura</Span>
            </ListItemStyled>
          </NavLink>

          <NavLink to="/kickoff">
            <ListItemStyled>
              <MicrosoftExcelLogo size={32} />
              <Span>Kick Off</Span>
            </ListItemStyled>
          </NavLink>

          <NavLink to="/runbook">
            <ListItemStyled>
              <MicrosoftWordLogo size={32} />
              <Span>Runbook</Span>
            </ListItemStyled>
          </NavLink>

          <NavLink to="/inventory">
            <ListItemStyled>
              <DesktopTower size="32" />
              <Span>Inventário</Span>
            </ListItemStyled>
          </NavLink>

          <NavLink to="/agreement">
            <ListItemStyled>
              <Handshake size="32" />
              <Span>Contrato</Span>
            </ListItemStyled>
          </NavLink>

          <NavLink to="/sla">
            <ListItemStyled>
              <ClockClockwise size="32" />
              <Span>SLA</Span>
            </ListItemStyled>
          </NavLink>

          <LinkA
            href="https://infonova.suport.cloud/login"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemStyled>
              <AppWindow size="32" />
              <Span>Gestor</Span>
            </ListItemStyled>
          </LinkA>

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
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
