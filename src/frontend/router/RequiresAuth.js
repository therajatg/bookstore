import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/index";

export function RequiresAuth({ children }) {
  const {
    authState: { token },
  } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
