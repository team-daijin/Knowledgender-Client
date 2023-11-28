import React from "react";
import * as S from "./style";
import logo from "../../../assets/image/signinImg.svg";

interface ChatMessageProps {
  message: string;
  // sender: string;
  roomId: string;
}

const Message: React.FC<ChatMessageProps> = ({ message, roomId }) => {
  return (
    // <div className={`message ${sender === "user" ? "user" : "other"}`}>
    //   <span className="sender">{sender}</span>
    //   <p className="text">{text}</p>
    // </div>
    <>
      <S.ChatWrap>
        <S.MessageWrap>{message}</S.MessageWrap>
        <S.ProfileWrap>
          <S.ProfileImg src={logo} alt="error"></S.ProfileImg>
          <S.ProfileName>{roomId}</S.ProfileName>
        </S.ProfileWrap>
      </S.ChatWrap>
    </>
  );
};

export default Message;
