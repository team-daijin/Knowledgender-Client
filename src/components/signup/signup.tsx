import React from "react";
import * as S from "./signup.style.tsx";
import Logo from "../../assets/image/signupLogo.svg";
import Image from "../../assets/image/signinImg.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/customAxios.tsx";
enum job {
  DOCTER,
  COUNSELOR,
  PHARMACIST,
  ETC,
}

interface Register {
  accountId: String;
  password: String;
  name: String;
  job: job;
}

function Signup({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();

  const [register, setRegister] = useState<Register>({
    accountId: "",
    password: "",
    name: "",
    job: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmit = () => {
    api
      .post("/api/auth/export/register", {
        accountId: register.accountId,
        password: register.password,
        name: register.name,
        job: register.job,
      })
      .then((res: any) => {
        alert("회원가입에 성공하셨습니다 ");
        console.log(register);
        navigate("/signin");
      })
      .catch(() => {
        alert("회원가입 실패");
      });
  };
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
                onChange={onChange}
              ></S.Input>
              <S.InputErrorText>동일한 아이디가 존재합니다</S.InputErrorText>
            </S.InputComponent>
            <S.InputComponent>
              <S.InputText>비밀번호</S.InputText>
              <S.Input
                placeholder="비밀번호를 입력해주세요"
                name="password"
                type="password"
                onChange={onChange}
              ></S.Input>
            </S.InputComponent>
            <S.InputComponent>
              <S.InputText>이름</S.InputText>
              <S.Input
                placeholder="이름을 입력해주세요"
                name="name"
                type="text"
                onChange={onChange}
              ></S.Input>
            </S.InputComponent>
            <S.InputComponent>
              <S.InputText>직업</S.InputText>
              <S.Select
                name="job"
                type="text"
                //@ts-expect-error
                onChange={onChange}
              >
                <option value="의사">의사</option>
                <option value="상담사">상담사</option>
                <option value="약사">약사</option>
                <option value="성교육전문가">성교육전문가</option>
              </S.Select>
            </S.InputComponent>
            <S.ButtonWrap>
              <S.SigninButton onClick={onSubmit}>회원가입</S.SigninButton>
            </S.ButtonWrap>
          </S.InputWrap>
          {/* <S.Image src={Image} alt=""></S.Image> */}
          <img src={Image} alt=""></img>
        </S.SignupWrap>
      </S.SignupPageWrap>
    </>
  );
}

export default Signup;
