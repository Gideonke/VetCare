import Footer from "../components/Footer";
import { useState } from "react";
function Layout() {

  return (
    <div>
      <Nav/>
      <main className="flex min-h-[100vh] flex-col ">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout