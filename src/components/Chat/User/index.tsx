import React from "react";
import * as S from "./style";
import logo from "../../../assets/Image/signinImg.svg";
function User() {
  return (
    <>
      <S.UserWrap>
        <S.UserImg src={logo} alt=""></S.UserImg>
        <S.UserInfo>
          <S.UserName>김예림</S.UserName>
          <S.UserDetail>
            <p>17세 | 여자</p>
            <S.UserTag>관계</S.UserTag>
          </S.UserDetail>
        </S.UserInfo>
      </S.UserWrap>
    </>
  );
}

export default User;
