import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar/Navbar";
import ModalsProvider from "src/providers/ModalsProvider";
import ToasterProvider from "src/providers/ToasterProvider";

export default function RootLayout() {
  return (
    <>
      <ToasterProvider />

      <Navbar />

      <ModalsProvider />

      <div style={{ paddingTop: "125px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
