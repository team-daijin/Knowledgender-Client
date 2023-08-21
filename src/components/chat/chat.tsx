import React from "react";
import * as C from "./chat.style";
import List from "./list/list";

function Chat() {
  return (
    <>
      <C.ChatWrap>
        <List></List>
      </C.ChatWrap>
    </>
  );
}

export default Chat;
