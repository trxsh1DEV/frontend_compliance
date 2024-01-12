import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import AddCompliance from "./components/MultiStep/NextStep";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home/Home";
import Sidebar from "./pages/Navbar/Navbar";
import { AppContainer, MainContent } from "./app";
import Clients from "./pages/Clients/Clients";
import Client from "./pages/Clients/Client";
import DetailsCompliance from "./components/Compliance/DetailsCompliance";
import { AdminRoute, PrivateRoute, isAuthenticated } from "./utils/redirects";
import { DecodedProvider } from "./Context/TokenContext";
import UnauthorizedPage from "./pages/Unhatorized";
import NotFoundPage from "./pages/NotFound";

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
                  <Route
                    path="/"
                    element={<PrivateRoute element={<Home />} />}
                  />

                  {/* <Route
                    path="/clients"
                    element={<PrivateRoute element={<Client />} />}
                  /> */}
                  <Route
                    path="/clients/register"
                    element={<AdminRoute element={<Register />} />}
                  />
                  <Route
                    path="/clients/show"
                    element={<AdminRoute element={<Clients />} />}
                  />
                  <Route
                    path="/clients/show/:id"
                    element={<PrivateRoute element={<Client />} />}
                  />
                  <Route
                    path="/clients/show/:id/details"
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
