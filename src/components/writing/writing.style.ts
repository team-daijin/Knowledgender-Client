import styled from "styled-components";

interface ElementActiveProps {
  isSubmitButtonActivate: boolean;
  isImageFileActivate: boolean;
}

export const WholeWritingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;
export const MainItemContainer = styled.div`
  margin-left: 10.5%;
  padding-top: 2%;
`;
export const TitleBox = styled.div``;
export const Title1 = styled.p`
  color: #090a0a;
  font-family: "Pretendard";
  font-size: 180%;
  font-weight: 700;
  margin-bottom: 0%;
`;
export const Title2 = styled.p`
  color: #303437;
  font-family: "Pretendard";
  font-size: 110%;
  font-weight: 400;
  margin-top: 0.5%;
`;

export const MainContentContainer = styled.div`
  margin-top: 3%;
`;

export const WritingItemTitle = styled.h5`
  color: #434244;
  font-family: "Pretendard";
  font-size: 105%;
  font-weight: 550;
`;
export const InputTitleContentBox = styled.div`
  width: 100%;
  height: 100%;
`;
export const TitleInputPlace = styled.input`
  margin-top: -2%;
  padding-left: 1%;
  width: 48.5%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #d8dae0;
  background: #fff;
  outline-color: #6823c2;
  color: black;
  font-family: "Pretendard";
  font-size: 100%;
  font-weight: 400;
`;

export const SelectiveElementsContiner = styled.div`
  display: flex;
`;

export const SelectCategoriesBox = styled.div`
  width: 50%;
  height: 100%;
`;

export const CategoriesSelectPlace = styled.select`
  margin-top: -2%;
  padding-left: 1%;
  width: 100%;
  height: 55px;
  border-radius: 8px;
  border: 1px solid #d8dae0;
  background: #fff;
  outline-color: #6823c2;
  color: black;
  font-family: "Pretendard";
  font-size: 100%;
  font-weight: 400;
  cursor: pointer;
`;

export const FileUploadButtonBox = styled.div`
  margin-left: 2%;
`;

export const FileContentBoxLabel = styled.label<ElementActiveProps>`
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #d8dae0;
  color: ${(props) => (props.isImageFileActivate ? "white" : "gray")};
  font-family: "Pretendard";
  font-size: 100%;
  padding: 14px 31px;
  background-color: ${(props) =>
    props.isImageFileActivate ? "#6823c2" : "#f2f2f2"};
`;

export const FileContentBoxInput = styled.input`
  display: none;
`;

export const MainContentTextareaContentBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainContenttWritingTextareaPlace = styled.textarea`
  margin-top: -1%;
  padding-left: 1%;
  padding-top: 1%;
  width: 85%;
  height: 220px;
  border-radius: 8px;
  border: 1px solid #d8dae0;
  background: #fff;
  outline-color: #6823c2;
  color: black;
  font-family: "Pretendard";
  font-size: 100%;
  font-weight: 400;
  resize: none;
`;

export const ButtonContentBox = styled.div`
  float: right;
  margin-right: 13.5%;
  margin-top: 1%;
`;

export const SubmitBnt = styled.button<ElementActiveProps>`
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #d8dae0;
  color: ${(props) => (props.isSubmitButtonActivate ? "white" : "gray")};
  font-family: "Pretendard";
  font-size: 100%;
  font-weight: 00;
  padding: 15px 90px;
  background-color: ${(props) =>
    props.isSubmitButtonActivate ? "#6823c2" : "#f2f2f2"};
`;

export const ErrorMessage = styled.p`
  color: #d2092d;
  font-family: "Pretendard";
  font-size: 80%;
  font-weight: 400;
  margin-top: 1%;
`;
