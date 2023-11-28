import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "../pages/signin.tsx";
import WritingPage from "../pages/writing.tsx";
import SignupPage from "../pages/signup.tsx";
import Counseling from "../pages/counseling.tsx";
import MyPage from "../pages/myPage.tsx";
// import ChatPage from "../pages/chat.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/myPage" element={<MyPage />} />
        {/* <Route path="/chat" element={<ChatPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
