import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { login, logout } from "../store/userSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.user);

  console.log("user", user);
  console.log("isAuth", isAuth);

  return (
    <header className="">
      <div className="container">
        <div className="flex items-center justify-between p-[20px_0]">
          <Link to="/" className="text-[25px] cursor-pointer">
            Logo
          </Link>

          <ul className="flex gap-[30px] items-center">
            <li className="">
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/todos"
              >
                ToDos
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/products"
              >
                Products
              </NavLink>
            </li>
          </ul>

          {!isAuth ? (
            <Link
              to="/login"
              className="text-center cursor-pointer p-[5px_0] max-w-[100px] w-full border text-[18px] font-semibold border-blue-500 rounded-lg text-blue-500"
            >
              Log in
            </Link>
          ) : (
            <button
              onClick={() => dispatch(logout())}
              className="cursor-pointer p-[5px_0] max-w-[100px] w-full border text-[18px] font-semibold border-blue-500 rounded-lg text-blue-500"
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
