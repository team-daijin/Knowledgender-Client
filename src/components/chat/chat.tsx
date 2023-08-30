import React from "react";
import * as C from "./chat.style";
import List from "./list/list";
import Input from "./input/input";

function Chat() {
  return (
    <>
      <C.ChatWrap>
        <List></List>
        <Input></Input>
      </C.ChatWrap>
    </>
  );
}

export default Chat;
