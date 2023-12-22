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

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ToastContainer autoClose={2000} theme="dark" />
          <AppContainer>
            <Sidebar />
            <MainContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compliance/add" element={<AddCompliance />} />
                <Route path="/register" element={<Register />} />
                <Route path="/clients/:id" element={<Client />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/admin/login" element={<Login />} />
              </Routes>
            </MainContent>
          </AppContainer>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
