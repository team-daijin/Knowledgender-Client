import React, { useState, useEffect } from "react"; // Removed unused useEffect import
import * as S from "./writing.style";
import Logo from "../../assets/image/signinLogo.svg";
import { WritingCardType } from "../../types/writing/writing.type";
import api from "../../api/customAxios.tsx";

const Writing = () => {
  const [postCardData, setPostCardData] = useState<WritingCardType>({
    title: "",
    category: "HEART",
    content: "",
    image: null,
  });

  const { title, category, content, image } = postCardData;

  const [warningVisible, setWarningVisible] = useState({
    btnEvent: false,
    titleEvent: false,
    contentEvent: false,
    imageEvent: false,
    messageEvent: false,
  });

  const { btnEvent, titleEvent, contentEvent, imageEvent, messageEvent } =
    warningVisible;

  useEffect(() => {
    handlePostSubmitActivation();
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostCardData({ ...postCardData, title: event.target.value });

    setWarningVisible((warningVisible) => ({
      ...warningVisible,
      titleEvent: true,
    }));
    handlePostSubmitActivation();
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPostCardData({ ...postCardData, category: event.target.value });
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostCardData({ ...postCardData, content: event.target.value });
    setWarningVisible((warningVisible) => ({
      ...warningVisible,
      contentEvent: true,
    }));
    handlePostSubmitActivation();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setPostCardData({ ...postCardData, image: selectedImage });
      setWarningVisible((warningVisible) => ({
        ...warningVisible,
        imageEvent: true,
      }));
    }
    handlePostSubmitActivation();
  };

  const handlePostSubmitActivation = () => {
    if (titleEvent && contentEvent) {
      setWarningVisible((warningVisible) => ({
        ...warningVisible,
        btnEvent: true,
      }));
    }
  };

  const handlePostSubmit = () => {
    if (!titleEvent || !contentEvent) {
      alert("모든 필드를 작성해주세요.");
      setWarningVisible((warningVisible) => ({
        ...warningVisible,
        messageEvent: true,
      }));
      return;
    } else {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("content", content);
      formData.append("image", image);
      api
        .post("/api/card/", formData)
        .then((response) => {
          console.log(response);
          alert("작성 글 게시에 성공하셨습니다.");
          setPostCardData({
            ...postCardData,
            title: "",
            category: "HEART",
            content: "",
            image: null,
          });
          setWarningVisible({
            ...warningVisible,
            btnEvent: false,
            titleEvent: false,
            contentEvent: false,
            imageEvent: false,
            messageEvent: false,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("작성 글 게시에 실패하셨습니다.\n다시 시도해주세요.");
        });
    }
  };

  const validCategories = ["HEART", "CRIM", "BODY", "RELATIONSHIP", "EQUALITY"];

  return (
    <>
      <S.topIntroBox>
        <S.logoImg>
          <img src={Logo} alt="Error" />
        </S.logoImg>
        <S.titleBox>
          <S.title1>게시물 작성</S.title1>
          <S.title2>게시할 글 정보를 작성해 주세요.</S.title2>
        </S.titleBox>
      </S.topIntroBox>
      <S.mainContainerItem>
        <S.mainContainerBox>
          <div>
            <S.inputContentTitle>글 제목</S.inputContentTitle>
            <S.inputContentBox
              placeholder="글 제목을 입력해주세요"
              type="text"
              value={title}
              onChange={handleTitleChange}
            ></S.inputContentBox>
            {!titleEvent && messageEvent && (
              <div
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "-64%",
                  marginTop: "-2%",
                }}
              >
                *글 제목을 입력해주세요*
              </div>
            )}
          </div>
          <div>
            <S.inputContentTitle>
              <pre> 카테고리</pre>
            </S.inputContentTitle>
            <S.selectContentBox
              value={category}
              onChange={handleCategoryChange}
            >
              {validCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </S.selectContentBox>
          </div>
          <div>
            <S.inputContentTitle>글 내용</S.inputContentTitle>
            <S.textareaContentBox
              placeholder="글 내용을 입력해주세요"
              value={content}
              onChange={handleContentChange}
            />
            {!contentEvent && messageEvent && (
              <div
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginLeft: "-64%",
                  marginTop: "-2%",
                }}
              >
                *글 내용을 입력해주세요*
              </div>
            )}
          </div>
          <div>
            <S.inputContentTitle>
              <pre> 자료첨부</pre>
            </S.inputContentTitle>
            <S.fileContentBoxLabel isExistence={imageEvent}>
              선택하기
              <S.fileContentBoxInput
                type="file"
                onChange={handleImageChange}
                accept=".jpg, .jpeg, .png"
              />
            </S.fileContentBoxLabel>
          </div>
        </S.mainContainerBox>
      </S.mainContainerItem>
      <S.buttonContentBox>
        <S.submitBnt
          type="submit"
          onClick={handlePostSubmit}
          isActivate={btnEvent}
        >
          게시하기
        </S.submitBnt>
      </S.buttonContentBox>
    </>
  );
};

export default Writing;
