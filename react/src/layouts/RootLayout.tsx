import { Outlet } from "react-router-dom";
import Navbar from "src/components/navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />

      <div className="pb-5 pt-28">
        <Outlet />
      </div>
    </>
  );
}
