import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import { initKeycloak } from "./config/keycloakConf.ts";

async function initializeApp() {
  await initKeycloak();
  render(<App />, document.getElementById("app")!);
}

initializeApp();
