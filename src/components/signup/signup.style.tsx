import styled from "styled-components";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

interface ErrorProps {
  color?: string;
  text: string;
}

export const SignupPageWrap = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupWrap = styled.div`
  width: 60vw;
  height: 75vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SignupTitleWrap = styled.div`
  height: 4em;
`;
export const SignupTitle = styled.div`
  font-size: 1.5em;
  font-family: "pretendard";
  font-weight: 600;
`;
export const SignupSubtitle = styled.div`
  font-size: 1em;
  font-family: "pretendard";
  font-weight: 400;
`;

export const InputWrap = styled.div`
  height: 70vh;
  width: 35vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Input = styled.input<InputProps>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
  width: 20vw;
  &:focus {
    border-color: #7b39d1;
  }
`;
export const SigninButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  font-family: "pretendard";
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 22.6vw;
  height: 5vh;

  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return `
          background-color: #BE8EFC;
          color: #333;
        `;
      default:
        return `
          background-color:#BE8EFC;
          color: #fff;
        `;
    }
  }}

  &:hover {
    background-color: ${({ variant }) =>
      variant === "secondary" ? "#BE8EFC" : "#7B39D1"};
  }
`;

export const SignupButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  font-family: "pretendard";
  border-radius: 5px;
  border-style: solid;
  cursor: pointer;
  transition: border-color 0.2s;
  width: 21vw;
  height: 5vh;
  background-color: white;
  color: #72777a;

  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return `
          border-color: #DBBFFF;
            color: #72777a;
        `;
      default:
        return `
          border-color:#DBBFFF;
            color: #72777a;
        `;
    }
  }}

  &:hover {
    border-color: ${({ variant }) =>
      variant === "secondary" ? "#7B39D1" : "#7B39D1"};
  }
`;

export const InputComponent = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 5%;
`;

export const SelectComponent = styled.div`
  display: flex;
`;

export const InputText = styled.div`
  font-family: "pretendard";
  color: #72777a; // 회색
  font-size: 1.2em;
`;
export const InputErrorText = styled.div`
  font-family: "pretendard";
  color: #f1281c; // 빨강
`;

export const ButtonWrap = styled.div`
  height: 12vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 5%;
`;
export const Select = styled.select`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 10.75vw;
  font-family: "pretendard";
`;
