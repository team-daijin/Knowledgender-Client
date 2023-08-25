import React, { useState, useEffect } from "react";
import styled from "styled-components";
import send from "../../../assets/image/send.svg";
import Message from "../message/message";
import io, { Socket } from "socket.io-client";

interface ChatMessageProps {
  text: string;
  sender: string;
}

const socket: Socket = io("http://localhost:5000"); // Socket.io 서버 주소로 변경

function Input() {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [messageText, setMessageText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMessages({
      ...messages, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  useEffect(() => {
    socket.on("chat message", (message: ChatMessageProps) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = () => {
    if (messageText.trim() === "") {
      return;
    }
    const newMessage = { text: messageText, sender: "user" };
    socket.emit("chat message", newMessage);
    setMessages([...messages, newMessage]);
    setMessageText("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <ChatAreaWrap>
        <MessageWrap>
          {/* <Message></Message> */}
          {messages.map((message, index) => {
            return (
              <>
                <Message
                  key={index}
                  text={message.text}
                  sender={message.sender}
                ></Message>
              </>
            );
          })}
        </MessageWrap>
        <InputWrap>
          <ChatInput
            type="text"
            placeholder="메시지를 입력하세요"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
          ></ChatInput>
          <SendBtn onClick={sendMessage}>
            <img src={send} alt="" style={{ width: 25 }}></img>
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
  flex-direction: column;
  align-items: flex-end;
  background-color: white;
`;

const MessageWrap = styled.div`
  width: 65vw;
  height: 70vh;
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
