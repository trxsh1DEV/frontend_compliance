import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import { initKeycloak } from "./config/keycloakConf.ts";

async () => {
  try {
    await initKeycloak();
    render(<App />, document.getElementById("app")!);
  } catch (error) {
    console.error("Erro durante a inicialização do Keycloak:", error);
  }
};
