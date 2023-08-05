import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "../pages/signin.tsx";
import WritingPage from "../components/writing/writng.tsx";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/writing" element={<WritingPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
