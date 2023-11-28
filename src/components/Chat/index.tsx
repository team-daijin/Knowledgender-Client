import React from "react";
import * as C from "./style";
import List from "./List";
import Input from "./Input";

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
