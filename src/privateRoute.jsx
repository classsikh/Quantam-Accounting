import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust path as per your folder structure

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
