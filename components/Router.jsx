import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from"../pages/Home.jsx"
import Login from"../pages/Home.jsx"
import Layout from "../pages/Layout.jsx";

import{Link} from"react-router-dom";
import { useState } from "react";
function Router(){
  

    return(<BrowserRouter>
        <Routes>
        <Route path="/register"element={<Layout><Register/></Layout>}/>
        <Route path="/home"element={<Layout><Home/></Layout>}/>
        <Route path="/login"element={<Layout><Login/></Layout>}/>


        </Routes>
        </BrowserRouter>)
}
export default Router;