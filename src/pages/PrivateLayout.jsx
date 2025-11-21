import { Outlet } from "react-router-dom";
import LeftComponenta from "../components/LeftComponenta";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivateLayout() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-[250px] z-1">
        <LeftComponenta />
      </div>
      <div className=" ml-[250px] w-[80vw] p-[0_20px]">
        <div className=" mt-[50px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
