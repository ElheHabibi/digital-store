import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

function PrivateRoute() {
  const { isLogin } = useAuthContext();
  return <div>{isLogin ? <Outlet /> : <Navigate to="/login" />}</div>;
}

export default PrivateRoute;
