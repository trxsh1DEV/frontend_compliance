import { Navigate } from "react-router-dom";
import UserService from "../../config/keycloakConf";

export const PrivateRoute = ({ element }: any) => {
  return UserService.isLoggedIn() ? element : UserService.doLogin();
};

export const AdminRoute = ({ element }: any) => {
  // Verifica se o usuário está autenticado e tem a role de admin
  const isAuthenticatedAdmin = UserService.isLoggedIn()
    ? UserService.hasRole(["app-admin"])
    : UserService.doLogin();

  return isAuthenticatedAdmin ? element : <Navigate to="/unauthorized" />;
};
