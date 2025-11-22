import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
  const { isAuth, userAction } = useSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
