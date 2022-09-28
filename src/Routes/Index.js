import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Components/About";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../Navigation/Layout";

const RootRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RootRouter;
