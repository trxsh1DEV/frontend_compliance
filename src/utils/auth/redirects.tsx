import { Navigate } from "react-router-dom";
import { hasRole, isAuthenticated } from "../../config/tokenMethods";

export const PrivateRoute = ({ element }: any) => {
  return isAuthenticated() && element;
};

export const AdminRoute = ({ element }: any) => {
  // Verifica se o usuário está autenticado e tem a role de admin
  const isAuthenticatedAdmin = hasRole("app-user");

  return isAuthenticatedAdmin ? element : <Navigate to="/unathorized" />;
};
