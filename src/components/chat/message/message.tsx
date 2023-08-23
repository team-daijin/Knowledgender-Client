import React from "react";
import styled from "styled-components";
import logo from "../../../assets/image/signinImg.svg";
function Message() {
  return (
    <>
      <ChatWrap>
        <MessageWrap>안녕하세요ddd</MessageWrap>
        <ProfileWrap>
          <ProfileImg src={logo} alt=""></ProfileImg>
          <ProfileName>김예림</ProfileName>
        </ProfileWrap>
      </ChatWrap>
    </>
  );
}

const ChatWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MessageWrap = styled.div`
  background-color: #f8f8f8;
  border-color: #f2f2f2;
  border-style: solid;
  width: auto;

  display: inline-block;
  padding: 0.8rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  border-radius: 10rem;

  font-family: "pretendard";
`;

const ProfileWrap = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.4%;
`;
const ProfileImg = styled.img`
  border-radius: 100%;
  width: 3rem;
`;

const ProfileName = styled.div`
  font-size: 1rem;
  font-style: "pretendard";
`;

export default Message;
