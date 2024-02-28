import Keycloak from "keycloak-js";
import { TypeKeycloakInstance } from "../types/typesToken";

let keycloakInstance: TypeKeycloakInstance | null = null; // Variável para armazenar a instância do Keycloak

const initKeycloak = async () => {
  try {
    const keycloak: any = new Keycloak({
      url: "https://portalcliente.infonova.com.br:8081/", // URL do Keycloak
      realm: "Demo-Realm",
      clientId: "nodejs-microservice",
    });

    const authenticated = await keycloak.init({
      onLoad: "login-required",
      scope: "openid",
      checkLoginIframe: false,
    });

    if (authenticated) {
      console.log("Usuário autenticado");
      keycloakInstance = keycloak; // Armazena a instância do Keycloak
      return keycloak;
    } else {
      throw new Error("Falha na autenticação do Keycloak");
    }
  } catch (error) {
    console.error("Erro durante a inicialização do Keycloak:", error);
    throw error;
  }
};

export { initKeycloak, keycloakInstance };
