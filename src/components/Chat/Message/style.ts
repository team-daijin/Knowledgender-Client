import styled from "styled-components";

export const ChatWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const MessageWrap = styled.div`
  background-color: #f8f8f8;
  border-color: #f2f2f2;
  border-style: solid;
  width: auto;

  display: inline-block;
  padding: 0.8rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  border-radius: 10rem;

  font-family: "pretendard";
`;

export const ProfileWrap = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.4%;
`;
export const ProfileImg = styled.img`
  border-radius: 100%;
  width: 3rem;
`;

export const ProfileName = styled.div`
  font-size: 1rem;
  font-style: "pretendard";
`;
