import React from "react";
import styled from "styled-components";

function User() {
  return (
    <>
          <UserWrap>
              <UserImg src ></UserImg>
        <UserName>김예림</UserName>
        <UserDetail>
          <p>17세 | 여자</p>
          <UserTag>관계</UserTag>
        </UserDetail>
      </UserWrap>
    </>
  );
}

const UserWrap = styled.div`
  width: 20vw;
  height: 10vh;

  background-color: #ffffff;
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  p {
    font-family: "pretendard";
    font-size: 1.2em;
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

  margin-left: 5vw;
`;

const UserName = styled.div`
  font-family: Pretendard;
  font-size: 1.5rem;
  color: black;
`;

const UserImg = styled.image`
  border-radius: 100%;
`;

export default User;
