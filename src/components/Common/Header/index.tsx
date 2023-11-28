import React from "react";
import * as H from "./style";
import logo from "../../../assets/Image/logo.svg";
import { useNavigate } from "react-router-dom";

const navItems = [
  { text: "게시물 작성", path: "/writing" },
  { text: "상담소 등록", path: "/counseling" },
  { text: "마이페이지", path: "/myPage" },
  // { text: "채팅 상담", path: "/chat" },
];

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <H.HeaderWrap>
        <img
          src={logo}
          alt="error"
          style={{ width: "120px" }}
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <H.NavTextWrap>
          {navItems.map((item, index) => (
            <H.NavText key={index} onClick={() => navigate(item.path)}>
              {item.text}
            </H.NavText>
          ))}
        </H.NavTextWrap>
      </H.HeaderWrap>
    </>
  );
}

export default Header;
