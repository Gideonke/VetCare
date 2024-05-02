import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";

import Layout from "../pages/Layout.jsx";

import { Link } from "react-router-dom";
import { useState } from "react";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />




              </Routes>
    </BrowserRouter>
  );
}
export default Router;
