import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import AddCompliance from "./components/MultiStep/NextStep";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { AppContainer, MainContent } from "./styles/mainStyles";
import Clients from "./pages/Clients/Clients";
import Client from "./pages/Clients/Client";
import DetailsCompliance from "./components/Compliance/DetailsCompliance";
import { AdminRoute, PrivateRoute, isAuthenticated } from "./utils/redirects";
import { DecodedProvider } from "./Context/TokenContext";
import UnauthorizedPage from "./pages/Unhatorized";
import NotFoundPage from "./pages/NotFound";
import Profile from "./pages/Profile/Profile";
import Compliance from "./pages/Compliance/Compliance";
import Infrastructure from "./pages/Infrastructure/Infrastructure";
import KickOff from "./pages/KickOff/KickOff";
import Runbook from "./pages/Runbook/Runbook";
import Inventory from "./pages/Inventory/Inventory";
import Agreement from "./pages/Agreement/Agreement";
import ServiceLevelAgreement from "./pages/SLA/ServiceLevelAgreement";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ToastContainer autoClose={2000} theme="dark" />
          <AppContainer>
            <DecodedProvider>
              {isAuthenticated() && <Sidebar />}
              <MainContent>
                <Routes>
                  <Route path="/admin/login" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/unathorized" element={<UnauthorizedPage />} />
                  <Route path="*" element={<NotFoundPage />} />

                  {/* User Commom */}
                  <Route
                    path="/"
                    element={<PrivateRoute element={<Home />} />}
                  />
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
                    element={
                      <PrivateRoute element={<ServiceLevelAgreement />} />
                    }
                  />
                  <Route
                    path="/inventory"
                    element={<PrivateRoute element={<Inventory />} />}
                  />
                  {/*  */}

                  {/* Admin */}
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
            </DecodedProvider>
          </AppContainer>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
