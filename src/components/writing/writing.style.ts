import { type } from "os";
import styled from "styled-components";

export const logoImg = styled.div`
  margin-top: 2%;
  margin-left: 3.2%;
`;

export const topIntroBox = styled.div`
  display: flex;
`;

export const titleBox = styled.div`
  margin-top: 1.6%;
  margin-bottom: 0.8%;
  margin-left: 12.5%;
`;

export const title1 = styled.h1`
  color: var(--text-black-darkest, #090a0a);
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const title2 = styled.h1`
  color: var(--text-black-dark, #303437);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -8%;
`;

export const mainContainerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const mainContainerBox = styled.div`
  border-radius: 8px;
  background: #faf5ff;
  width: 45%;
  height: 660px;
  flex-shrink: 0;
  text-align: center;
`;

export const inputContentTitle = styled.h5`
  color: #434244;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.8px;
  margin-left: -76%;
`;

export const inputContentBox = styled.input`
  margin-top: -4%;
  margin-bottom: 3%;
  width: 80%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #d8dae0;
  background: #fff;
  padding-left: 2%;
  outline-color: var(--main-purple-darkest, #6823c2);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
  ::placeholder {
    color: gray;
  }
`;

export const selectContentBox = styled.select`
  margin-top: -4%;
  margin-bottom: 3%;
  width: 83%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #d8dae0;
  background: #fff;
  padding-left: 2%;
  outline-color: var(--main-purple-darkest, #6823c2);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
  ::placeholder {
    color: gray;
  }
`;

export const textareaContentBox = styled.textarea`
  margin-top: -2%;
  margin-bottom: 3%;
  width: 81%;
  height: 200px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #d8dae0;
  background: #fff;
  padding-left: 2%;
  padding-top: 2%;
  outline-color: var(--main-purple-darkest, #6823c2);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
  resize: none;
  ::placeholder {
    color: gray;
  }
`;

export const fileContentBoxLabel = styled.label`
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #d8dae0;
  color: gray;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  margin-left: -69.5%;

  background-color: ${(props) => (props.isExistence ? "#7B39D1" : "#F0F0F0")};
  color: ${(props) => (props.isExistence ? "white" : "gray")};
`;

export const fileContentBoxInput = styled.input`
  display: none;
`;

export const buttonContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const submitBnt = styled.button`
  margin-top: 1%;
  width: 25%;
  padding: 14px 14px 14px 18px;
  gap: 12px;
  border-radius: 6px;
  border: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  background-color: ${(props) => (props.isActivate ? "#6823c2" : "#F0F0F0")};
  color: ${(props) => (props.isActivate ? "white" : "gray")};
`;
