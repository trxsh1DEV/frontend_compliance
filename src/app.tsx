import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
// import InputPage from "./components/Input/Input";
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
import Cookies from "js-cookie";
import UserContext from "./Context/UserContext";
import DetailsCompliance from "./components/Compliance/DetailsCompliance";

export function App() {
  const user = Cookies.get("token");
  // console.log(user);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ToastContainer autoClose={2000} theme="dark" />
          <AppContainer>
            <UserContext>
              <Sidebar />
              <MainContent>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/compliance/add" element={<AddCompliance />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/clients/:id" element={<Client />} />
                  <Route
                    path="/clients/:id/details"
                    element={<DetailsCompliance />}
                  />
                  <Route
                    path="/clients"
                    element={user ? <Clients /> : <Login />}
                  />
                  <Route path="/admin/login" element={<Login />} />
                </Routes>
              </MainContent>
            </UserContext>
          </AppContainer>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
