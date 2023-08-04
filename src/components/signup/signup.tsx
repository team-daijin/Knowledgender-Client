import React from "react";
import * as S from "./signup.style.ts";
import Image from "../../assets/image/signinImg.svg";
import Logo from "../../assets/image/signinLogo.svg";
function Signup({ children }: React.PropsWithChildren) {
  return (
    <>
      <S.SigninPageWrap>
        <S.SigninWrap>
          <S.InputWrap>
            <img src={Logo} alt="" height={"10%"}></img>
            <S.InputComponent>
              <S.InputText>아이디</S.InputText>
              <S.Input placeholder="아이디를 입력해주세요"></S.Input>
              <S.InputErrorText>
                아이디 또는 비밀번호가 잘못되었습니다.
              </S.InputErrorText>
            </S.InputComponent>
            <S.InputComponent>
              <S.InputText>비밀번호</S.InputText>
              <S.Input placeholder="비밀번호를 입력해주세요"></S.Input>
              <S.InputErrorText>
                아이디 또는 비밀번호가 잘못되었습니다
              </S.InputErrorText>
            </S.InputComponent>
            <S.ButtonWrap>
              <S.SigninButton>로그인</S.SigninButton>
              <S.SignupButton>회원가입</S.SignupButton>
            </S.ButtonWrap>
          </S.InputWrap>
          {/* <S.Image src={Image} alt=""></S.Image> */}
          <img src={Image} alt=""></img>
        </S.SigninWrap>
      </S.SigninPageWrap>
    </>
  );
}

export default Signin;
