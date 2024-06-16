import React from "react";
import * as S from "./signup.style.tsx";
import Logo from "../../assets/image/signupLogo.svg";
import Image from "../../assets/image/signinImg.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/CustomAxios";

interface Register {
  accountId: String;
  email: String;
  password: String;
  name: String;
  age: String;
  gender: String;
}

const { SigninCustomAxios } = api();

function Signup({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();

  const [register, setRegister] = useState<Register>({
    accountId: "",
    email: "",
    password: "",
    name: "",
    age: "",
    gender: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const res = await SigninCustomAxios.post("/user/signup", {
        accountId: register.accountId,
        email: register.email,
        password: register.password,
        name: register.name,
        age: register.age,
        gender: register.gender,
      });
      console.log("서버 응답:", res);
      alert("회원가입에 성공하셨습니다");
      console.log(register);
      navigate("/signin");
    } catch (error) {
      alert("회원가입 실패");
      console.error("회원가입 실패:", error);
    }
    console.log(register);
  };
  const ages = [];
  for (let i = 0; i <= 100; i++) {
    ages.push(i);
  }
  return (
    <>
      <S.SignupPageWrap>
        <S.SignupWrap>
          <S.InputWrap>
            <img src={Logo} alt=""></img>
            <S.SignupTitleWrap>
              <S.SignupTitle>회원가입</S.SignupTitle>
              <S.SignupSubtitle>
                회원가입을 위해 필요한 정보를 입력해주세요
              </S.SignupSubtitle>
            </S.SignupTitleWrap>
            <S.InputComponent>
              <S.InputText>아이디</S.InputText>
              <S.Input
                placeholder="아이디를 입력해주세요"
                name="accountId"
                type="text"
                onChange={(e) => {
                  onChange(e);
                }}
              ></S.Input>
              {/* <S.InputErrorText>동일한 아이디가 존재합니다</S.InputErrorText> */}
            </S.InputComponent>
            <S.InputComponent>
              <S.InputText>비밀번호</S.InputText>
              <S.Input
                placeholder="비밀번호를 입력해주세요"
                name="password"
                type="password"
                onChange={(e) => {
                  onChange(e);
                }}
              ></S.Input>
            </S.InputComponent>
            <S.InputComponent>
              <S.InputText>이메일</S.InputText>
              <S.Input
                placeholder="이메일을 입력해주세요"
                name="email"
                type="text"
                onChange={(e) => {
                  onChange(e);
                }}
              ></S.Input>
            </S.InputComponent>
            <S.InputComponent>
              <S.InputText>이름</S.InputText>
              <S.Input
                placeholder="이름을 입력해주세요"
                name="name"
                type="text"
                onChange={(e) => {
                  onChange(e);
                }}
              ></S.Input>
            </S.InputComponent>
            <S.SelectComponent>
              <S.InputComponent>
                <S.InputText>나이</S.InputText>
                <S.Select
                  name="age"
                  onChange={(e) => {
                    onChange(e);
                  }}
                >
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      만 {age}세
                    </option>
                  ))}
                </S.Select>
              </S.InputComponent>
              <S.InputComponent>
                <S.InputText>성별</S.InputText>
                <S.Select
                  name="gender"
                  onChange={(e) => {
                    onChange(e);
                  }}
                >
                  <option value="FEMALE">여자</option>
                  <option value="MALE">남자</option>
                </S.Select>
              </S.InputComponent>
            </S.SelectComponent>

            <S.ButtonWrap>
              <S.SigninButton onClick={onSubmit}>회원가입</S.SigninButton>
            </S.ButtonWrap>
          </S.InputWrap>
          <img src={Image} alt="Sigup Image Error" />
        </S.SignupWrap>
      </S.SignupPageWrap>
    </>
  );
}
export default Signup;
