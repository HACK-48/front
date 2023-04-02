import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = () => {
  const { auth } = useContext(AuthContext);
  if (auth === null) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;
