import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
// import InputPage from "./components/Input/Input";
import { ThemeProvider } from "styled-components";
import AddCompliance from "./components/MultiStep/NextStep";
import MultiStepForm from "./Context/FormContext";
// import './app.css'

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AddCompliance />} />
            <Route path="/test" element={<MultiStepForm />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
