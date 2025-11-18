import { Navigate, Outlet } from "react-router";
import { getUserId } from "../utils/auth-storage";

export function PrivateRoute() {
  const isAuth = getUserId();

  if (!isAuth) {
    alert("로그인을 먼저 진행해주세요");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
