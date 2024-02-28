import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { AppContainer, MainContent } from "./styles/mainStyles";
// import About from "./pages/About";

import Clients from "./pages/Clients/Clients";
import Client from "./pages/Clients/Client";
import DetailsCompliance from "./components/Compliance/DetailsCompliance";
import UnauthorizedPage from "./pages/Err/Unhatorized";
import NotFoundPage from "./pages/Err/NotFound";
import Profile from "./pages/Profile/Profile";
import Compliance from "./pages/Compliance/Compliance";
import Infrastructure from "./pages/Infrastructure/Infrastructure";
import KickOff from "./pages/KickOff/KickOff";
import Runbook from "./pages/Runbook/Runbook";
import Inventory from "./pages/Inventory/Inventory";
import Agreement from "./pages/Agreement/Agreement";
import ServiceLevelAgreement from "./pages/SLA/ServiceLevelAgreement";
import AddCompliance from "./components/MultiStep/NextStep";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import { AdminRoute, PrivateRoute } from "./utils/auth/redirects";
import Sidebar from "./components/Sidebar/Sidebar";
import { isAuthenticated } from "./config/tokenMethods";
// import { ReactKeycloakProvider } from "@react-keycloak/web";
// <ReactKeycloakProvider />

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ToastContainer autoClose={2000} theme="dark" />
          <AppContainer>
            {/* <DecodedProvider> */}
            {isAuthenticated() && <Sidebar />}
            <MainContent>
              <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/unathorized" element={<UnauthorizedPage />} />

                <Route path="/" element={<AdminRoute element={<Home />} />} />
                <Route
                  path="/myprofile"
                  element={<PrivateRoute element={<Profile />} />}
                />
                <Route
                  path="/compliance"
                  element={<PrivateRoute element={<Compliance />} />}
                />
                <Route
                  path="/infrastructure"
                  element={<PrivateRoute element={<Infrastructure />} />}
                />
                <Route
                  path="/kickoff"
                  element={<PrivateRoute element={<KickOff />} />}
                />
                <Route
                  path="/runbook"
                  element={<PrivateRoute element={<Runbook />} />}
                />
                <Route
                  path="/agreement"
                  element={<PrivateRoute element={<Agreement />} />}
                />
                <Route
                  path="/sla"
                  element={<PrivateRoute element={<ServiceLevelAgreement />} />}
                />
                <Route
                  path="/inventory"
                  element={<PrivateRoute element={<Inventory />} />}
                />

                <Route
                  path="/admin/clients/:id"
                  element={<PrivateRoute element={<Client />} />}
                />
                <Route
                  path="/admin/clients/register"
                  element={<AdminRoute element={<Register />} />}
                />
                <Route
                  path="/admin/clients"
                  element={<AdminRoute element={<Clients />} />}
                />
                <Route
                  path="/admin/clients/:id/details"
                  element={<PrivateRoute element={<DetailsCompliance />} />}
                />
                <Route
                  path="/compliance/add"
                  element={<PrivateRoute element={<AddCompliance />} />}
                />
              </Routes>
            </MainContent>
          </AppContainer>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
