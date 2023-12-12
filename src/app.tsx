import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
// import AddCompliance from "./components/AddCompliance/addCompliance-bkp";
import AddComplianceTest from "./components/AddCompliance/Add";
import InputPage from "./components/Input/Input";
import { ThemeProvider } from "styled-components";
// import './app.css'

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AddComplianceTest />} />
            <Route path="/test" element={<InputPage />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
