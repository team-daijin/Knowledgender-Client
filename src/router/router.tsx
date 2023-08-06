import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "../pages/signin.tsx";
import WritingPage from "../pages/writing.tsx";
import SignupPage from "../pages/signup.tsx";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
