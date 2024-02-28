import { initKeycloak, keycloakInstance } from "./keycloakConf";

export const getToken = async () => {
  try {
    const keycloak = await initKeycloak();
    console.log("oi");
    return keycloak;
  } catch (error) {
    throw error;
  }
};

export const hasRole = (role: string) =>
  keycloakInstance?.realmAccess?.roles?.includes(role);

export const isAuthenticated = () => keycloakInstance?.authenticated;
