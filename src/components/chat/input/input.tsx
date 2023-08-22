import React from "react";
import styled from "styled-components";
import send from "../../../assets/image/send.svg";

function Input() {
  return (
    <>
      <ChatAreaWrap>
        <InputWrap>
          <ChatInput></ChatInput>
          <SendBtn>
            <img src={send} alt="" style={{ width: 30 }}></img>
          </SendBtn>
        </InputWrap>
      </ChatAreaWrap>
    </>
  );
}

const ChatAreaWrap = styled.div`
  width: 70vw;
  height: 80vh;
  margin: 5vw;

  display: flex;
  align-items: flex-end;
  background-color: white;
`;

const InputWrap = styled.div`
  width: 70vw;
  height: 10vh;
  background-color: white;
  border-color: #f2f2f2;
  border-style: solid;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatInput = styled.input`
  width: 55vw;
  height: 5vh;

  border-radius: 0.375rem;
  border-color: #cdd1dc;
  background: var(--basic-white, #fff);

  /* Borders/Text Input/Field Border */
  box-shadow: 0px 0px 0px 1px #cdd1dc;
  border-style: solid;
  border-width: 1px;

  padding-left: 20px;

  font-size: 1.2em;

  transition: 500ms;
  &:focus {
    border-color: #7b39d1;
    outline: none;
  }
`;

const SendBtn = styled.button`
  width: 6vh;
  height: 6vh;

  border-radius: 100%;
  background-color: #9f63ee;
  outline: none;
  border-style: none;
  box-shadow: 0.5vh;

  margin: 2vh;
  transition: 500ms;

  &:hover {
    background-color: #7b39d1;
  }
`;
export default Input;
