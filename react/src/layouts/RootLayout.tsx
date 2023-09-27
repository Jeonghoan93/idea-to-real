import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "125px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
