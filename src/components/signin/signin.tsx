import React, { useState } from "react";
import * as S from "./signin.style.ts";
import Image from "../../assets/image/signinImg.svg";
import Logo from "../../assets/image/signinLogo.svg";
import api from "../../api/customAxios.tsx";
import { useNavigate } from "react-router-dom";

interface User {
  accountId: String;
  password: String;
}

function Signin({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    accountId: "",
    password: "",
  });

  const onSubmit = () => {
    api
      .post("/api/auth/login", {
        accountId: user.accountId,
        password: user.password,
      })
      .then((res: any) => {
        alert("로그인에 성공하셨습니다");
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
      })
      .catch(() => {
        alert("로그인 실패");
      });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <S.SigninPageWrap>
        <S.SigninWrap>
          <S.InputWrap>
            <img src={Logo} alt="" height={"10%"}></img>
            <S.InputComponent>
              <S.InputText>아이디</S.InputText>
              <S.Input
                placeholder="아이디를 입력해주세요"
                name="accountId"
                type="text"
                onChange={onChange}
              ></S.Input>
              <S.InputErrorText>
                아이디 또는 비밀번호가 잘못되었습니다.
              </S.InputErrorText>
            </S.InputComponent>
            <S.InputComponent>
              <S.InputText>비밀번호</S.InputText>
              <S.Input
                placeholder="비밀번호를 입력해주세요"
                name="password"
                type="password"
                onChange={onChange}
              ></S.Input>
              <S.InputErrorText>
                아이디 또는 비밀번호가 잘못되었습니다.
              </S.InputErrorText>
            </S.InputComponent>
            <S.ButtonWrap>
              <S.SigninButton onClick={onSubmit}>로그인</S.SigninButton>
              <S.SignupButton
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </S.SignupButton>
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
