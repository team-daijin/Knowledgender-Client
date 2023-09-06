import React from "react";
import * as H from "./header.style";
import logo from "../../assets/image/logo.svg";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  return (
    <>
      <H.HeaderWrap>
        <img src={logo} alt=""></img>
        <H.NavTextWrap>
          <H.NavText
            onClick={() => {
              navigate("/writing");
            }}
          >
            게시물 작성
          </H.NavText>
          <H.NavText
            onClick={() => {
              navigate("/counseling");
            }}
          >
            상담소 등록
          </H.NavText>
          <H.NavText
            onClick={() => {
              navigate("/chat");
            }}
          >
            채팅 상담
          </H.NavText>
        </H.NavTextWrap>
      </H.HeaderWrap>
    </>
  );
}

export default Header;
