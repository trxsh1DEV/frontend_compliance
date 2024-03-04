import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";
import UserService from "./config/keycloakConf.ts";

// async function initializeApp() {
//   await initKeycloak();
//   render(<App />, document.getElementById("app")!);
// }

// initializeApp();

const renderApp = () =>
  createRoot(document.getElementById("app")!).render(<App />);

UserService.initKeycloak(renderApp);
