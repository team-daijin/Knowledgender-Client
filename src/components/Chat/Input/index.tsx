import React, { useState, useEffect, KeyboardEventHandler } from "react";
import * as S from "./style";
import send from "../../../assets/Image/send.svg";
import Message from "../Message";
import io, { Socket } from "socket.io-client";

interface ChatMessageProps {
  message: string;
  // sender: string;
  roomId: string;
}

const socket = io("ws://52.78.246.108:8085", {
  transports: ["websocket"],
  // cors: { origin: "*" },
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
      <S.ChatAreaWrap>
        <S.MessageWrap>
          {/* <Message></Message> */}
          {/* {messages.map((message, index) => {
            return (
              <S.Message
                key={index}
                message={message.message}
                // sender={message.sender}
                roomId={message.roomId}
              ></S.Message>
            );
          })} */}
        </S.MessageWrap>
        <S.InputWrap>
          <S.ChatInput
            type="text"
            placeholder="메시지를 입력하세요"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            // onKeyPress={handleKeyPress}
          ></S.ChatInput>
          <S.SendBtn onClick={sendMessage}>
            <img src={send} alt="" style={{ width: 25 }}></img>
          </S.SendBtn>
        </S.InputWrap>
      </S.ChatAreaWrap>
    </>
  );
}

export default Input;
