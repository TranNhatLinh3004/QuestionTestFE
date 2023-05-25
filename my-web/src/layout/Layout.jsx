import React from "react";
import Footer from "../components/footer/Footer";
import Routers from "../routers/Routers";
import Sidebar from "../components/sidebar/Sidebar";

function Layout(props) {
  return (
    <>
      <Sidebar />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
