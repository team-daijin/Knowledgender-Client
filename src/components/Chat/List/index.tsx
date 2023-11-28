import React from "react";
import * as S from "./style";
import User from "../User";
function List() {
  const sample: Number[] = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <S.ListWrap>
        {sample.map((item: Number, index) => {
          return <User key={index} />;
        })}
      </S.ListWrap>
    </>
  );
}

export default List;
