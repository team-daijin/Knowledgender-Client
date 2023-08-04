import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "../pages/signin.tsx";
import SignupPage from "../pages/signup.tsx";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
