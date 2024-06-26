import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home.jsx";

import Layout from "../../pages/Layout.jsx";

import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../../pages/Login.jsx";
import Register from "../../pages/Register.jsx";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
