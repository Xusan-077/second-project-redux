import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/userSlice";
import { toast } from "react-toastify";
import { useState } from "react";

export default function LeftComponenta() {
  const [Logout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlelogout() {
    toast.success("tizimdan muaffaqiyatli chiqildi");

    setLogout(false);

    setTimeout(() => {
      dispatch(logout());
      navigate("/");
    }, 1000);
  }

  return (
    <div className="bg-gray-800 p-[25px] h-screen -z-10">
      {Logout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[400px] rounded-lg p-6 relative">
            <div className="flex justify-end">
              <button
                onClick={() => setLogout(false)}
                className="text-gray-500 text-[25px] cursor-pointer hover:text-gray-700 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <h2 className="text-[26px] font-semibold mb-4 text-gray-700 text-center">
              Are you sure you want to log out?
            </h2>

            <div className="flex justify-end">
              <div className="flex justify-end w-[200px]  gap-4 mt-6">
                <button
                  onClick={() => setLogout(false)}
                  className="flex-1 bg-gray-300 text-gray-700 p-3 cursor-pointer rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handlelogout}
                  className="flex-1 bg-red-500 text-white cursor-pointer p-3 rounded-lg hover:bg-red-600 transition"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-[30px]">
        <h4 className="text-white text-[30px]">NavBar</h4>
      </div>
      <div className="">
        <ul className="">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                `text-[20px] hover:bg-gray-400 mb-[5px] rounded-lg transition-all text-left text-white p-[15px_0_15px_40px] w-full block ${
                  isActive ? "bg-gray-400" : ""
                }`
              }
              to="dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                `text-[20px] hover:bg-gray-400 mb-[5px] rounded-lg transition-all text-left text-white p-[15px_0_15px_40px] w-full block ${
                  isActive ? "bg-gray-400" : ""
                }`
              }
              to="todos"
            >
              ToDos
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                `text-[20px] hover:bg-gray-400 mb-[5px] rounded-lg transition-all text-left text-white p-[15px_0_15px_40px] w-full block ${
                  isActive ? "bg-gray-400" : ""
                }`
              }
              to="products"
            >
              Products
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                `text-[20px] hover:bg-gray-400 mb-[5px] rounded-lg transition-all text-left text-white p-[15px_0_15px_40px] w-full block ${
                  isActive ? "bg-gray-400" : ""
                }`
              }
              to="settings"
            >
              Setting
            </NavLink>
          </li>
          <li className="">
            <button
              className={`text-[20px] hover:bg-gray-400 mb-[5px] rounded-lg transition-all text-left text-white p-[15px_0_15px_40px] w-full block `}
              onClick={() => setLogout(true)}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
