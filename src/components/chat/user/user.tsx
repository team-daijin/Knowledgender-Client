import React from "react";
import styled from "styled-components";
import logo from "../../../assets/image/signinImg.svg";
function User() {
  return (
    <>
      <UserWrap>
        <UserImg src={logo} alt=""></UserImg>
        <UserInfo>
          <UserName>김예림</UserName>
          <UserDetail>
            <p>17세 | 여자</p>
            <UserTag>관계</UserTag>
          </UserDetail>
        </UserInfo>
      </UserWrap>
    </>
  );
}

const UserWrap = styled.div`
  width: 20vw;
  height: 10vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  background-color: #ffffff;
  transition: 500ms;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  p {
    font-family: "pretendard";
    font-size: 1.2em;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const UserTag = styled.div`
  width: 3vw;
  height: 2vh;
  display: flex;
  padding: 0.25rem 0.625rem;
  align-items: center;
  gap: 0.5rem;
  color: #7b39d1;
  font-family: "pretendard";

  border-radius: 50px;
  border: 2px solid var(--main-purple-base, #7b39d1);

  text-align: center;
  justify-content: center;

  margin-left: 4vw;
`;

const UserName = styled.div`
  font-family: Pretendard;
  font-size: 1.4rem;
  color: black;
  font-weight: 600;
`;

const UserImg = styled.img`
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-left: 1vw;
`;
export default User;
