import { Route, Routes } from "react-router-dom";
import ToDo from "./pages/ToDo";
// import Crud from "./pages/Crud";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { Provider } from "react-redux";

import store from "./store";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Private from "./components/Private";
import PrivateLayout from "./pages/PrivateLayout";
import Settings from "./pages/Settings";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import PrivateToDo from "./components/PrivateToDo";
import PrivateProducts from "./components/PrivateProducts";

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<ToDo />} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route path="/profile" element={<Private />}>
          <Route element={<PrivateLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<PrivateProducts />} />
            <Route path="todos" element={<PrivateToDo />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
}
