import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/mainpages/auth/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;