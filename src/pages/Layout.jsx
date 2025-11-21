import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="h-[84.5vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
