import React from "react";
import styled from "styled-components";
import User from "../user/user";
function List() {
  const sample: Number[] = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <ListWrap>
        {sample.map((item: Number) => {
          return (
            <>
              <User />
            </>
          );
        })}
      </ListWrap>
    </>
  );
}

const ListWrap = styled.div`
  width: 20vw;
  height: 90vh;

  background-color: white;
`;

export default List;
