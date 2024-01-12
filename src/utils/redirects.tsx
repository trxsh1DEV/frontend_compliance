import { Navigate } from "react-router-dom";
import { useDecoded } from "../Context/TokenContext";
import Cookies from "js-cookie";

export const isAuthenticated = () => !!Cookies.get("token");

export const AdminRoute = ({ element }: any) => {
  const { decoded } = useDecoded();

  // Verifica se o usuário está autenticado e é um admin
  const isAuthenticatedAdmin = decoded?.id && decoded.isAdmin;

  return isAuthenticatedAdmin ? element : <Navigate to="/unathorized" />;
};

// Componente para rotas privadas
export const PrivateRoute = ({ element, ...rest }: any) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate
      to="/admin/login"
      replace
      state={{ from: rest?.location?.pathname }}
    />
  );
};
