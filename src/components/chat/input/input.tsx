import React, { useState, useEffect, KeyboardEventHandler } from "react";
import styled from "styled-components";
import send from "../../../assets/image/send.svg";
import Message from "../message/message";
import io, { Socket } from "socket.io-client";

interface ChatMessageProps {
  message: string;
  // sender: string;
  roomId: string;
}

const socket = io("ws://52.78.246.108:8085", {
  transports: ["websocket"],
  cors: { origin: "*" },
  query: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});

function Input() {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  useEffect(() => {
    socket.on("room-join", () => {
      console.log("connection server");
    });
    socket.on("message", (Message: ChatMessageProps) => {
      setMessages((prevMessages) => [...prevMessages, Message]);
    });
  }, []);

  const sendMessage = () => {
    if (messageText.trim() === "") {
      return;
    }
    // const newMessage = { text: messageText, sender: "user" };
    const newMessage = {
      message: messageText,
      roomId: "64e9911cef13f60a337dc6be",
    };
    socket.emit("message", newMessage);
    setMessages([...messages, newMessage]);
    setMessageText("");
  };

  const handleKeyPress = (e: KeyboardEvent) => {
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
              <Message
                key={index}
                message={message.message}
                // sender={message.sender}
                roomId={message.roomId}
              ></Message>
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
