import { Navigate } from "react-router";
import { useAuth } from "../contexts/Auth/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/ingresar" />;

  return children;
};

export default ProtectedRoute;
